let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card',
  },
  animation: {
    duration: 300,
  },
});

const linkWork = document.querySelectorAll('.work__item');
const sideLink = document.querySelectorAll('.side-link');

function activeWork() {
  linkWork.forEach((l) => l.classList.remove('active-category'));
  this.classList.add('active-category');
}

function activeLink() {
  sideLink.forEach((l) => l.classList.remove('active-link'));
  this.classList.add('active-link');
}

linkWork.forEach((l) => l.addEventListener('click', activeWork));
sideLink.forEach((l) => l.addEventListener('click', activeLink));

// Changing the defaults
window.sr = ScrollReveal();

// Customizing a reveal set
sr.reveal('.hello', {
  origin: 'bottom',
  distance: '10px',
  duration: 500,
});
sr.reveal('.content h3', {
  origin: 'bottom',
  distance: '5px',
  duration: 1000,
  delay: 500,
});
sr.reveal('.cv-btn', {
  origin: 'top',
  distance: '2px',
  duration: 1000,
  delay: 600,
});
sr.reveal('.project-1', {
  origin: 'bottom',
  distance: '5px',
  duration: 1200,
});
sr.reveal('.project-2', {
  origin: 'bottom',
  distance: '5px',
  duration: 1200,
  delay: 300,
});
sr.reveal('.project-3', {
  origin: 'bottom',
  distance: '5px',
  duration: 1200,
  delay: 500,
});
sr.reveal('.project-4', {
  origin: 'bottom',
  distance: '5px',
  duration: 1200,
  delay: 500,
});
sr.reveal('.mid-nav', {
  origin: 'bottom',
  distance: '50px',
  duration: 1200,
  delay: 900,
});
sr.reveal('.home-nav', {
  origin: 'right',
  distance: '50px',
  duration: 1200,
  delay: 1000,
});
sr.reveal('.home-nav', {
  origin: 'right',
  distance: '50px',
  duration: 1200,
  delay: 1000,
});
sr.reveal('.projects-nav', {
  origin: 'right',
  distance: '50px',
  duration: 1200,
  delay: 1200,
});
sr.reveal('.about-nav', {
  origin: 'right',
  distance: '50px',
  duration: 1200,
  delay: 1400,
});
sr.reveal('.contact-nav', {
  origin: 'right',
  distance: '50px',
  duration: 1200,
  delay: 1400,
});

sr.reveal('.img-container', {
  origin: 'bottom',
  distance: '10px',
  duration: 1000,
});
sr.reveal('.about-text-content', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 500,
});

sr.reveal('.frontend', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
});
sr.reveal('.backend', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 800,
});
sr.reveal('.tools', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 1100,
});
sr.reveal('.contact-form', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
});
sr.reveal('.footer-container', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
});
