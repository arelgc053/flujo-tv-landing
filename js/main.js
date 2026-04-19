(function () {
  'use strict';


  function revealAll() {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
      el.classList.remove('animate');
    });
  }


  function applyStagger() {
    var parents = document.querySelectorAll('.cards, .pasos, .icons, .grid-disfruta');
    parents.forEach(function (parent) {
      var children = parent.querySelectorAll('.card, .paso, .icon-item, .card-item');
      children.forEach(function (child, i) {
        child.style.transitionDelay = (i * 0.07) + 's';
      });
    });
  }


  function initReveal() {
    applyStagger();

    var reveals = document.querySelectorAll('.reveal');


    if (!('IntersectionObserver' in window)) {
      revealAll();
      return;
    }

    reveals.forEach(function (el) {
      el.classList.add('animate');
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });

  
    setTimeout(revealAll, 1500);
  }


  function initFloat() {
    var btn = document.getElementById('waFloat');
    if (!btn) return;
    function toggle() {
      btn.classList.toggle('show', window.scrollY > 300);
    }
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
  }

  
  function initBurger() {
    var burger = document.getElementById('navBurger');
    var menu = document.querySelector('.navbar-menu');
    if (!burger || !menu) return;

    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
    });


    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
      });
    });
  }

 
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initReveal();
      initFloat();
      initBurger();
    });
  } else {
    initReveal();
    initFloat();
    initBurger();
  }

})();