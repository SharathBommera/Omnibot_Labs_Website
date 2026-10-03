/**
 * Omnibot Labs — Cart & WhatsApp Request Commerce Engine
 * Pure Vanilla JS · Production-Grade · Zero Dependencies · LocalStorage Persistence
 * Handles: Cart State, Item Add/Remove/Qty, Toast Notifications, Drawer UI, WhatsApp Pre-filled Generation
 */

(function() {
  'use strict';

  var STORAGE_KEY = 'omnibot_request_cart_v1';

  var Cart = {
    items: [],

    init: function() {
      this.load();
      this.renderBadge();
      this.bindGlobalEvents();
      this.renderDrawer();
    },

    load: function() {
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          var parsed = JSON.parse(raw);
          // Validate against current catalog
          if (Array.isArray(parsed) && window.OmnibotData && window.OmnibotData.products) {
            var validIds = window.OmnibotData.products.reduce(function(acc, p) {
              acc[p.id] = p;
              return acc;
            }, {});

            this.items = parsed.filter(function(item) {
              return item && item.id && validIds[item.id] && item.qty > 0;
            }).map(function(item) {
              var product = validIds[item.id];
              return {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
                skillLevel: product.skillLevel,
                qty: Math.max(1, parseInt(item.qty, 10) || 1)
              };
            });
          }
        }
      } catch (e) {
        console.warn('Could not parse saved cart, initializing empty cart.', e);
        this.items = [];
      }
    },

    save: function() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
      } catch (e) {
        console.warn('Could not persist cart to localStorage', e);
      }
      this.renderBadge();
      this.renderDrawer();
      // Dispatch custom event for page listeners (e.g. cart.html)
      window.dispatchEvent(new CustomEvent('omnibot:cart-updated', { detail: { items: this.items } }));
    },

    addItem: function(productId, qty) {
      qty = parseInt(qty, 10) || 1;
      if (qty <= 0) return;

      var product = null;
      if (window.OmnibotData && window.OmnibotData.products) {
        for (var i = 0; i < window.OmnibotData.products.length; i++) {
          if (window.OmnibotData.products[i].id === productId) {
            product = window.OmnibotData.products[i];
            break;
          }
        }
      }

      if (!product) {
        this.showToast('Product not found in current catalog', 'error');
        return;
      }

      var existing = null;
      for (var j = 0; j < this.items.length; j++) {
        if (this.items[j].id === productId) {
          existing = this.items[j];
          break;
        }
      }

      if (existing) {
        existing.qty += qty;
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          skillLevel: product.skillLevel,
          qty: qty
        });
      }

      this.save();
      this.showToast('Added "' + product.name + '" to your request list', 'success');
      this.openDrawer();
    },

    removeItem: function(productId) {
      var itemRemoved = null;
      this.items = this.items.filter(function(item) {
        if (item.id === productId) {
          itemRemoved = item;
          return false;
        }
        return true;
      });
      this.save();
      if (itemRemoved) {
        this.showToast('Removed "' + itemRemoved.name + '"', 'info');
      }
    },

    updateQty: function(productId, newQty) {
      newQty = parseInt(newQty, 10);
      if (isNaN(newQty) || newQty <= 0) {
        this.removeItem(productId);
        return;
      }

      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id === productId) {
          this.items[i].qty = Math.min(newQty, 99);
          break;
        }
      }
      this.save();
    },

    clear: function() {
      this.items = [];
      this.save();
      this.showToast('Cart cleared', 'info');
    },

    getTotalCount: function() {
      return this.items.reduce(function(sum, item) {
        return sum + item.qty;
      }, 0);
    },

    renderBadge: function() {
      var count = this.getTotalCount();
      var badges = document.querySelectorAll('.cart-count-badge');
      badges.forEach(function(el) {
        el.textContent = count;
        el.style.display = count > 0 ? 'inline-flex' : 'none';
        if (count > 0) {
          el.setAttribute('aria-label', count + ' items in request list');
        }
      });
    },

    // Build WhatsApp Pre-filled Request Message
    generateWhatsAppMessage: function(customerInfo) {
      customerInfo = customerInfo || {};
      var items = this.items;
      if (!items.length) return '';

      var lines = [];
      lines.push('Hello OmniBot Labs,');
      lines.push('');
      lines.push('I would like to request the following hardware kits / components:');
      lines.push('');

      items.forEach(function(item, index) {
        lines.push((index + 1) + '. ' + item.name + ' × ' + item.qty + ' (' + item.price + ')');
      });

      lines.push('');
      if (customerInfo.name || customerInfo.city || customerInfo.note) {
        lines.push('--- Customer Details ---');
        if (customerInfo.name) lines.push('Name: ' + customerInfo.name);
        if (customerInfo.phone) lines.push('Phone: ' + customerInfo.phone);
        if (customerInfo.city) lines.push('City/State: ' + customerInfo.city);
        if (customerInfo.role) lines.push('I am a: ' + customerInfo.role);
        if (customerInfo.note) lines.push('Note: ' + customerInfo.note);
        lines.push('');
      }

      lines.push('Please share:');
      lines.push('• Current batch availability & pricing');
      lines.push('• Delivery timelines to my location');
      lines.push('• Payment & invoice options');
      lines.push('');
      lines.push('Thank you!');

      return lines.join('\n');
    },

    // Generate Full WhatsApp URL
    getWhatsAppUrl: function(customerInfo) {
      var phone = (window.OmnibotData && window.OmnibotData.config && window.OmnibotData.config.WHATSAPP_BUSINESS_NUMBER)
        ? window.OmnibotData.config.WHATSAPP_BUSINESS_NUMBER
        : '919876543210';
      var text = this.generateWhatsAppMessage(customerInfo);
      return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text);
    },

    // Trigger WhatsApp Redirection
    sendWhatsAppRequest: function(customerInfo) {
      if (this.items.length === 0) {
        this.showToast('Your request cart is empty', 'error');
        return;
      }
      var url = this.getWhatsAppUrl(customerInfo);
      window.open(url, '_blank', 'noopener,noreferrer');
    },

    // Global Toast Notification System
    showToast: function(message, type) {
      var container = document.getElementById('omnibot-toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'omnibot-toast-container';
        container.className = 'omnibot-toast-container';
        document.body.appendChild(container);
      }

      var toast = document.createElement('div');
      toast.className = 'omnibot-toast toast-' + (type || 'info');
      var icon = '✓';
      if (type === 'error') icon = '✕';
      if (type === 'info') icon = 'ℹ';

      toast.innerHTML = '<span class="toast-icon">' + icon + '</span><span class="toast-msg">' + message + '</span>';
      container.appendChild(toast);

      setTimeout(function() {
        toast.classList.add('is-visible');
      }, 20);

      setTimeout(function() {
        toast.classList.remove('is-visible');
        setTimeout(function() {
          if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 300);
      }, 3500);
    },

    // Build and Inject Drawer UI
    renderDrawer: function() {
      var existing = document.getElementById('cart-drawer');
      if (!existing) {
        var drawer = document.createElement('div');
        drawer.id = 'cart-drawer';
        drawer.className = 'cart-drawer-backdrop';
        drawer.setAttribute('aria-hidden', 'true');
        drawer.innerHTML = [
          '<div class="cart-drawer-panel" role="dialog" aria-modal="true" aria-label="Request Cart">',
          '  <div class="cart-drawer-header">',
          '    <div class="cart-header-title">',
          '      <span class="mono-tag">ENQUIRY CART</span>',
          '      <h3>Requested Kits</h3>',
          '    </div>',
          '    <button type="button" class="cart-close-btn" aria-label="Close cart drawer">&times;</button>',
          '  </div>',
          '  <div class="cart-drawer-body" id="cart-drawer-items">',
          '    <!-- Items injected dynamically -->',
          '  </div>',
          '  <div class="cart-drawer-footer" id="cart-drawer-footer">',
          '    <!-- Footer actions injected dynamically -->',
          '  </div>',
          '</div>'
        ].join('\n');
        document.body.appendChild(drawer);

        // Bind Drawer Close
        drawer.querySelector('.cart-close-btn').addEventListener('click', this.closeDrawer.bind(this));
        drawer.addEventListener('click', function(e) {
          if (e.target === drawer) Cart.closeDrawer();
        });
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
            Cart.closeDrawer();
          }
        });
      }

      var itemsContainer = document.getElementById('cart-drawer-items');
      var footerContainer = document.getElementById('cart-drawer-footer');
      if (!itemsContainer || !footerContainer) return;

      if (this.items.length === 0) {
        itemsContainer.innerHTML = [
          '<div class="cart-empty-state">',
          '  <div class="empty-icon-wrap">',
          '    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">',
          '      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
          '    </svg>',
          '  </div>',
          '  <h4>Your request list is empty</h4>',
          '  <p>Explore our engineering &amp; robotics kits to add items for enquiry.</p>',
          '  <a href="shop.html" class="btn btn-secondary mt-4">Browse Kits</a>',
          '</div>'
        ].join('\n');
        footerContainer.innerHTML = '';
        return;
      }

      // Render Item List
      var html = '<ul class="cart-item-list">';
      this.items.forEach(function(item) {
        html += [
          '<li class="cart-item" data-id="' + item.id + '">',
          '  <img src="' + item.image + '" alt="' + item.name + '" class="cart-item-thumb">',
          '  <div class="cart-item-details">',
          '    <span class="cart-item-cat">' + item.category + '</span>',
          '    <h4 class="cart-item-title">' + item.name + '</h4>',
          '    <div class="cart-item-price">' + item.price + '</div>',
          '    <div class="cart-item-controls">',
          '      <div class="qty-stepper">',
          '        <button type="button" class="qty-btn btn-dec" data-id="' + item.id + '" aria-label="Decrease quantity">−</button>',
          '        <span class="qty-value">' + item.qty + '</span>',
          '        <button type="button" class="qty-btn btn-inc" data-id="' + item.id + '" aria-label="Increase quantity">+</button>',
          '      </div>',
          '      <button type="button" class="cart-item-remove" data-id="' + item.id + '">Remove</button>',
          '    </div>',
          '  </div>',
          '</li>'
        ].join('\n');
      });
      html += '</ul>';
      itemsContainer.innerHTML = html;

      // Bind quantity and remove buttons inside drawer
      itemsContainer.querySelectorAll('.btn-dec').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var id = btn.getAttribute('data-id');
          var it = Cart.items.find(function(x) { return x.id === id; });
          if (it) Cart.updateQty(id, it.qty - 1);
        });
      });
      itemsContainer.querySelectorAll('.btn-inc').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var id = btn.getAttribute('data-id');
          var it = Cart.items.find(function(x) { return x.id === id; });
          if (it) Cart.updateQty(id, it.qty + 1);
        });
      });
      itemsContainer.querySelectorAll('.cart-item-remove').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var id = btn.getAttribute('data-id');
          Cart.removeItem(id);
        });
      });

      // Render Footer Actions
      var count = this.getTotalCount();
      footerContainer.innerHTML = [
        '<div class="cart-summary-row">',
        '  <span>Total Items</span>',
        '  <strong class="font-mono">' + count + ' units</strong>',
        '</div>',
        '<p class="cart-notice-text">',
        '  <span class="status-dot"></span>',
        '  Zero payment gateway needed. Requests are processed via WhatsApp for live inventory and institutional quotes.',
        '</p>',
        '<div class="cart-footer-actions">',
        '  <button type="button" class="btn btn-primary btn-block cart-request-trigger">',
        '    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right:6px;">',
        '      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.17 8.17 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24"/>',
        '    </svg>',
        '    Send Request on WhatsApp',
        '  </button>',
        '  <a href="cart.html" class="btn btn-secondary btn-block mt-2">Review Detailed Request Page</a>',
        '</div>'
      ].join('\n');

      footerContainer.querySelector('.cart-request-trigger').addEventListener('click', function() {
        Cart.promptWhatsAppModal();
      });
    },

    openDrawer: function() {
      var drawer = document.getElementById('cart-drawer');
      if (drawer) {
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    },

    closeDrawer: function() {
      var drawer = document.getElementById('cart-drawer');
      if (drawer) {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    },

    // Modal Confirmation Dialog before opening WhatsApp
    promptWhatsAppModal: function() {
      var modal = document.getElementById('whatsapp-confirm-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'whatsapp-confirm-modal';
        modal.className = 'omnibot-modal-backdrop';
        modal.innerHTML = [
          '<div class="omnibot-modal-card" role="dialog" aria-modal="true">',
          '  <div class="modal-header">',
          '    <span class="mono-tag text-cyan">DIRECT BUILDER DESK</span>',
          '    <h3>Send Request to OmniBot Labs</h3>',
          '    <button type="button" class="modal-close-btn">&times;</button>',
          '  </div>',
          '  <div class="modal-body">',
          '    <p class="text-sm text-ink-soft mb-4">',
          '      You are about to send your hardware request directly to our team via WhatsApp.',
          '      Optionally provide your contact details below so we can quote accurate delivery timelines.',
          '    </p>',
          '    <form id="whatsapp-quick-form" onsubmit="event.preventDefault();">',
          '      <div class="form-group mb-3">',
          '        <label class="form-label" for="wa-cust-name">Your Name</label>',
          '        <input type="text" id="wa-cust-name" class="form-input" placeholder="e.g. Rahul Verma">',
          '      </div>',
          '      <div class="form-row two-col mb-3">',
          '        <div>',
          '          <label class="form-label" for="wa-cust-city">City / State</label>',
          '          <input type="text" id="wa-cust-city" class="form-input" placeholder="e.g. Hyderabad, TS">',
          '        </div>',
          '        <div>',
          '          <label class="form-label" for="wa-cust-role">I am a</label>',
          '          <select id="wa-cust-role" class="form-input">',
          '            <option value="Parent / Independent Builder">Parent / Independent Builder</option>',
          '            <option value="School Educator / Principal">School Educator / Principal</option>',
          '            <option value="College Student / Researcher">College Student / Researcher</option>',
          '            <option value="NGO / Community Partner">NGO / Community Partner</option>',
          '          </select>',
          '        </div>',
          '      </div>',
          '      <div class="form-group mb-4">',
          '        <label class="form-label" for="wa-cust-note">Special Instructions / Questions</label>',
          '        <textarea id="wa-cust-note" class="form-input" rows="2" placeholder="e.g. Need 10 units for a school batch in November."></textarea>',
          '      </div>',
          '      <button type="button" id="confirm-wa-submit-btn" class="btn btn-primary btn-block">',
          '        Continue to WhatsApp →',
          '      </button>',
          '    </form>',
          '  </div>',
          '</div>'
        ].join('\n');
        document.body.appendChild(modal);

        modal.querySelector('.modal-close-btn').addEventListener('click', function() {
          modal.classList.remove('is-open');
        });
        modal.addEventListener('click', function(e) {
          if (e.target === modal) modal.classList.remove('is-open');
        });
        modal.querySelector('#confirm-wa-submit-btn').addEventListener('click', function() {
          var name = document.getElementById('wa-cust-name').value.trim();
          var city = document.getElementById('wa-cust-city').value.trim();
          var role = document.getElementById('wa-cust-role').value;
          var note = document.getElementById('wa-cust-note').value.trim();
          modal.classList.remove('is-open');
          Cart.sendWhatsAppRequest({
            name: name,
            city: city,
            role: role,
            note: note
          });
        });
      }

      modal.classList.add('is-open');
    },

    bindGlobalEvents: function() {
      // Delegate Add to Cart buttons across the site
      document.addEventListener('click', function(e) {
        var addBtn = e.target.closest('[data-add-to-cart]');
        if (addBtn) {
          e.preventDefault();
          var productId = addBtn.getAttribute('data-add-to-cart');
          var qtyInput = document.querySelector('[data-product-qty="' + productId + '"]');
          var qty = qtyInput ? parseInt(qtyInput.value, 10) : 1;
          Cart.addItem(productId, qty);
        }

        var openCartBtn = e.target.closest('[data-open-cart]');
        if (openCartBtn) {
          e.preventDefault();
          Cart.openDrawer();
        }
      });
    }
  };

  // Expose globally
  window.OmnibotCart = Cart;

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    Cart.init();
  });
})();
