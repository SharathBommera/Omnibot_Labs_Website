/**
 * Omnibot Labs — Global Categorized Search Architecture
 * Instant client-side index covering Products, Programs, Projects, Trainers, Impact Stories & Ladder Rungs.
 * Triggered by header search button or Cmd/Ctrl+K shortcut.
 */

(function() {
  'use strict';

  var Search = {
    isOpen: false,
    index: [],

    init: function() {
      this.buildIndex();
      this.injectModal();
      this.bindEvents();
    },

    buildIndex: function() {
      var data = window.OmnibotData;
      if (!data) return;

      var items = [];

      // 1. Products
      if (data.products) {
        data.products.forEach(function(p) {
          items.push({
            type: 'Product / Hardware Kit',
            category: 'Shop',
            title: p.name,
            subtitle: p.category + ' · ' + p.skillLevel + ' · ' + p.price,
            url: 'shop-detail.html?id=' + p.id,
            keywords: (p.name + ' ' + p.category + ' ' + p.shortDesc + ' ' + p.skillLevel + ' ' + (p.possibleProjects || []).join(' ')).toLowerCase()
          });
        });
      }

      // 2. Programs
      if (data.programs) {
        data.programs.forEach(function(pr) {
          items.push({
            type: 'Program / Lab',
            category: 'Programs',
            title: pr.title,
            subtitle: pr.band + ' · ' + pr.duration,
            url: 'program-detail.html?id=' + pr.id,
            keywords: (pr.title + ' ' + pr.band + ' ' + pr.heroTagline + ' ' + pr.description + ' ' + (pr.technologies || []).join(' ')).toLowerCase()
          });
        });
      }

      // 3. Projects
      if (data.projects) {
        data.projects.forEach(function(pj) {
          items.push({
            type: 'Project Showcase',
            category: 'Projects',
            title: pj.title,
            subtitle: pj.category + ' · ' + pj.grade + ' · ' + pj.author,
            url: 'project-detail.html?id=' + pj.id,
            keywords: (pj.title + ' ' + pj.category + ' ' + pj.shortDesc + ' ' + pj.problem + ' ' + pj.technology).toLowerCase()
          });
        });
      }

      // 4. Trainers / Builders
      if (data.trainers) {
        data.trainers.forEach(function(tr) {
          items.push({
            type: 'Builder / Trainer',
            category: 'Trainers',
            title: tr.name,
            subtitle: tr.role + ' · ' + tr.specialty,
            url: 'trainer-detail.html?id=' + tr.id,
            keywords: (tr.name + ' ' + tr.role + ' ' + tr.specialty + ' ' + tr.helpsBuild + ' ' + tr.bio).toLowerCase()
          });
        });
      }

      // 5. Ladder Rungs
      if (data.ladder) {
        data.ladder.forEach(function(ld) {
          items.push({
            type: 'Builder’s Ladder',
            category: 'Curriculum',
            title: 'Grade ' + ld.grade + ' — ' + ld.title,
            subtitle: ld.band + ' · Capstone: ' + ld.capstone,
            url: 'ladder.html#grade-' + ld.grade,
            keywords: ('grade ' + ld.grade + ' ' + ld.title + ' ' + ld.bigQuestion + ' ' + ld.tools + ' ' + ld.capstone).toLowerCase()
          });
        });
      }

      // 6. Impact Stories
      if (data.impact) {
        data.impact.forEach(function(imp) {
          items.push({
            type: 'Social Impact',
            category: 'Impact',
            title: imp.title,
            subtitle: imp.category + ' · ' + imp.location,
            url: 'impact-detail.html?id=' + imp.id,
            keywords: (imp.title + ' ' + imp.category + ' ' + imp.shortDesc + ' ' + imp.summary).toLowerCase()
          });
        });
      }

      this.index = items;
    },

    injectModal: function() {
      if (document.getElementById('site-search-modal')) return;

      var modal = document.createElement('div');
      modal.id = 'site-search-modal';
      modal.className = 'omnibot-search-backdrop';
      modal.setAttribute('aria-hidden', 'true');
      modal.innerHTML = [
        '<div class="omnibot-search-dialog" role="dialog" aria-modal="true" aria-label="Site Search">',
        '  <div class="search-input-wrap">',
        '    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon">',
        '      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
        '    </svg>',
        '    <input type="text" id="site-search-input" placeholder="Search kits, programs, projects, ladder rungs, trainers…" autocomplete="off" spellcheck="false">',
        '    <kbd class="esc-kbd">ESC</kbd>',
        '  </div>',
        '  <div class="search-results-area" id="search-results-list">',
        '    <div class="search-empty-prompt">Type to search the entire OmniBot Labs digital ecosystem.</div>',
        '  </div>',
        '  <div class="search-modal-footer">',
        '    <span class="text-xs text-ink-muted">Press <kbd>↑</kbd> <kbd>↓</kbd> to navigate, <kbd>Enter</kbd> to select, <kbd>Esc</kbd> to close</span>',
        '  </div>',
        '</div>'
      ].join('\n');

      document.body.appendChild(modal);
    },

    bindEvents: function() {
      var self = this;
      var modal = document.getElementById('site-search-modal');
      var input = document.getElementById('site-search-input');

      // Trigger buttons
      document.addEventListener('click', function(e) {
        var trigger = e.target.closest('[data-open-search]');
        if (trigger) {
          e.preventDefault();
          self.open();
        }
      });

      // Keyboard shortcuts
      document.addEventListener('keydown', function(e) {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          if (self.isOpen) self.close();
          else self.open();
        } else if (e.key === 'Escape' && self.isOpen) {
          self.close();
        }
      });

      // Backdrop click
      if (modal) {
        modal.addEventListener('click', function(e) {
          if (e.target === modal) self.close();
        });
      }

      // Input changes
      if (input) {
        input.addEventListener('input', function() {
          self.renderResults(input.value.trim());
        });
      }
    },

    open: function() {
      var modal = document.getElementById('site-search-modal');
      var input = document.getElementById('site-search-input');
      if (modal && input) {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        input.value = '';
        this.renderResults('');
        input.focus();
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
      }
    },

    close: function() {
      var modal = document.getElementById('site-search-modal');
      if (modal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        this.isOpen = false;
        document.body.style.overflow = '';
      }
    },

    renderResults: function(query) {
      var container = document.getElementById('search-results-list');
      if (!container) return;

      if (!query) {
        container.innerHTML = '<div class="search-empty-prompt">Type to search programs, hardware kits, capstones, and builders…</div>';
        return;
      }

      var q = query.toLowerCase();
      var matches = this.index.filter(function(item) {
        return item.keywords.indexOf(q) !== -1 || item.title.toLowerCase().indexOf(q) !== -1;
      });

      if (matches.length === 0) {
        container.innerHTML = [
          '<div class="search-no-results">',
          '  <p>No results found for "<strong>' + query.replace(/</g, '&lt;') + '</strong>"</p>',
          '  <span class="text-xs text-ink-muted">Try searching for "Arduino", "Grade 7", "SLAM", "ESP32", or "School"</span>',
          '</div>'
        ].join('\n');
        return;
      }

      // Group by category
      var groups = {};
      matches.forEach(function(item) {
        if (!groups[item.type]) groups[item.type] = [];
        groups[item.type].push(item);
      });

      var html = '';
      Object.keys(groups).forEach(function(type) {
        html += '<div class="search-group-title">' + type + ' (' + groups[type].length + ')</div>';
        html += '<ul class="search-result-group">';
        groups[type].forEach(function(item) {
          html += [
            '<li>',
            '  <a href="' + item.url + '" class="search-result-row">',
            '    <div class="result-text-col">',
            '      <span class="result-title">' + item.title + '</span>',
            '      <span class="result-sub">' + item.subtitle + '</span>',
            '    </div>',
            '    <span class="result-arrow">→</span>',
            '  </a>',
            '</li>'
          ].join('\n');
        });
        html += '</ul>';
      });

      container.innerHTML = html;
    }
  };

  window.OmnibotSearch = Search;

  document.addEventListener('DOMContentLoaded', function() {
    Search.init();
  });
})();
