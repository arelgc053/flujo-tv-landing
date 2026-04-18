(function () {
  'use strict';
 
  function revealAll() {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
      el.classList.remove('animate');
    });
  }
 
  function applyStagger() {
    var parents = document.querySelectorAll('.cards, .pasos, .icons');
    parents.forEach(function (parent) {
      var children = parent.querySelectorAll('.card, .paso, .icon-item');
      children.forEach(function (child, i) {
        child.style.transitionDelay = (i * 0.08) + 's';
      });
    });
  }
 
  function initReveal() {
    applyStagger();
 
    var reveals = document.querySelectorAll('.reveal');
 
    reveals.forEach(function (el) {
      el.classList.add('animate');
    });
 
    if (!('IntersectionObserver' in window)) {
      revealAll();
      return;
    }
 
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
      if (window.scrollY > 300) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    }
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
  }
 
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initReveal();
      initFloat();
    });
  } else {
    initReveal();
    initFloat();
  }
 
})();