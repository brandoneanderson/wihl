// Birthday confetti: April 28th, first load of the day only
function maybeShowBirthdayConfetti() {
  var now = new Date();
  if (now.getMonth() !== 3 || now.getDate() !== 28) return; // April 28 only
  if (typeof confetti !== 'function') return;

  var banner = document.createElement('div');
  banner.className = 'birthday-banner';
  banner.innerHTML = '<p class="birthday-banner-title">🎈Happy birthday Daniella Embu!🎈</p><p class="birthday-banner-sub">1 year anniversary of WIHL 🎂</p>';
  document.body.appendChild(banner);
  setTimeout(function() {
    banner.classList.add('birthday-banner-visible');
  }, 100);
  setTimeout(function() {
    banner.classList.remove('birthday-banner-visible');
    setTimeout(function() {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }, 400);
  }, 6000);

  var duration = 4e3;
  var end = Date.now() + duration;
  function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#fbe3db', '#c4a484', '#4a3c2e', '#fdf1ed', '#e8c4b0']
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#fbe3db', '#c4a484', '#4a3c2e', '#fdf1ed', '#e8c4b0']
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  }
  frame();
}

// Set --vh once at load so hero has fixed height on mobile (avoids zoom effect when WebView toolbar shows/hides)
function setViewportHeight() {
  const height = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  const vh = height * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}
setViewportHeight();
// Only update on orientation change. Do NOT update on resize/scroll – that’s when the WebView toolbar shows/hides and causes the zoom effect.
window.addEventListener('orientationchange', setViewportHeight);

// Interactive Scripture Rotator
const scriptures = [
  '"Let all that you do be done in love." – 1 Corinthians 16:14',
  '"I have loved you with an everlasting love." – Jeremiah 31:3',
  '"She is clothed with strength and dignity." – Proverbs 31:25',
  '"So God created human beings in his own image. In the image of God he created them; male and female he created them." – Genesis 1:27',
  '"You are God\'s masterpiece." – Ephesians 2:10',
  '"You are altogether beautiful, my darling, beautiful in every way." – Song of Solomon 4:7',
  '"He escorts me to the banquet hall; it\'s obvious how much he loves me." – Song of Solomon 2:4',
  '"The joy of the Lord is your strength." – Nehemiah 8:10',
  '"Be still, and know that I am God." – Psalm 46:10',
  '"God is within her, she will not fall." – Psalm 46:5',
  '"And we know that in all things God works for the good of those who love him, who have been called according to his purpose." – Romans 8:28',
  '"But seek first his kingdom and his righteousness, and all these things will be given to you as well." – Matthew 6:33',
  '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." – Jeremiah 29:11'
];
let scriptureIdx = 0;
const scriptureText = document.getElementById('scripture-text');
const prevBtn = document.getElementById('scripture-prev');
const nextBtn = document.getElementById('scripture-next');
let scriptureInterval;
function showScripture(idx, fade=true) {
  if (fade) scriptureText.style.opacity = 0;
  setTimeout(() => {
    scriptureText.textContent = scriptures[idx];
    scriptureText.style.opacity = 1;
  }, fade ? 400 : 0);
}
function nextScripture() {
  scriptureIdx = (scriptureIdx + 1) % scriptures.length;
  showScripture(scriptureIdx);
}
function prevScripture() {
  scriptureIdx = (scriptureIdx - 1 + scriptures.length) % scriptures.length;
  showScripture(scriptureIdx);
}
if (prevBtn && nextBtn) {
  prevBtn.onclick = () => { prevScripture(); resetInterval(); };
  nextBtn.onclick = () => { nextScripture(); resetInterval(); };
}
function resetInterval() {
  clearInterval(scriptureInterval);
  scriptureInterval = setInterval(nextScripture, 5000);
}
if (scriptureText) {
  showScripture(scriptureIdx, false);
  scriptureInterval = setInterval(nextScripture, 5000);
}

// Mobile Navigation Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navLinks = document.getElementById('nav-links');

if (mobileMenuToggle && navLinks) {
  mobileMenuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  const navLinksItems = navLinks.querySelectorAll('a');
  navLinksItems.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

// Google Analytics Event Tracking
function trackEvent(eventName, eventCategory, eventAction, eventLabel = null) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      event_category: eventCategory,
      event_action: eventAction,
      event_label: eventLabel
    });
  }
}

