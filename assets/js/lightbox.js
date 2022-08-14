var triggers = document.querySelectorAll('.trigger');

Array.prototype.forEach.call(triggers, function(el, i){

  el.addEventListener('click', function(e) {

    var id       = el.getAttribute('href').replace('#', '');
    var lightbox = document.getElementById(id);

    lightbox.style.display = 'flex';
    e.preventDefault();
  }, false);
});

var lightboxes = document.querySelectorAll('.lightbox');

Array.prototype.forEach.call(lightboxes, function(el, i){

  el.addEventListener('click', function(e) {

    el.style.display = 'none';

  }, false);
});
