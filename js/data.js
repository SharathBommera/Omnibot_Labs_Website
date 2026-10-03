/**
 * Omnibot Labs — Core Catalog, Content & Configuration Store
 * Centralized data source for Products, Programs, Projects, Trainers, Impact Stories & WhatsApp Commerce.
 * Configured for instant static loading, zero build-step overhead, and future CMS/API readiness.
 */

const OmnibotData = {
  // Global Configuration
  config: {
    // Configurable WhatsApp Business Number (Replace with actual OmniBot Labs verified number)
    WHATSAPP_BUSINESS_NUMBER: '919876543210',
    EMAIL: 'hello@omnibotlabs.com',
    PHONE_DISPLAY: '+91 98765 43210',
    LOCATION: 'Hyderabad, Telangana, India',
    COMPANY_NAME: 'OmniBot Labs',
    TAGLINE: 'Learn it. Build it. Test it. Show it. Use it to create impact.',
    HOURS: 'Mon – Sat: 9:30 AM – 6:30 PM IST',
    FOUNDED_YEAR: 2024,
    MAP_COORDINATES: '17.3850° N, 78.4867° E'
  },

  // 1. Hardware & Robotics Products Catalog (Shop)
  products: [
    {
      id: 'arduino-robotics-starter',
      slug: 'arduino-robotics-starter',
      name: 'OmniBot Arduino Robotics Starter Kit',
      category: 'Beginner Robotics Kits',
      categorySlug: 'beginner-robotics',
      skillLevel: 'Beginner (Grades 4–7)',
      ageRange: 'Ages 9–14',
      badge: 'Best Seller',
      price: '₹2,499',
      priceNote: 'Educational price · Kit includes all hardware',
      shortDesc: 'Complete modular robotics chassis with microcontroller, ultrasonic sensor, dual DC gearmotors, and custom solderless shield.',
      description: 'The definitive hands-on robotics foundation kit. Engineered specifically for young builders to master the bridge from physical mechanics to C++ programming. No soldering required. Built around durable industrial acrylic-and-aluminum mounting plates with high-torque gearmotors and an intuitive obstacle-avoidance sensor array.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80'
      ],
      specs: [
        { label: 'Microcontroller', value: 'ATmega328P Development Board (USB-C)' },
        { label: 'Motor Driver', value: 'Dual H-Bridge L298N Module' },
        { label: 'Power Source', value: '2x 18650 Li-Ion Rechargeable Caddy (with BMS protection)' },
        { label: 'Sensors Included', value: 'Ultrasonic HC-SR04 + Dual Infrared Line Tracking Array' },
        { label: 'Chassis Material', value: 'Precision Laser-Cut 3mm Matte Acrylic + Anodized Aluminum' },
        { label: 'Programming Tool', value: 'Arduino IDE, Block-based Scratch / mBlock bridge' }
      ],
      inTheBox: [
        'OmniBot Core ATmega328P Microcontroller Board',
        'Pre-tinned Sensor & Motor Shield',
        '2x High-Torque TT Geared DC Motors (1:48 ratio)',
        '2x Rubber Grip High-Traction Wheels + Front Caster Wheel',
        'HC-SR04 Ultrasonic Distance Sensor with Servo Mounting Bracket',
        'SG90 9g Mini Servo Motor for Active Sensor Panning',
        '2-Channel Optical Infrared Line Tracking Module',
        'Solderless Multi-Color Jumper Wire Harness',
        'Hardware Screw Pack, Screwdriver & Assembly Blueprint'
      ],
      learningOutcomes: [
        'Understand closed-loop mechanical actuation and pulse-width modulation (PWM)',
        'Write autonomous collision avoidance algorithms',
        'Calibrate infrared reflectivity thresholds for high-speed line following',
        'Read schematic diagrams and debug physical electrical connections'
      ],
      possibleProjects: [
        'Autonomous Maze Runner Rover',
        'High-Speed Line Following Racing Bot',
        'Ultrasonic Radar Boundary Sentry',
        'Light Seeking Phototropic Explorer'
      ],
      availability: 'Available',
      inStock: true
    },
    {
      id: 'esp32-iot-smart-lab',
      slug: 'esp32-iot-smart-lab',
      name: 'ESP32 IoT & Sensor Engineering Kit',
      category: 'ESP32 / IoT Kits',
      categorySlug: 'iot-kits',
      skillLevel: 'Intermediate (Grades 6–9)',
      ageRange: 'Ages 11–16',
      badge: 'Connected Hardware',
      price: '₹2,999',
      priceNote: 'Includes cloud dashboard starter telemetry access',
      shortDesc: 'Dual-core 240MHz Wi-Fi and Bluetooth development kit with OLED display, calibrated environment sensors, and relay actuators.',
      description: 'Step into connected cyber-physical systems. The ESP32 Smart Lab kit teaches learners how hardware connects to the global internet. Collect ambient environmental telemetry, stream live sensor data to MQTT dashboards, control high-voltage loads via isolated relays, and configure local web servers hosted entirely on the microchip.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
      ],
      specs: [
        { label: 'Processor', value: 'ESP-WROOM-32 32-bit Dual Core 240 MHz' },
        { label: 'Wireless', value: '802.11 b/g/n Wi-Fi + BLE 4.2' },
        { label: 'Display', value: '0.96 inch I2C OLED Monochrome (128x64)' },
        { label: 'Sensors', value: 'DHT22 Temp/Humidity, LDR, PIR Motion, Sound Level' },
        { label: 'Actuators', value: 'Optocoupler 5V Relay, Active Buzzer, RGB LED' },
        { label: 'Firmware Languages', value: 'MicroPython, C++ (Arduino Core), FreeRTOS' }
      ],
      inTheBox: [
        'ESP32 30-Pin NodeMCU Development Board',
        '0.96" I2C Blue OLED Display Module',
        'DHT22 High-Precision Digital Humidity & Temperature Sensor',
        'PIR Human Presence Sensor Module',
        '1-Channel 250V/10A Opto-Isolated Relay Breakout',
        'Analog Soil Moisture & Ambient Light Sensor Probes',
        '830-Point Solderless Breadboard with Power Supply Rails',
        '65x Breadboard Jumper Wires + USB-C Heavy-Duty Data Cable',
        'Quickstart IoT Cloud Architecture Poster'
      ],
      learningOutcomes: [
        'Master I2C and SPI digital communication protocols',
        'Publish and subscribe to cloud telemetry topics via MQTT and WebSockets',
        'Program dual-core microcontrollers using FreeRTOS tasks',
        'Build real-world smart agriculture and home automation prototypes'
      ],
      possibleProjects: [
        'Real-Time Cloud Weather Station with OLED Dashboard',
        'Smart Automated Plant Hydration & Soil Health Monitor',
        'Intruder Alert System with Telegram / WhatsApp Webhook Notifications',
        'Self-Hosted Local HTTP Server for Appliance Control'
      ],
      availability: 'Available',
      inStock: true
    },
    {
      id: 'ai-vision-edge-kit',
      slug: 'ai-vision-edge-kit',
      name: 'OmniBot AI Vision & Edge ML Kit',
      category: 'AI / ML Kits',
      categorySlug: 'ai-ml-kits',
      skillLevel: 'Advanced (Grades 8–12)',
      ageRange: 'Ages 13–18',
      badge: 'Edge Intelligence',
      price: '₹3,799',
      priceNote: 'Hardware kit + pre-trained edge models repository',
      shortDesc: 'Edge computing vision camera module with pan-tilt 2-axis servo tracking, trained on-device for facial, object, and color identification.',
      description: 'Demystifying artificial intelligence by placing it directly on real silicon. The OmniBot AI Vision Kit teaches how neural network models run at the edge without constant cloud reliance. Students train custom computer vision classifiers, deploy models to embedded memory, and command physical servos to track moving objects in three-dimensional space.',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80'
      ],
      specs: [
        { label: 'Camera Core', value: 'ESP32-CAM Board with OV2640 2MP Optical Sensor' },
        { label: 'Lens Spec', value: '68° / 120° Wide Angle Interchangeable M12 Mount' },
        { label: 'Gimbal', value: '2-Axis Pan & Tilt Mechanism with Dual Metal-Gear Servos' },
        { label: 'Memory', value: '520KB SRAM + 4MB PSRAM + MicroSD Card Slot' },
        { label: 'ML Frameworks', value: 'TensorFlow Lite for Microcontrollers, Edge Impulse' },
        { label: 'Flash LED', value: 'Ultra-bright onboard illumination module' }
      ],
      inTheBox: [
        'OmniBot Vision Core Module (OV2640 + ESP32)',
        'FTDI USB-to-TTL Programmer Dongle with Mode Selectors',
        'Precision 2-Axis CNC Pan-Tilt Gimbal Assembly',
        '2x MG90S Metal Gear Micro Servos',
        '16GB Class 10 High Endurance MicroSD Card with Preloaded Datasets',
        'OmniBot Neural Net Training Calibration Sheet',
        'Rigid Acrylic Bench Stand & Heavy Duty Power Breakout'
      ],
      learningOutcomes: [
        'Data collection, labeling, and feature extraction for computer vision',
        'Quantization and deployment of convolutional neural networks (CNNs) to microcontrollers',
        'Proportional servo closed-loop targeting and spatial coordinate mapping',
        'Understanding inference latency, model weights, and edge privacy'
      ],
      possibleProjects: [
        'Autonomous Sentry Turret that follows moving objects',
        'Edge AI Face and Emotion Recognition Portal',
        'Industrial Quality Control Sorter for Defective Assembly Parts',
        'Hand Gesture Controlled Virtual Keyboard'
      ],
      availability: 'Available',
      inStock: true
    },
    {
      id: 'autonomous-rover-pro',
      slug: 'autonomous-rover-pro',
      name: 'OmniBot Autonomous SLAM Rover Kit',
      category: 'Advanced Robotics',
      categorySlug: 'advanced-robotics',
      skillLevel: 'Advanced (Grades 9–12 & Colleges)',
      ageRange: 'Ages 14–20',
      badge: 'Flagship Platform',
      price: '₹7,999',
      priceNote: 'Professional multi-sensor robotic research chassis',
      shortDesc: 'Heavy-duty 4WD robotics platform with optical wheel encoders, Time-of-Flight LiDAR, 9-DOF IMU, and ROS2 bridge support.',
      description: 'Built for serious robotics engineering. The Autonomous SLAM Rover matches collegiate robotics laboratory standards. Equipped with optical quadrature encoders for precise wheel odometry, a 360-degree laser rangefinder, and a 9-axis inertial measurement unit. Students code PID speed controllers, implement Extended Kalman Filters, and execute 2D SLAM environment mapping.',
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
      ],
      specs: [
        { label: 'Chassis Type', value: 'Laser-Cut Anodized Aluminum 4WD Differential Drive' },
        { label: 'Motors', value: '4x Metal Planetary Geared Motors with 11-PPR Hall Encoders' },
        { label: 'Distance Ranging', value: 'VL53L1X ToF Laser Sensor + 360° RPLiDAR Mount' },
        { label: 'Inertial Sensing', value: 'MPU6050 6-DOF Gyroscope & Accelerometer' },
        { label: 'Motor Controller', value: 'Dual 10A Smart H-Bridge with Current Sensing' },
        { label: 'Compute Support', value: 'Arduino Mega / ESP32 / Raspberry Pi 4 / Jetson Nano' }
      ],
      inTheBox: [
        'Heavy-Duty Anodized Aluminum Dual-Deck Chassis',
        '4x Geared Motors with Pre-Mounted Hall Encoders',
        '4x High-Grip 65mm Off-Road All-Terrain Wheels',
        'OmniBot High-Power Motor Driver Board with Current Protection',
        'VL53L1X Laser Time-of-Flight Sensor Module',
        'MPU6050 6-Axis Motion Tracking Sensor',
        '3S 11.1V 2200mAh Lithium-Polymer Battery Caddy & Safe Charger',
        'Encoder Harnesses, Stand-offs, and Hardware Pack'
      ],
      learningOutcomes: [
        'Kinematic modeling of differential drive mobile robots',
        'PID motor speed control using high-resolution quadrature encoder feedback',
        'Sensor fusion combining wheel odometry and inertial measurement data',
        'Simultaneous Localization and Mapping (SLAM) principles'
      ],
      possibleProjects: [
        'Indoor Room Mapping and 2D Occupancy Grid Generation',
        'Autonomous Point-to-Point Waypoint Navigation',
        'Dead-Reckoning Path Tracker with Drift Compensation',
        'Collegiate Robotics Competition Chassis'
      ],
      availability: 'Available',
      inStock: true
    },
    {
      id: 'bionic-arm-4dof',
      slug: 'bionic-arm-4dof',
      name: '4-DoF Robotic Arm & Kinematics Kit',
      category: 'Advanced Robotics',
      categorySlug: 'advanced-robotics',
      skillLevel: 'Engineering (Grades 7–12)',
      ageRange: 'Ages 12–18',
      badge: 'Mechanics & Math',
      price: '₹3,499',
      priceNote: 'Includes laser-cut chassis & dual-axis analog control',
      shortDesc: 'Desktop robotic manipulator arm with 4 degrees of freedom, metal-gear servos, mechanical gripper, and inverse kinematics library.',
      description: 'Bring industrial automation to the student workbench. The 4-DoF Robotic Arm transforms abstract trigonometry and coordinate geometry into visible mechanical motion. Features a robust laser-cut acrylic skeletal frame, dual-axis joystick controllers, and dedicated open-source libraries for calculating forward and inverse kinematics.',
      image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=800&q=80'
      ],
      specs: [
        { label: 'Degrees of Freedom', value: '4 (Base Rotation, Shoulder, Elbow, Gripper)' },
        { label: 'Servos', value: '4x MG90S Metal-Gear High-Torque Servos' },
        { label: 'Payload Capacity', value: '150 grams at full 220mm horizontal extension' },
        { label: 'Control Input', value: 'Dual 2-Axis Analog Thumbstick Breakouts + GUI Slider' },
        { label: 'Kinematics', value: 'Trigonometric Forward & Analytical Inverse Kinematics sketch' }
      ],
      inTheBox: [
        'Complete Laser-Cut Industrial Acrylic Linkage Set',
        '4x Metal Gear Servos with Mounting Horns',
        'Precision Claw Gripper with Soft-Touch Silicon Pads',
        'Dual Analog Joystick Control Station PCB',
        'Dedicated 5V 3A Regulated Power Supply',
        'Microcontroller Interface Breakout & Wire Harness'
      ],
      learningOutcomes: [
        'Translate Cartesian coordinates (X, Y, Z) into servo joint angles (theta_1, theta_2, theta_3)',
        'Calculate workspace reachability and torque limits',
        'Teach-and-repeat trajectory recording with EEPROM memory persistence',
        'Pick-and-place automation and cycle time optimization'
      ],
      possibleProjects: [
        'Automated Colored Cube Sorting Workcell',
        'Teach-and-Replay Robotic Arm for Assembly Lines',
        'Gimbal-Mounted Camera Tracking System',
        'Haptic Teleoperation using Master-Slave Potentiometers'
      ],
      availability: 'Available',
      inStock: true
    },
    {
      id: 'sensor-fusion-explorer',
      slug: 'sensor-fusion-explorer',
      name: '37-in-1 Sensor Fusion & Electronics Pack',
      category: 'Sensor Kits',
      categorySlug: 'sensor-kits',
      skillLevel: 'All Levels (Grades 3–12)',
      ageRange: 'Ages 8–18',
      badge: 'Essential Toolkit',
      price: '₹1,899',
      priceNote: 'Comes in a rugged organized latch case with pinout guide',
      shortDesc: 'Comprehensive assortment of 37 digital and analog sensors covering optics, acoustics, magnetic fields, touch, temperature, and motion.',
      description: 'The ultimate builder inventory. Never be blocked during prototyping because a specific sensor is missing. Packed inside a compartmentalized storage case with 37 standardized breakout modules, each with pinout markings and sample wiring diagrams for Arduino, ESP32, and Raspberry Pi.',
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80'
      ],
      specs: [
        { label: 'Module Count', value: '37 discrete plug-and-play sensor breakouts' },
        { label: 'Voltage Range', value: '3.3V – 5.0V compatible logic levels' },
        { label: 'Interface Types', value: 'Analog voltage, Digital GPIO, I2C, 1-Wire' },
        { label: 'Enclosure', value: 'Reinforced dual-latch multi-compartment polypropylene case' }
      ],
      inTheBox: [
        'Sensors: Flame, Hall Effect, Ultrasonic, Rotary Encoder, Joystick, Tilt, Laser Diode, Tracking, Shock, Photocell, Touch, Sound, Vibration, Relay, Temperature, Humidity, Barometer, Infrared Receiver & Transmitter, Reed Switch, Heartbeat Sensor, and 16 more.',
        'High-Grade 40-Pin Female-to-Female Jumper Ribbon',
        'High-Grade 40-Pin Male-to-Female Jumper Ribbon',
        'Full-Color Laminated Pinout & Voltage Reference Card'
      ],
      learningOutcomes: [
        'Analog-to-Digital conversion (ADC) and resolution principles',
        'Noise filtering and signal debouncing in software',
        'Comparing optical vs. acoustic vs. capacitive sensing modalities'
      ],
      possibleProjects: [
        'Comprehensive Weather & Air Quality Station',
        'Biometric Heart Rate and Stress Level Indicator',
        'Laser Tripwire Home Security Perimeter',
        'Smart Musical Theremin using Ultrasonic Proximity'
      ],
      availability: 'Available',
      inStock: true
    },
    {
      id: 'classroom-stem-bundle',
      slug: 'classroom-stem-bundle',
      name: 'OmniBot Institutional Classroom Innovation Bundle',
      category: 'Educational Bundles',
      categorySlug: 'educational-bundles',
      skillLevel: 'Institutional (Schools & Colleges)',
      ageRange: 'Schools & Innovation Labs',
      badge: 'For Institutions',
      price: 'Request Institutional Pricing',
      priceNote: 'Custom batch sizing from 10 to 100 student seats',
      shortDesc: 'Turnkey institutional bundle with 10x robot kits, 10x IoT kits, trainer hardware, replacement parts, and printed curriculum workbooks.',
      description: 'Everything a school or college needs to launch a world-class robotics and AI makerspace in one seamless shipment. Tested across thousands of student hours. Includes structured storage bins, redundant spare components (wires, motors, servos, boards), teacher lesson plans, slide decks, and access to the OmniBot Trainer Support Network.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80'
      ],
      specs: [
        { label: 'Student Capacity', value: 'Serves 20–30 students simultaneously in pairs' },
        { label: 'Kit Content', value: '10x Arduino Starter Bots + 10x ESP32 IoT Labs + 2x AI Vision Kits' },
        { label: 'Consumables & Spares', value: 'Extra motors, servos, breadboards, jumper wires, resistors' },
        { label: 'Curriculum Assets', value: 'Grade 3–12 Teacher Syllabi, Rubrics, Project Guides, Code Repos' },
        { label: 'Support', value: 'Dedicated Master Trainer Orientation & Periodic Check-ins' }
      ],
      inTheBox: [
        '10x Complete OmniBot Arduino Robotics Starter Kits',
        '10x Complete ESP32 IoT & Sensor Engineering Kits',
        '2x Advanced AI Vision & Edge ML Demonstration Kits',
        '1x Master Spares & Tool Organizer Box (Digital Multimeter, Wire Strippers, Screwdrivers)',
        '30x Student Builder Logbooks (Printed wire-bound workbooks)',
        '1x Faculty Implementation Handbook & Lesson Schedules'
      ],
      learningOutcomes: [
        'Equip an entire grade cohort with hands-on STEM and coding fluency',
        'Host institutional robotics showcases and demo days',
        'Prepare students for national and international hackathons and robotics leagues'
      ],
      possibleProjects: [
        'Annual School Robotics League & Obstacle Tournament',
        'Campus Smart Infrastructure Student Hackathon',
        'Community Tech Day Public Exhibition'
      ],
      availability: 'On Request',
      inStock: true
    },
    {
      id: 'wearable-iot-badge',
      slug: 'wearable-iot-badge',
      name: 'Hackable ESP32 Cyber-Badge & Mesh Node',
      category: 'ESP32 / IoT Kits',
      categorySlug: 'iot-kits',
      skillLevel: 'Intermediate (Grades 6–12)',
      ageRange: 'Ages 11–18',
      badge: 'Community Favorite',
      price: '₹1,699',
      priceNote: 'Rechargeable, wear on lanyard, interactive peer mesh',
      shortDesc: 'Wearable PCB conference-style cyber badge with RGB LED matrix, pushbuttons, Wi-Fi mesh networking, and LiPo charge circuit.',
      description: 'Wear your code on your chest. Designed for hackathons, science fairs, and community events. Learners flash their own animations, code peer-to-peer ESP-NOW mesh messaging where badges automatically greet other nearby badges, and build handheld micro-games.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
      ],
      specs: [
        { label: 'Core', value: 'ESP32-C3 RISC-V Single Core 160MHz' },
        { label: 'Display', value: '5x5 Addressable WS2812B RGB NeoPixel Matrix' },
        { label: 'Inputs', value: '4x Tactile Game Buttons + 1x Mode Switch' },
        { label: 'Power', value: 'Onboard TP4056 Micro-USB LiPo Charger + Power Switch' },
        { label: 'Wireless Protocol', value: 'ESP-NOW Peer-to-Peer Mesh + Wi-Fi SoftAP' }
      ],
      inTheBox: [
        'OmniBot Matte Black Silk-Screened Cyber Badge PCB',
        'Pre-soldered ESP32-C3, NeoPixels, and Charging IC',
        '500mAh Slimline LiPo Battery with Safety Circuit',
        'OmniBot Labs Custom Lanyard with Quick-Release Buckle',
        'USB-C Programming Cable'
      ],
      learningOutcomes: [
        'Decentralized mesh networking without central routers',
        'Bitmapped sprite animation rendering on pixel arrays',
        'State machine design for handheld button-driven games'
      ],
      possibleProjects: [
        'Nearby Friend Discovery Beacon',
        'Handheld Reaction Time & Reflex Game',
        'Digital Business Card over Wi-Fi Captive Portal'
      ],
      availability: 'Available',
      inStock: true
    }
  ],

  // 2. Programs Ecosystem
  programs: [
    {
      id: 'foundations-robotics-ai',
      slug: 'foundations-robotics-ai',
      title: 'Foundations: Hardware, Motion & Logic',
      band: 'Foundations · Grades 3–5',
      audience: 'Students in Grades 3, 4, 5 (Ages 8–11)',
      difficulty: 'Beginner',
      duration: '36 Weeks (1 Session / Week · 72 Hours total)',
      format: 'In-Person Workshop or School Embedded Lab',
      badge: 'Grades 3–5',
      heroTagline: 'From cardboard machines to tactile sensors and first code.',
      description: 'Children move from being consumers of screen apps to builders of physical mechanisms. They cut cardboard cams, twist copper tape circuits, wire micro:bits, and write their first block-based algorithms. Every semester introduces at most one new tool, ensuring zero intimidation and deep mechanical confidence.',
      technologies: ['Cardboard Engineering', 'Copper Circuits', 'micro:bit', 'Scratch / MakeCode', 'DC Motors', 'Optical Sensors'],
      hardware: ['Cardboard Automaton Chassis', 'BBC micro:bit v2', 'Servo Motors', 'Light Dependent Resistors', 'Buzzer Modules'],
      capstone: 'Automaton Theater & Biome Monitoring Terrarium',
      outcomes: [
        'Understand gear ratios, linkages, and mechanical advantage',
        'Construct reliable electrical circuits with switches and LEDs',
        'Write conditional logic: if-this-then-that reactive systems',
        'Ship a finished physical build for family showcase day'
      ],
      modules: [
        { title: 'Unit 1: The Machine Makers', summary: 'Levers, cams, and hand-cranked automata. Physical cardboard mechanics before code.' },
        { title: 'Unit 2: Electricity That Moves', summary: 'Batteries, breadboards, motors, and conductors. Building kinetic drawing machines.' },
        { title: 'Unit 3: Microcontrollers Enter', summary: 'Flashing our first micro:bit. Buttons, LED matrices, and simple block logic.' },
        { title: 'Unit 4: Public Capstone Build', summary: 'Designing, testing, and presenting the Automaton Theater for parents and peers.' }
      ]
    },
    {
      id: 'bridge-code-machines',
      slug: 'bridge-code-machines',
      title: 'Bridge: Python, Microcontrollers & IoT',
      band: 'Bridge · Grades 6–7',
      audience: 'Students in Grades 6 & 7 (Ages 11–13)',
      difficulty: 'Intermediate',
      duration: '36 Weeks (1 Session / Week · 72 Hours total)',
      format: 'In-Person Workshop or School Embedded Lab',
      badge: 'Grades 6–7',
      heroTagline: 'Graduating from blocks to real Python and cloud-connected hardware.',
      description: 'The critical transition bridge. Learners say goodbye to drag-and-drop code and write syntax in Python and C++. They build retro game consoles, connect microcontrollers to local Wi-Fi networks, and publish live sensor telemetry to the web.',
      technologies: ['Python', 'C++ Basics', 'ESP32 / NodeMCU', 'I2C / SPI Sensors', 'OLED Displays', 'MQTT Protocols'],
      hardware: ['OmniBot ESP32 Smart Lab Kit', '0.96" OLED Display', 'DHT22 Climate Sensor', 'Arcade Button Console'],
      capstone: 'Custom Retro Arcade Cabinet & Cloud Weather Station',
      outcomes: [
        'Write structured Python functions, loops, and data structures',
        'Interface microcontrollers with digital bus sensors (I2C/SPI)',
        'Connect physical sensors to cloud databases and live dashboards',
        'Debug syntax errors and circuit faults independently'
      ],
      modules: [
        { title: 'Unit 1: The Python Jump', summary: 'Variables, loops, and logic in text. Translating algorithms into real code.' },
        { title: 'Unit 2: Physical Computing with ESP32', summary: 'Controlling pins, reading analog voltages, and refreshing OLED screens.' },
        { title: 'Unit 3: Internet of Things & Telemetry', summary: 'Sending packets over Wi-Fi. Publishing sensor data to cloud topics.' },
        { title: 'Unit 4: The Arcade Capstone', summary: 'Designing an interactive video game with custom physical hardware buttons.' }
      ]
    },
    {
      id: 'engineering-autonomous-systems',
      slug: 'engineering-autonomous-systems',
      title: 'Engineering: Autonomous Robotics & Embedded C++',
      band: 'Engineering · Grades 8–9',
      audience: 'Students in Grades 8 & 9 (Ages 13–15)',
      difficulty: 'Advanced',
      duration: '36 Weeks (1 Session / Week · 72 Hours total)',
      format: 'In-Person Workshop or School Embedded Lab',
      badge: 'Grades 8–9',
      heroTagline: 'PID control, motor encoders, edge microcontrollers, and autonomous rovers.',
      description: 'Serious engineering principles. Students leave toy robotics behind and build industrial-grade wheeled platforms. They write proportional-integral-derivative (PID) control algorithms, read quadrature wheel encoders in real time, and integrate computer vision models running at the edge.',
      technologies: ['Embedded C++', 'PID Control Theory', 'Encoder Odometry', 'TensorFlow Lite for MCU', 'Computer Vision Basics'],
      hardware: ['OmniBot SLAM Rover Platform', 'Hall Effect Wheel Encoders', 'ESP32-CAM AI Vision Unit', 'Motor Drivers'],
      capstone: 'Autonomous Maze Solving Rover & Vision-Guided Sorting Workcell',
      outcomes: [
        'Implement closed-loop PID control loops for velocity and heading stability',
        'Read quadrature signals via hardware interrupts with microsecond precision',
        'Train and deploy small edge convolutional neural networks',
        'Compete in high-stakes autonomous obstacle challenges'
      ],
      modules: [
        { title: 'Unit 1: Motor Physics & Encoders', summary: 'Interrupt handlers, optical encoders, and odometry mathematics.' },
        { title: 'Unit 2: PID Control Loops in C++', summary: 'Tuning P, I, and D parameters for laser-straight high-speed rover driving.' },
        { title: 'Unit 3: Edge Machine Learning', summary: 'Training visual classifiers on Edge Impulse and flashing models to silicon.' },
        { title: 'Unit 4: Autonomous Championship Capstone', summary: 'Robots solve unfamiliar labyrinths completely autonomously without remote control.' }
      ]
    },
    {
      id: 'frontier-edge-ai-ros',
      slug: 'frontier-edge-ai-ros',
      title: 'Frontier: Edge AI, Vision & ROS',
      band: 'Frontier · Grades 10–12 & Colleges',
      audience: 'High School Seniors, Pre-University & Undergraduate Engineering',
      difficulty: 'Expert',
      duration: '40 Weeks (Intensive Project Studio · 90 Hours total)',
      format: 'Makerspace Lab & Research Studio',
      badge: 'Grades 10–12',
      heroTagline: 'Collegiate robotics operating systems, LiDAR SLAM, and defended research theses.',
      description: 'The highest rung of the Builder’s Ladder. Students operate at the frontier of modern robotics. They use ROS 2 (Robot Operating System), calculate inverse kinematics for multi-joint arms, map 3D spaces with LiDAR, and conclude with an independently defended public research capstone.',
      technologies: ['ROS 2 (Robot Operating System)', 'Linux / Ubuntu', 'LiDAR & 2D SLAM', 'Inverse Kinematics', 'Edge TPU / Jetson', 'Git & CI/CD'],
      hardware: ['OmniBot Autonomous SLAM Rover Pro', '4-DoF Robotic Arm', 'RPLiDAR 360° Laser', 'Raspberry Pi 4 / Jetson'],
      capstone: 'Defended Senior Thesis & Open-Source Hardware Repository',
      outcomes: [
        'Publish and subscribe nodes across ROS 2 computation graphs',
        'Perform 2D environment mapping and autonomous navigation',
        'Author technical whitepapers and documentation',
        'Present and defend real engineering solutions before an external industry panel'
      ],
      modules: [
        { title: 'Unit 1: Linux & ROS 2 Architecture', summary: 'Publishers, subscribers, services, and parameters in robotics middleware.' },
        { title: 'Unit 2: Spatial Sensing & SLAM', summary: 'Point clouds, laser distance ranging, costmaps, and path planning.' },
        { title: 'Unit 3: Manipulator Kinematics', summary: 'Matrix transformations and inverse kinematics for multi-axis robotic arms.' },
        { title: 'Unit 4: Defended Research Capstone', summary: 'Individual 10-week capstone thesis, open-source code release, and public defense.' }
      ]
    },
    {
      id: 'school-innovation-lab',
      slug: 'school-innovation-lab',
      title: 'Institutional School Innovation Lab Partnership',
      band: 'Schools & Educational Institutions',
      audience: 'Principals, Academic Directors, STEM Coordinators & School Boards',
      difficulty: 'Institutional Implementation',
      duration: 'Year-Round Academic Integration (Customizable)',
      format: 'On-Campus Lab Setup + Trainer Deployment + Curriculum',
      badge: 'Institutional',
      heroTagline: 'Turn your campus into a center of genuine engineering excellence.',
      description: 'We partner with forward-thinking schools to build authentic robotics and AI innovation labs. We do not sell boxed kits that collect dust on shelves. We provide the complete physical lab design, hardware infrastructure, 10-year Builder’s Ladder curriculum, trainer training, student assessments, and annual public demo day execution.',
      technologies: ['Complete Grade 3–12 Curriculum', 'Hardware Lab Infrastructure', 'Trainer Enablement', 'LMS Workbooks', 'Hackathons'],
      hardware: ['Classroom Hardware Sets', 'Workbench Tool Stations', 'Organizer Storage', 'Safety Gear'],
      capstone: 'Annual In-School Innovation Exhibition & National Competitions',
      outcomes: [
        'Full NEP 2020 & global STEM compliance with verifiable hands-on project artifacts',
        'Certified faculty enablement or deployed OmniBot Master Trainers',
        'Measurable student portfolio development with working hardware builds',
        'Differentiated school reputation as an authentic technology leader'
      ],
      modules: [
        { title: 'Phase 1: Lab Architecture & Provisioning', summary: 'Site survey, workbench configuration, and complete hardware kit provisioning.' },
        { title: 'Phase 2: Curriculum Integration & Faculty Bootcamps', summary: 'Aligning with academic timetables and training local science and computer teachers.' },
        { title: 'Phase 3: Academic Execution & Mentorship', summary: 'Weekly guided sessions, regular student progress reviews, and hardware maintenance.' },
        { title: 'Phase 4: Capstone Exhibition & Competitions', summary: 'Curating the annual student demo day, judging, and feeder into regional hackathons.' }
      ]
    },
    {
      id: 'college-iot-robotics-bootcamp',
      slug: 'college-iot-robotics-bootcamp',
      title: 'College Engineering Bootcamps & Hackathons',
      band: 'Higher Education & Technical Colleges',
      audience: 'Engineering Students (ECE, EEE, CSE, Mech, Mechatronics)',
      difficulty: 'Collegiate / Industry-Prep',
      duration: '3–5 Day Intensive Sprints or 6-Week Semester Electives',
      format: 'On-Campus High-Intensity Hackathon & Lab Work',
      badge: 'Colleges',
      heroTagline: 'Bridge the gap between college theory and real embedded product engineering.',
      description: 'Engineering textbooks often stop at equations. Our collegiate sprints place industry-grade microcontrollers, LiDAR sensors, and edge AI boards directly in the hands of college students. Mentored by experienced hardware builders, students prototype industrial IoT nodes, robot controllers, and autonomous rovers from scratch.',
      technologies: ['FreeRTOS', 'Embedded C++', 'PCB Design Basics', 'ROS 2', 'IoT Cloud Infrastructure', 'Edge ML'],
      hardware: ['ESP32 Dual-Core Dev Boards', 'Autonomous SLAM Rovers', 'Logic Analyzers', 'Digital Oscilloscopes'],
      capstone: '48-Hour Live Hardware Hackathon & Industry Demo Pitch',
      outcomes: [
        'Hands-on experience with industrial communication buses (CAN, I2C, SPI, UART)',
        'Understanding RTOS multitasking, queues, and mutexes',
        'Production-quality GitHub repositories for placement portfolios',
        'Direct mentorship from practicing hardware and robotics engineers'
      ],
      modules: [
        { title: 'Sprint 1: Microcontroller Deep Dive', summary: 'Registers, timers, interrupts, and DMA on modern 32-bit microcontrollers.' },
        { title: 'Sprint 2: Sensor Protocols & Bus Debugging', summary: 'Probing waveforms with logic analyzers and debugging timing glitches.' },
        { title: 'Sprint 3: Connected Architectures', summary: 'End-to-end telemetry pipelines from sensor edge to cloud database.' },
        { title: 'Sprint 4: The 48-Hour Build Sprint', summary: 'Teams build and demonstrate an end-to-end working physical product prototype.' }
      ]
    }
  ],

  // 3. The 10-Year Builder's Ladder Rungs (Curriculum Data)
  ladder: [
    {
      grade: 3,
      title: 'Think Like a Builder',
      band: 'Foundations',
      bandBadge: 'bg-amber text-ink',
      age: 'Ages 8–9',
      hours: '24 guided hours',
      bigQuestion: 'How does an idea become a physical object?',
      tools: 'Cardboard + micro:bit v2',
      hardwareFocus: 'Levers, cams, pushrods, micro:bit 5x5 LED grid, capacitive touch',
      codingFocus: 'Block-based sequencing, conditionals, loops',
      capstone: 'Automaton Theater',
      capstoneDesc: 'A hand-cranked cardboard mechanical theater whose animated backdrop reacts to student-coded sensor triggers.',
      units: [
        'Unit 1: The Machine Makers (Levers & Linkages)',
        'Unit 2: Electronic Spark (Copper Circuits & LEDs)',
        'Unit 3: The Microcontroller (Buttons & Display)',
        'Unit 4: Capstone Arcade (Building the Showcase)'
      ]
    },
    {
      grade: 4,
      title: 'Make It Move',
      band: 'Foundations',
      bandBadge: 'bg-amber text-ink',
      age: 'Ages 9–10',
      hours: '32 guided hours',
      bigQuestion: 'How do machines transform energy into motion?',
      tools: 'DC Motors + Motor Shields',
      hardwareFocus: 'Geared motors, pulleys, battery packs, chassis balance, wheel friction',
      codingFocus: 'Motor speed control, event-driven triggers, timer interrupts',
      capstone: 'Kinetic Drawing Automaton',
      capstoneDesc: 'A motor-driven drawing rover that computes geometric spiral patterns on large butcher paper rolls.',
      units: [
        'Unit 1: Motors and Friction',
        'Unit 2: Circuit Switching and Direction Control',
        'Unit 3: Timing and Movement Algorithms',
        'Unit 4: Capstone Kinetic Art Bot'
      ]
    },
    {
      grade: 5,
      title: 'Sense the World',
      band: 'Foundations',
      bandBadge: 'bg-amber text-ink',
      age: 'Ages 10–11',
      hours: '36 guided hours',
      bigQuestion: 'How do machines perceive physical reality without human eyes?',
      tools: 'Ultrasonic + Light + Temperature Sensors',
      hardwareFocus: 'Analog vs digital sensor signals, calibration, breadboard wiring',
      codingFocus: 'Threshold checks, relational operators, feedback loops',
      capstone: 'Interactive Biome Terrarium',
      capstoneDesc: 'A climate-controlled closed mini-biosphere with automated fan venting and moisture alerts.',
      units: [
        'Unit 1: Analog Signals & Physical Sensors',
        'Unit 2: Closed-Loop Feedback Control',
        'Unit 3: Threshold Tuning and Calibration',
        'Unit 4: Capstone Biosphere System'
      ]
    },
    {
      grade: 6,
      title: 'Code the Machine',
      band: 'Bridge',
      bandBadge: 'bg-violet text-white',
      age: 'Ages 11–12',
      hours: '36 guided hours',
      bigQuestion: 'How does human text command electronic silicon?',
      tools: 'Python / MicroPython + OLED Display',
      hardwareFocus: 'I2C display buses, rotary encoders, sound synthesis chips',
      codingFocus: 'Text-based Python syntax, functions, lists, state variables',
      capstone: 'Retro Arcade Game Cabinet',
      capstoneDesc: 'A handheld console running custom Python game loops on an OLED screen with arcade pushbuttons.',
      units: [
        'Unit 1: The Transition to Text Code',
        'Unit 2: Digital Bus Communication (I2C)',
        'Unit 3: Game Loop State Machines',
        'Unit 4: Capstone Arcade Cabinet'
      ]
    },
    {
      grade: 7,
      title: 'Connect to the Cloud',
      band: 'Bridge',
      bandBadge: 'bg-violet text-white',
      age: 'Ages 12–13',
      hours: '40 guided hours',
      bigQuestion: 'What happens when devices talk across the globe?',
      tools: 'ESP32 Wi-Fi + MQTT Cloud Broker',
      hardwareFocus: 'Wi-Fi microcontrollers, optocoupled relays, ambient climate probes',
      codingFocus: 'Network sockets, HTTP GET/POST, JSON parsing, MQTT pub/sub',
      capstone: 'Distributed Microclimate Weather Station',
      capstoneDesc: 'A solar-charged outdoor telemetry beacon streaming live atmospheric pressure and temperature to a public map.',
      units: [
        'Unit 1: Wireless Networking Fundamentals',
        'Unit 2: Client-Server Architecture & APIs',
        'Unit 3: Cloud Telemetry & Time-Series Graphs',
        'Unit 4: Capstone Microclimate Node'
      ]
    },
    {
      grade: 8,
      title: 'Autonomous Systems',
      band: 'Engineering',
      bandBadge: 'bg-coral text-white',
      age: 'Ages 13–14',
      hours: '40 guided hours',
      bigQuestion: 'How can a machine navigate without human assistance?',
      tools: 'Dual H-Bridges + Optical Wheel Encoders',
      hardwareFocus: 'High-current motor drivers, quadrature encoders, lithium power safety',
      codingFocus: 'Embedded C++, interrupt service routines, PID closed-loop tuning',
      capstone: 'High-Speed Autonomous Line & Maze Rover',
      capstoneDesc: 'An autonomous rover utilizing PID differential drive to navigate unfamiliar high-speed track layouts.',
      units: [
        'Unit 1: Hardware Interrupts & Odometry',
        'Unit 2: Closed-Loop PID Mathematical Tuning',
        'Unit 3: State Machines & Maze Search Algorithms',
        'Unit 4: Capstone Grand Prix Showcase'
      ]
    },
    {
      grade: 9,
      title: 'Hardware Meets AI',
      band: 'Engineering',
      bandBadge: 'bg-coral text-white',
      age: 'Ages 14–15',
      hours: '44 guided hours',
      bigQuestion: 'How does artificial intelligence execute on a tiny microchip?',
      tools: 'Edge ML + Vision Camera Module',
      hardwareFocus: 'Camera sensor pipelines, 2-axis servo gimbals, memory constraints',
      codingFocus: 'Machine learning datasets, neural net quantization, edge inference',
      capstone: 'Vision-Guided Automated Sorter',
      capstoneDesc: 'A camera station that classifies physical objects in real-time and commands a servo diverter to sort them.',
      units: [
        'Unit 1: Computer Vision Fundamentals',
        'Unit 2: Training & Quantizing Edge Models',
        'Unit 3: Servo Kinematics & Active Tracking',
        'Unit 4: Capstone Intelligent Sorting Workcell'
      ]
    },
    {
      grade: 10,
      title: 'Intelligent Mobile Robots & SLAM',
      band: 'Frontier',
      bandBadge: 'bg-mint text-ink',
      age: 'Ages 15–16',
      hours: '48 guided hours',
      bigQuestion: 'How does a robot know where it is in an unknown room?',
      tools: 'Time-of-Flight LiDAR + ROS 2 Nodes',
      hardwareFocus: 'LiDAR scanners, 9-DoF IMUs, single-board computers (Raspberry Pi/Linux)',
      codingFocus: 'ROS 2 nodes, laser point clouds, 2D occupancy grid mapping',
      capstone: 'Autonomous SLAM Mapping Rover',
      capstoneDesc: 'A robot that enters an unknown enclosed building, maps the interior with laser beams, and navigates back to base.',
      units: [
        'Unit 1: Linux for Robotics & ROS 2 Graph',
        'Unit 2: Laser Distance Scanning (LiDAR)',
        'Unit 3: Simultaneous Localization & Mapping (SLAM)',
        'Unit 4: Capstone Autonomous Explorer'
      ]
    },
    {
      grade: 11,
      title: 'Robotic Manipulation & Kinematics',
      band: 'Frontier',
      bandBadge: 'bg-mint text-ink',
      age: 'Ages 16–17',
      hours: '48 guided hours',
      bigQuestion: 'How do we mathematically command robot limbs in 3D space?',
      tools: '4-DoF Robotic Arm + Inverse Kinematics',
      hardwareFocus: 'Multi-axis linkages, metal-gear servo torques, mechanical gripper jaws',
      codingFocus: 'Trigonometric forward & inverse kinematics, trajectory planning in C++',
      capstone: 'Precision Robotic Pick-and-Place Workcell',
      capstoneDesc: 'A multi-axis robotic arm that uses camera feedback to pick moving items from a conveyor belt.',
      units: [
        'Unit 1: Coordinate Frames & Forward Kinematics',
        'Unit 2: Analytical Inverse Kinematics',
        'Unit 3: Trajectory Smoothing & Acceleration',
        'Unit 4: Capstone Industrial Assembly Cell'
      ]
    },
    {
      grade: 12,
      title: 'Defended Research Thesis',
      band: 'Frontier',
      bandBadge: 'bg-mint text-ink',
      age: 'Ages 17–18',
      hours: '60 guided hours',
      bigQuestion: 'What real problem will you build a novel solution for?',
      tools: 'Full Engineering Stack + Open Hardware',
      hardwareFocus: 'Custom printed circuit boards (PCBs), 3D CAD modeling, embedded systems',
      codingFocus: 'End-to-end architecture, version control, technical documentation, whitepapers',
      capstone: 'Defended Public Capstone Thesis',
      capstoneDesc: 'A six-month original engineering thesis, fully documented on GitHub, built with custom hardware, and defended before an expert review board.',
      units: [
        'Unit 1: Problem Definition & Literature Review',
        'Unit 2: Rapid Prototyping & Iterative Testing',
        'Unit 3: Whitepaper Writing & Code Open-Sourcing',
        'Unit 4: Public Thesis Defense & Exhibition'
      ]
    }
  ],

  // 4. Projects Showcase (Real Student & Builder Builds)
  projects: [
    {
      id: 'solar-river-probe',
      slug: 'solar-river-probe',
      title: 'Solar-Powered Autonomous River Quality Probe',
      category: 'IOT',
      grade: 'Grade 12 Capstone',
      author: 'Aarav & Pranav (Student Builders)',
      location: 'Hyderabad, Telangana',
      badge: 'Civic Impact',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'A floating catamaran buoy that measures water turbidity, dissolved oxygen, and pH in the Musi River, uploading data over cellular IoT.',
      problem: 'Municipal water quality testing in urban water bodies is typically periodic and manual, missing rapid transient industrial discharge events that occur at night.',
      idea: 'Deploy an autonomous, solar-recharged floating sensor node with GPS and multi-parameter probe telemetry that publishes water safety metrics continuously to an open-source map.',
      build: 'Constructed from lightweight UV-resistant PVC pontoons with a custom IP67 waterproof electronics enclosure housing an ESP32 board, LTE-M modem, and 10W solar panel with MPPT charging.',
      technology: 'ESP32, Cellular NB-IoT / LTE-M, Analog pH & Turbidity Probes, DS18B20 Temp, FreeRTOS, Grafana Cloud Dashboard',
      test: 'Tested in controlled laboratory water tanks with calibrated chemical buffers, then field-tested over 72 continuous hours in a lake basin.',
      result: 'Maintained 99.4% uptime, transmitted 4,300 discrete telemetry data points, and flagged two significant localized turbidity spikes.',
      learning: 'Bio-fouling on submerged optical sensors occurs rapidly; the students engineered an automated mechanical wiper cycle to keep probe faces clear.'
    },
    {
      id: 'autonomous-slam-rover',
      slug: 'autonomous-slam-rover',
      title: 'Autonomous SLAM Warehouse Navigation Rover',
      category: 'ROBOTICS',
      grade: 'Grade 10 Build',
      author: 'Sneha & Team Builder Alpha',
      location: 'OmniBot Labs Workshop',
      badge: 'Engineering',
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'A 4WD aluminum mobile robot that generates 2D laser occupancy maps of cluttered corridors and navigates autonomously.',
      problem: 'GPS signals cannot penetrate indoor warehouses, requiring robots to map walls and obstacles in real-time using on-chassis sensors.',
      idea: 'Combine spinning LiDAR laser distance points with high-speed optical wheel encoders to calculate simultaneous localization and mapping (SLAM).',
      build: 'Built on the OmniBot 4WD Anodized Aluminum chassis with metal planetary gearmotors, 11-PPR Hall effect encoders, and an RPLiDAR laser scanner mounted on the top deck.',
      technology: 'ROS 2 Humble, Ubuntu Core, Python, C++, RPLiDAR A1, Cartographer SLAM, Costmap2D Navigation',
      test: 'Evaluated across a 40-square-meter obstacle course containing tables, boxes, and moving human legs.',
      result: 'Generated a millimeter-accurate 2D floor plan within 4 minutes and successfully planned collision-free return paths.',
      learning: 'Wheel slippage causes odometry drift; sensor fusion combining IMU gyroscope angular velocities with wheel encoders dramatically improved localization.'
    },
    {
      id: 'ai-vision-plant-sorter',
      slug: 'ai-vision-plant-sorter',
      title: 'Edge Vision Plant Disease Classifier & Leaf Sorter',
      category: 'AI',
      grade: 'Grade 9 Capstone',
      author: 'Divya R.',
      location: 'Bengaluru / Hyderabad',
      badge: 'Edge ML',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Edge-AI camera setup trained on 2,000 leaf images that detects early blight infection and actuates an air-diverter nozzle.',
      problem: 'Fungal leaf blight spreads silently through agricultural nurseries before human eyes detect macroscopic damage, ruining entire seedling trays.',
      idea: 'Run a quantized convolutional neural network on a low-cost camera chip to classify healthy vs. diseased leaves as they move past an optical inspection cradle.',
      build: 'Integrated an OV2640 camera on an ESP32-CAM module mounted on a 3D-printed shroud with 6000K neutral white LED illumination to ensure uniform photography.',
      technology: 'TensorFlow Lite for Microcontrollers, Edge Impulse Studio, MobileNet v1 Architecture, Python Training Pipeline',
      test: 'Trained on 1,800 labeled tomato and potato leaf samples; verified against 200 unseen physical leaves.',
      result: 'Achieved 89.2% classification accuracy on unseen samples with an inference speed of 240 milliseconds directly on the microchip.',
      learning: 'Lighting variance was the largest challenge; adding a small diffusion dome around the camera lens doubled real-world test accuracy.'
    },
    {
      id: 'smart-braille-learning-cube',
      slug: 'smart-braille-learning-cube',
      title: 'Haptic Smart Braille Learning Tutor',
      category: 'ELECTRONICS',
      grade: 'Grade 8 Build',
      author: 'Karthik & Rohan',
      location: 'Secunderabad',
      badge: 'Social Good',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'A handheld 6-pin electromechanical Braille tutor cube with voice synthesis that teaches visually impaired children letter shapes.',
      problem: 'Traditional slate and stylus Braille learning is difficult for young children without immediate audio-tactile confirmation feedback.',
      idea: 'Create an interactive palm-sized block with six motorized solenoid pins that pop up dynamically to form any Braille letter, accompanied by a voice prompt.',
      build: 'Custom 3D-printed hexagonal cube housing 6 miniature micro-solenoids, driven by an ULN2803 darlington array and an MP3 voice breakout module with headphone jack.',
      technology: 'Arduino Nano, ULN2803 Driver, DFPlayer Mini, MicroSD Audio, Solderless Breadboard, SolidWorks CAD',
      test: 'Tested by students at a local partner school for children with visual impairment during a 2-week pilot.',
      result: 'Students mastered the first 10 letters of the alphabet in half the standard time due to instantaneous audio reinforcement.',
      learning: 'Standard solenoids heated up after continuous hold; the team implemented pulse-width holding circuits that reduced power dissipation by 70%.'
    },
    {
      id: 'pid-maze-solving-rover',
      slug: 'pid-maze-solving-rover',
      title: 'High-Speed Micromouse & PID Maze Runner',
      category: 'CODING',
      grade: 'Grade 8 Capstone',
      author: 'Meera M.',
      location: 'OmniBot Labs Workshop',
      badge: 'Algorithms',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Differential-drive micromouse robot using 5-sensor infrared reflection array and PID heading algorithms to race through a labyrinth.',
      problem: 'Conventional line follower robots oscillate or overshoot turns when entering sharp 90-degree corners at speeds above 0.5 m/s.',
      idea: 'Implement continuous differential PID steering where motor PWM power is recalculated 200 times per second based on error distance from track centerline.',
      build: 'Laser-cut acrylic chassis with low center of gravity, custom motor bracket mounts, dual 300-RPM metal gearmotors, and an array of 5 calibrated QRE1113 optical sensors.',
      technology: 'Embedded C++, Hardware Timers, PID Mathematics, ATmega328P, EEPROM Calibrations',
      test: 'Tested on an 8-meter modular maze track with 12 distinct turns and varying contrast surfaces.',
      result: 'Finished the obstacle course in 14.2 seconds without a single track derailment, setting an internal workshop speed record.',
      learning: 'Battery voltage drops over time, changing motor response; the builder implemented battery voltage compensation to normalize speed.'
    },
    {
      id: 'mesh-weather-grid',
      slug: 'mesh-weather-grid',
      title: 'Decentralized Urban Microclimate Mesh Grid',
      category: 'IOT',
      grade: 'Grade 7 Capstone',
      author: 'Grade 7 Cohort (8 Student Builders)',
      location: 'Hyderabad Urban Corridor',
      badge: 'Community',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'A network of six battery-backed ESP32 weather nodes deployed across school rooftops that relay climate telemetry peer-to-peer.',
      problem: 'Official city weather stations are spaced 10–15 km apart, failing to measure localized urban heat island effects across dense concrete neighborhoods.',
      idea: 'Create an affordable peer-to-peer mesh network where nodes communicate directly via ESP-NOW protocols, relaying data to a single gateway connected to the web.',
      build: '6 weather-sealed enclosures each fitted with an ESP32 board, BME280 barometric sensor, optical rain sensor, 18650 battery, and solar panel.',
      technology: 'ESP-NOW Mesh Protocol, BME280 Sensors, MQTT, InfluxDB, Grafana Dashboard',
      test: 'Deployed across 6 residential rooftops spaced 350 to 500 meters apart across Jubilee Hills and Madhapur.',
      result: 'Relayed continuous temperature and humidity maps for 30 consecutive days, highlighting a 3.2°C temperature delta between green and concrete zones.',
      learning: 'Tree canopies and concrete water tanks obstructed 2.4 GHz line-of-sight; learning RF propagation physics was the students’ favorite takeaway.'
    }
  ],

  // 5. Trainers / Builders Profiles ("What does this person help others build?")
  trainers: [
    {
      id: 'sharan-kumar',
      slug: 'sharan-kumar',
      name: 'Sharan Kumar',
      role: 'Principal Robotics Architect & Co-Founder',
      specialty: 'Autonomous Systems, Embedded C++, ROS 2',
      experience: '8+ Years Building Physical Hardware & Robotics Platforms',
      badge: 'Founding Builder',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      helpsBuild: 'Autonomous SLAM rovers, closed-loop PID motion systems, and senior defended engineering capstones.',
      bio: 'Hardware engineer and educator driven by the conviction that real technology is understood with screwdrivers, code, and oscilloscopes, not passive video lectures. Has mentored over 1,200 students from their first cardboard chassis to competitive autonomous robotics leagues.',
      technologies: ['C++', 'Python', 'ROS 2', 'FreeRTOS', 'KiCAD PCB', 'Industrial Automation'],
      programsLed: ['Frontier: Edge AI, Vision & ROS', 'Engineering: Autonomous Robotics', 'College Engineering Bootcamps']
    },
    {
      id: 'priya-nair',
      slug: 'priya-nair',
      name: 'Priya Nair',
      role: 'Lead Embedded Systems & IoT Mentor',
      specialty: 'Cyber-Physical Systems, Edge Telemetry, MicroPython',
      experience: '6+ Years in Hardware Prototyping & STEM Pedagogy',
      badge: 'Master Mentor',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      helpsBuild: 'Cloud-connected environmental telemetry nodes, smart agriculture stations, and custom handheld arcade consoles.',
      bio: 'Passionate about democratizing electronics. Priya specializes in guiding middle and high schoolers across the "syntax cliff" from block programming to confident Python scripting and network protocol design.',
      technologies: ['ESP32', 'MicroPython', 'MQTT', 'Circuit Design', 'Sensor Interfacing', 'WebSockets'],
      programsLed: ['Bridge: Python, Microcontrollers & IoT', 'Weekend Builder Sprints', 'Women in Hardware Labs']
    },
    {
      id: 'arjun-reddy',
      slug: 'arjun-reddy',
      name: 'Arjun Reddy',
      role: 'Foundations Engineering & Kinematics Lead',
      specialty: 'Physical Mechanics, Rapid Prototyping, Young Builders',
      experience: '5+ Years in Maker Education & Mechanical Design',
      badge: 'Foundations Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      helpsBuild: 'Hand-cranked automata, motorized drawing rovers, 4-DoF robotic manipulators, and kinetic physics sculptures.',
      bio: 'A mechanical designer who believes that spatial reasoning and tactile intuition must be established before writing code. Arjun ensures that Grade 3–5 students fall in love with building mechanisms that physically work.',
      technologies: ['Cardboard Prototyping', 'Laser Cutting', '3D CAD (SolidWorks / Fusion 360)', 'micro:bit', 'Servo Kinematics'],
      programsLed: ['Foundations: Hardware, Motion & Logic', 'School Maker Lab Implementations']
    },
    {
      id: 'ananya-deshmukh',
      slug: 'ananya-deshmukh',
      name: 'Ananya Deshmukh',
      role: 'AI & Edge Vision Researcher',
      specialty: 'Embedded Machine Learning, Computer Vision, Edge TPU',
      experience: '4+ Years in Applied AI & TinyML Engineering',
      badge: 'Edge ML Specialist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      helpsBuild: 'On-device vision sorters, facial and gesture tracking cameras, and quantized edge neural network models.',
      bio: 'Ananya works at the intersection of machine learning and physical silicon. She demystifies AI so students understand that neural networks are mathematics and feature extraction running on real transistors, not magic.',
      technologies: ['TensorFlow Lite Micro', 'Edge Impulse', 'OpenCV', 'Python', 'Camera Sensor Pipelines'],
      programsLed: ['AI Vision & Edge ML Workshops', 'Frontier Research Capstone Defense']
    }
  ],

  // 6. Social Impact & NGO Initiatives
  impact: [
    {
      id: 'tech-reach-rural-schools',
      slug: 'tech-reach-rural-schools',
      title: 'Project Udaan: Hardware Labs for Rural & Tier-2 Classrooms',
      category: 'Classroom Outreach',
      location: 'Telangana & Andhra Pradesh',
      badge: 'Grassroots Access',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Bringing physical microcontrollers, breadboards, and hands-on robotics workshops to government and community schools with zero computer lab access.',
      summary: 'Talent is evenly distributed, but access to real hardware is not. Through Project Udaan, OmniBot Labs teams travel to rural and government schools with mobile hardware kit lockers. Students who have never touched a breadboard build their first functioning motor circuit in 45 minutes.',
      howItWorks: [
        'OmniBot supplies ruggedized portable classroom kits containing reusable components.',
        'Trainers conduct multi-day intensive immersive building sprints.',
        'Local school teachers receive foundational training to sustain ongoing maker clubs.',
        'High-performing students are paired with senior engineering mentors for capstone projects.'
      ],
      collaborateCTA: 'Bring Project Udaan to a Community'
    },
    {
      id: 'open-hardware-curriculum',
      slug: 'open-hardware-curriculum',
      title: 'Open Builder Repository: Freely Accessible Hardware Blueprints',
      category: 'Open Knowledge',
      location: 'Global / All India',
      badge: 'Open Source',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Publishing complete laser-cut chassis blueprints, circuit schematics, and bilingual teacher lesson guides completely free online.',
      summary: 'We believe educational infrastructure should not be gated behind proprietary paywalls. OmniBot Labs open-sources our foundational robot chassis files, 3D printable brackets, and step-by-step assembly guides so any school or community center with a 3D printer or cardboard can build from scratch.',
      howItWorks: [
        'All chassis files are published under open Creative Commons hardware licenses.',
        'Code repositories include well-commented Arduino and Python sketches.',
        'Step-by-step schematics use standard, locally obtainable electronics parts.',
        'Community contributors translate guides into regional Indian languages.'
      ],
      collaborateCTA: 'Contribute to the Open Repository'
    },
    {
      id: 'community-trainer-fellowship',
      slug: 'community-trainer-fellowship',
      title: 'Community Builder Fellowship: Training Grassroots Educators',
      category: 'Educator Enablement',
      location: 'Hyderabad Makerspace',
      badge: 'Fellowship',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'A funded 8-week intensive residency for young educators, NGO volunteers, and diploma graduates to master practical hardware maker pedagogy.',
      summary: 'To reach millions of children, we must empower passionate educators. The Community Builder Fellowship trains aspiring teachers in soldering, microcontroller programming, laser cutting, and constructionist learning pedagogy so they can start robotics clubs in their own hometowns.',
      howItWorks: [
        'Fellows spend 8 weeks inside the OmniBot Labs workshop learning by building.',
        'Each fellow builds five major capstone systems and receives a starter classroom kit.',
        'Fellows complete a teaching practicum in partner community schools.',
        'Graduates join the OmniBot Trainer Network with ongoing curriculum access.'
      ],
      collaborateCTA: 'Apply for the Trainer Fellowship'
    },
    {
      id: 'civic-tech-capstone-grants',
      slug: 'civic-tech-capstone-grants',
      title: 'Civic Hardware Grants: Student Solutions for Local Problems',
      category: 'Social Innovation',
      location: 'South India',
      badge: 'Micro-Grants',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Micro-funding and component sponsorships for high school and college teams building real hardware for civic, agricultural, and accessibility challenges.',
      summary: 'Technology should solve human needs. When students propose building water quality probes, smart Braille tutors, or farm irrigation monitors, OmniBot Labs provides free component grants, lab access, and engineering mentorship to take them from sketch to deployed prototype.',
      howItWorks: [
        'Students submit a 2-page problem statement and proposed physical build.',
        'Selected projects receive free sensor kits, microcontrollers, and workshop access.',
        'Engineers provide weekly design reviews on schematics and code.',
        'Prototypes are field-tested with local communities and open-sourced.'
      ],
      collaborateCTA: 'Partner for Impact / Sponsor a Grant'
    }
  ],

  // 7. Frequently Asked Questions (Categorized)
  faqs: [
    {
      category: 'General & Pedagogy',
      question: 'What makes OmniBot Labs different from generic coding or robotics coaching centers?',
      answer: 'We do not sell pre-assembled toys, nor do we park children in front of endless drag-and-drop screen games. At OmniBot Labs, students build physical machines from the component level — stripping wires, connecting breadboards, calibrating optical sensors, and writing real C++ and Python. We follow the 10-year Builder’s Ladder where skills compound every single year, culminating in public capstones that students can defend and touch.'
    },
    {
      category: 'General & Pedagogy',
      question: 'Does my child need prior coding or electronics experience to start?',
      answer: 'None at all. The Builder’s Ladder is carefully structured across four age-appropriate bands. In Foundations (Grades 3–5), concepts are introduced physically through cardboard mechanics and tactile circuits before formal programming syntax. Every grade adds at most one new tool per semester, ensuring there are never intimidating knowledge cliffs.'
    },
    {
      category: 'Kits & Request Process',
      question: 'How do I purchase or request an OmniBot hardware kit?',
      answer: 'Because we are a dedicated engineering laboratory rather than a generic retail store, our shop operates on a low-friction request system. You can browse our kits, add items to your request cart, and click "Send Request on WhatsApp" or "Request Items". This opens a pre-filled message directly to our WhatsApp Business desk. Our team immediately shares verified current pricing, batch availability, tax invoices, and courier delivery timelines.'
    },
    {
      category: 'Kits & Request Process',
      question: 'Are tools like soldering irons or hot glue guns required for the starter kits?',
      answer: 'No. Our beginner and intermediate kits (such as the Arduino Robotics Starter and ESP32 IoT Smart Lab) are 100% solderless and engineered with custom breakout shields, breadboards, and color-coded Dupont wire harnesses. High-voltage soldering is only introduced in advanced Grade 8+ engineering modules under direct lab supervision.'
    },
    {
      category: 'Schools & Institutions',
      question: 'How can our school set up an OmniBot Robotics & AI Innovation Lab?',
      answer: 'We provide an end-to-end institutional turnkey partnership. We conduct an on-campus space assessment, supply all necessary student hardware bundles and workbench organizers, integrate our Grade 3–12 curriculum into your timetable, and either deploy certified OmniBot Master Trainers or train your existing faculty through intensive bootcamps. Click "Build a Program With Us" on our Schools page to schedule an exploratory discussion.'
    },
    {
      category: 'Social Impact & NGO',
      question: 'How does OmniBot Labs balance commercial activities with social impact?',
      answer: 'They are two connected sides of the same ecosystem. Our commercial workshops and institutional lab setups fund the research, hardware prototyping, and open-source curriculum tools that we deploy to underserved and rural communities through Project Udaan and our Open Builder Repository. We believe world-class technology education must be accessible regardless of socioeconomic privilege.'
    },
    {
      category: 'Demo Classes & Enrolment',
      question: 'What happens in a 45-minute demo class?',
      answer: 'We never waste demo time on sales pitches. Within the first 15 minutes, your child will have physical wires in hand. In 45 minutes, they will build and test a real kinetic machine or sensor circuit, seeing the physical result of their own logic before leaving the room.'
    }
  ]
};

// Export to window for global static browser access
if (typeof window !== 'undefined') {
  window.OmnibotData = OmnibotData;
}