// Track button clicks
document.addEventListener('DOMContentLoaded', function() {
  maybeShowBirthdayConfetti();

  // Track CTA button clicks
  const ctaButtons = document.querySelectorAll('.contact-btn, .gallery-btn');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent.trim();
      trackEvent('button_click_cta', 'engagement', 'cta_click', buttonText);
    });
  });

  // Track Order Now button click
  const orderButton = document.querySelector('#order-now-button a');
  if (orderButton) {
    orderButton.addEventListener('click', function() {
      trackEvent('button_click_order_now', 'conversion', 'order_form_click', 'Google Form');
    });
  }

  // Track Instagram link click
  const instagramLink = document.querySelector('a[href*="instagram.com"]');
  if (instagramLink) {
    instagramLink.addEventListener('click', function() {
      trackEvent('link_click_instagram', 'social', 'instagram_click', 'Instagram Profile');
    });
  }

  // Track scripture navigation
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      trackEvent('interaction_scripture_navigation_prev', 'content', 'scripture_navigation', 'Previous Scripture');
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      trackEvent('interaction_scripture_navigation_next', 'content', 'scripture_navigation', 'Next Scripture');
    });
  }

  // Track gallery image clicks
  const galleryImages = document.querySelectorAll('.gallery-img');
  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      const altText = this.alt || 'Gallery Image';
      trackEvent('interaction_gallery_image_click', 'gallery', 'image_click', altText);
    });
  });

  // Track gallery scroll (horizontal scroll on gallery grid)
  const galleryGrid = document.querySelector('.gallery-grid');
  if (galleryGrid) {
    let galleryScrollTracked = false;
    galleryGrid.addEventListener('scroll', function() {
      if (galleryScrollTracked) return;
      galleryScrollTracked = true;
      trackEvent('gallery_scroll', 'gallery', 'gallery_scrolled', 'User scrolled gallery');
    });
  }

  // Track mobile menu interactions
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      const isActive = this.classList.contains('active');
      trackEvent('interaction_mobile_menu', 'navigation', 'mobile_menu', isActive ? 'Open' : 'Close');
    });
  }

  // Track navigation link clicks
  const navLinks = document.querySelectorAll('nav .nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const href = this.getAttribute('href');
      const linkText = this.textContent.trim();
      if (href.startsWith('#')) {
        trackEvent('navigation_link_click', 'internal', 'section_nav', linkText);
      }
    });
  });

  // Track scroll depth (optional - tracks when users scroll 25%, 50%, 75%, 100%)
  let scrollDepthTracked = [false, false, false, false];
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollPercent >= 25 && !scrollDepthTracked[0]) {
      trackEvent('scroll_25', 'scroll', 'scroll_depth', '25%');
      scrollDepthTracked[0] = true;
    }
    if (scrollPercent >= 50 && !scrollDepthTracked[1]) {
      trackEvent('scroll_50', 'scroll', 'scroll_depth', '50%');
      scrollDepthTracked[1] = true;
    }
    if (scrollPercent >= 75 && !scrollDepthTracked[2]) {
      trackEvent('scroll_75', 'scroll', 'scroll_depth', '75%');
      scrollDepthTracked[2] = true;
    }
    if (scrollPercent >= 100 && !scrollDepthTracked[3]) {
      trackEvent('scroll_100', 'scroll', 'scroll_depth', '100%');
      scrollDepthTracked[3] = true;
    }
  });

  const googleFormLinks = document.querySelectorAll('a[href*="docs.google.com/forms"]');
  googleFormLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (typeof trackEvent === 'function') {
        trackEvent('order_form_click', 'conversion', 'order_form_click', 'Google Form');
      } else if (typeof gtag !== 'undefined') {
        gtag('event','order_form_click',{ event_category:'conversion', event_action:'order_form_click', event_label:'Google Form' });
      }
    });
  });
});

// Ripple effect for all interactive buttons
function addRippleEffect(e) {
  const btn = e.currentTarget;
  const circle = document.createElement('span');
  circle.className = 'ripple';
  const rect = btn.getBoundingClientRect();
  circle.style.width = circle.style.height = Math.max(rect.width, rect.height) + 'px';
  circle.style.left = (e.clientX - rect.left - rect.width/2) + rect.width/2 + 'px';
  circle.style.top = (e.clientY - rect.top - rect.height/2) + rect.height/2 + 'px';
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}
document.querySelectorAll('.contact-btn, .gallery-btn, #scripture-prev, #scripture-next').forEach(btn => {
  btn.addEventListener('click', addRippleEffect);
});

// Fade-in on scroll for all .fade-in-section elements
const faders = document.querySelectorAll('.fade-in-section');
const appearOptions = { threshold: 0.15 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader => { appearOnScroll.observe(fader); });

// Lightbox functionality for gallery images
if (document.querySelectorAll('.gallery-img').length && document.getElementById('lightboxModal')) {
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
      document.getElementById('lightboxImg').src = this.src;
      document.getElementById('lightboxModal').classList.add('active');
    });
  });
  document.getElementById('lightboxClose').onclick = function() {
    document.getElementById('lightboxModal').classList.remove('active');
    document.getElementById('lightboxImg').src = '';
  };
  document.getElementById('lightboxModal').onclick = function(e) {
    if(e.target === this) { this.classList.remove('active'); document.getElementById('lightboxImg').src = ''; }
  };
}

// Contact form thank you
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Track form submission
    trackEvent('form_submit', 'contact', 'contact_form', 'Contact Form');
    
    this.style.display = 'none';
    const thanks = document.createElement('div');
    thanks.innerHTML = '<h3 style="color:#4a3c2e; margin-top:2rem;">Thank you for reaching out! I will pray over your request and reply soon.</h3>';
    this.parentNode.insertBefore(thanks, this);
  });
}

// Smooth scroll offset for nav links
if (document.querySelectorAll('nav .nav-links a').length) {
  document.querySelectorAll('nav .nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if(href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) {
          window.scrollTo({
            top: target.offsetTop - 20,
            behavior: 'smooth'
          });
        }
      }
    });
  });
} 