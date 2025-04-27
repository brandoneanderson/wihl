// Interactive Scripture Rotator
const scriptures = [
  '"Let all that you do be done in love." – 1 Corinthians 16:14',
  '"I have loved you with an everlasting love." – Jeremiah 31:3',
  '"She is clothed with strength and dignity." – Proverbs 31:25',
  '"The Lord bless you and keep you." – Numbers 6:24',
  '"You are God\'s masterpiece." – Ephesians 2:10',
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