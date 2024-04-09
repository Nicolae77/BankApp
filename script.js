'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// how to create a scroll event for navbar
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);


// Navbar toggle
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');


navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  
});

navToggle.addEventListener('click', function() {
  this.classList.toggle('active');
});



console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons)

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');

  if(!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
}
);

// Menu fade animation
nav.addEventListener('mouseover', function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
}
);
nav.addEventListener('mouseout', function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
}
);





