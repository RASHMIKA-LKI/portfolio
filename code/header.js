// ==========================================================================
// UNIFIED GLOBAL HEADER COMPONENT
// ==========================================================================
(function() {
  const HEADER_STYLES = `
    :root {
      --primary: #00f0ff;
      --header-height: 80px;
    }
    html, body {
      overflow-x: hidden;
      max-width: 100%;
    }
    .header-6 {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 100vw;
      box-sizing: border-box;
      height: var(--header-height);
      padding: 0 60px;
      background: linear-gradient(180deg, rgba(10, 10, 12, 0.95) 0%, rgba(0, 0, 0, 0.8) 85%, rgba(0, 0, 0, 0) 100%);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      font-family: 'Orbitron', sans-serif;
    }
    .header-6::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 5%;
      width: 90%;
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(0, 240, 255, 0.25), transparent);
      pointer-events: none;
    }
    .logo {
      color: #ffffff;
      font-size: 15px;
      font-weight: 800;
      letter-spacing: 2px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }
    .logo .logo-svg {
      flex-shrink: 0;
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease;
    }
    .logo:hover .logo-svg {
      transform: rotate(60deg) scale(1.08);
      filter: drop-shadow(0 0 8px #00f0ff);
    }
    .logo .logo-name {
      color: #ffffff;
      text-shadow: 0 0 8px rgba(0, 240, 255, 0.85), 0 0 18px rgba(0, 240, 255, 0.5);
      transition: text-shadow 0.3s ease;
    }
    .logo:hover .logo-name {
      text-shadow: 0 0 12px rgba(0, 240, 255, 1), 0 0 24px rgba(0, 240, 255, 0.8);
    }
    .logo .logo-badge {
      font-family: 'Roboto Mono', monospace;
      font-size: 9px;
      padding: 1px 5px;
      border: 1px solid #22c55e;
      color: #4ade80;
      border-radius: 2px;
      margin-left: 4px;
      letter-spacing: 1px;
      line-height: 1.2;
      text-shadow: 0 0 6px rgba(34, 197, 94, 0.7);
      box-shadow: 0 0 8px rgba(34, 197, 94, 0.25);
    }
    .nav-menu {
      display: flex;
      list-style: none;
      gap: 45px;
      align-items: center;
    }
    .nav-menu li a {
      color: #ffffff;
      text-decoration: none;
      font-size: 15px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      padding: 10px 5px;
      position: relative;
      cursor: pointer;
      transition: color 0.3s ease, text-shadow 0.3s ease;
    }
    .nav-menu li a::before {
      content: '[';
      position: absolute;
      left: -15px;
      color: var(--primary);
      opacity: 0;
      transform: translateX(10px);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .nav-menu li a::after {
      content: ']';
      position: absolute;
      right: -15px;
      color: var(--primary);
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes headerBlinkText {
      0% {
        color: #ffffff;
        text-shadow: none;
      }
      10% {
        color: #ffffff;
        text-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
      }
      22% {
        color: rgba(255, 255, 255, 0.35);
        text-shadow: none;
      }
      36% {
        color: #ffffff;
        text-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
      }
      50% {
        color: rgba(255, 255, 255, 0.35);
        text-shadow: none;
      }
      64% {
        color: #ffffff;
        text-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
      }
      78% {
        color: rgba(255, 255, 255, 0.35);
        text-shadow: none;
      }
      90%, 100% {
        color: var(--primary);
        text-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
      }
    }
    @keyframes headerBlinkBracket {
      0% {
        opacity: 0;
        color: #ffffff;
        text-shadow: none;
      }
      10% {
        opacity: 1;
        color: #ffffff;
        text-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
      }
      22% {
        opacity: 0.3;
        color: rgba(255, 255, 255, 0.35);
        text-shadow: none;
      }
      36% {
        opacity: 1;
        color: #ffffff;
        text-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
      }
      50% {
        opacity: 0.3;
        color: rgba(255, 255, 255, 0.35);
        text-shadow: none;
      }
      64% {
        opacity: 1;
        color: #ffffff;
        text-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
      }
      78% {
        opacity: 0.3;
        color: rgba(255, 255, 255, 0.35);
        text-shadow: none;
      }
      90%, 100% {
        opacity: 1;
        color: var(--primary);
        text-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
      }
    }
    .nav-menu li a.active {
      color: var(--primary);
      text-shadow: 0 0 12px rgba(0, 240, 255, 0.7);
    }
    .nav-menu li a.active::before,
    .nav-menu li a.active::after {
      opacity: 1;
      transform: translateX(0);
    }
    .nav-menu li a:hover {
      animation: headerBlinkText 0.28s ease-out forwards;
    }
    .nav-menu li a:hover::before,
    .nav-menu li a:hover::after {
      opacity: 1;
      transform: translateX(0);
      animation: headerBlinkBracket 0.28s ease-out forwards;
    }
    .mobile-toggle {
      display: none;
      background: transparent;
      border: 1px solid var(--primary);
      color: var(--primary);
      padding: 8px 12px;
      cursor: pointer;
      font-family: 'Roboto Mono', monospace;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    @media (max-width: 900px) {
      .header-6 {
        padding: 0 24px;
      }
      .mobile-toggle {
        display: block;
      }
      .nav-menu {
        position: fixed;
        top: var(--header-height);
        left: 0;
        right: 0;
        background: rgba(6, 6, 8, 0.98);
        flex-direction: column;
        padding: 30px;
        gap: 25px;
        display: none;
        border-bottom: 1px solid rgba(0, 240, 255, 0.2);
      }
      .nav-menu.open {
        display: flex;
      }
    }
  `;

  const HEADER_HTML = `
    <header class="header-6" id="global-header">
      <div class="logo" onclick="window.location.href='index.html'">
        <svg class="logo-svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="kGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#a5f3fc"/>
              <stop offset="45%" stop-color="#00f0ff"/>
              <stop offset="85%" stop-color="#0369a1"/>
              <stop offset="100%" stop-color="#082f49"/>
            </linearGradient>
            <linearGradient id="kGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8"/>
              <stop offset="50%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#0c4a6e"/>
            </linearGradient>
            <filter id="kGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#00f0ff" flood-opacity="0.85"/>
            </filter>
          </defs>
          <g filter="url(#kGlow)">
            <g id="petal">
              <path d="M16 2.5 C10.8 2.5 7.2 6.5 8.2 11.2 C8.9 14.5 12.2 16.5 15.5 15.2 C13.5 13.2 12.8 8.8 16 2.5 Z" fill="url(#kGrad1)"/>
              <path d="M16 2.5 C12.5 6 12.5 11 15.5 15.2 C14 14.5 10 12 9.5 9 C9 6 12 3 16 2.5 Z" fill="url(#kGrad2)" opacity="0.85"/>
            </g>
            <use href="#petal" transform="rotate(60 16 16)"/>
            <use href="#petal" transform="rotate(120 16 16)"/>
            <use href="#petal" transform="rotate(180 16 16)"/>
            <use href="#petal" transform="rotate(240 16 16)"/>
            <use href="#petal" transform="rotate(300 16 16)"/>
            <polygon points="16,13.2 18.4,14.6 18.4,17.4 16,18.8 13.6,17.4 13.6,14.6" fill="#060608"/>
          </g>
        </svg>
        <span class="logo-name">RASHMIKA</span>
        <span class="logo-badge">ONLINE</span>
      </div>

      <button class="mobile-toggle" onclick="toggleNav()" aria-label="Toggle navigation">
        [ MENU ]
      </button>

      <nav>
        <ul class="nav-menu" id="nav-menu">
          <li><a href="index.html" id="nav-home">Home</a></li>
          <li><a href="index.html#about" id="nav-about">About</a></li>
          <li><a href="projects_section.html" id="nav-projects">Projects</a></li>
          <li><a href="learnings.html" id="nav-learnings">Learnings</a></li>
          <li><a href="events.html" id="nav-events">Events</a></li>
          <li><a href="contact.html" id="nav-contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  `;

  function initHeader() {
    // Inject styles if not present
    if (!document.getElementById('global-header-styles')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'global-header-styles';
      styleEl.textContent = HEADER_STYLES;
      document.head.appendChild(styleEl);
    }

    // If an existing header exists, replace it, otherwise prepend to body
    const existingHeader = document.querySelector('header.header-6, header');
    if (existingHeader) {
      existingHeader.outerHTML = HEADER_HTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);
    }

    // Determine active page
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    // Remove any active classes
    document.querySelectorAll('.nav-menu li a').forEach(a => a.classList.remove('active'));

    if (path.includes('projects_section')) {
      const el = document.getElementById('nav-projects');
      if (el) el.classList.add('active');
    } else if (path.includes('learnings') || path.includes('courses')) {
      const el = document.getElementById('nav-learnings');
      if (el) el.classList.add('active');
    } else if (path.includes('events')) {
      const el = document.getElementById('nav-events');
      if (el) el.classList.add('active');
    } else if (path.includes('contact')) {
      const el = document.getElementById('nav-contact');
      if (el) el.classList.add('active');
    } else if (path.includes('about_me')) {
      const el = document.getElementById('nav-about');
      if (el) el.classList.add('active');
    } else {
      // index.html
      if (hash === '#about') {
        const el = document.getElementById('nav-about');
        if (el) el.classList.add('active');
      } else {
        const el = document.getElementById('nav-home');
        if (el) el.classList.add('active');
      }
    }

    // Smooth page transitions without breaking fixed header positioning
    document.querySelectorAll('.nav-menu li a').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetUrl = link.getAttribute('href');
        if (!targetUrl || targetUrl.startsWith('#')) return;

        // If on index.html and clicking home/about, let index.html page switcher handle it
        if ((path.endsWith('index.html') || path.endsWith('/')) && targetUrl.startsWith('index.html')) {
          if (typeof window.switchPage === 'function') {
            e.preventDefault();
            window.switchPage(targetUrl.includes('#about') ? 'about' : 'home');
            return;
          }
        }

        // Close mobile nav drawer if open
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
          navMenu.classList.remove('open', 'active');
        }

        // Seamless fade navigation (never apply transform to body!)
        e.preventDefault();
        const mainContent = document.querySelector('main, .split-layout, .split-container, #projects-section, .pages-wrapper') || document.body;
        mainContent.style.transition = 'opacity 0.2s ease';
        mainContent.style.opacity = '0';
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 180);
      });
    });

    // Close mobile nav when clicking outside header
    document.addEventListener('click', (e) => {
      const header = document.getElementById('global-header') || document.getElementById('main-header');
      const menu = document.getElementById('nav-menu');
      if (menu && (menu.classList.contains('open') || menu.classList.contains('active'))) {
        if (header && !header.contains(e.target)) {
          menu.classList.remove('open', 'active');
        }
      }
    });

    // Fallback: load splash cursor if not already loaded
    if (!window.__splashCursorInitialized && !document.querySelector('script[src*="splash_cursor.js"]')) {
      const sc = document.createElement('script');
      sc.src = 'splash_cursor.js';
      document.head.appendChild(sc);
    }
  }

  // Toggle mobile navigation
  window.toggleNav = function() {
    const menu = document.getElementById('nav-menu');
    if (menu) {
      menu.classList.toggle('open');
      menu.classList.toggle('active');
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeader);
  } else {
    initHeader();
  }
})();
