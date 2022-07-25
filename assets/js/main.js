window.addEventListener('scroll', function(e) {
  var wScroll = window.pageYOffset;
  var topEl   = document.getElementById('container').childNodes;
  
  // topEl.forEach(function(el) {
  //   // console.log(el, wScroll);
  //   topEl.style.opacity = wScroll/2 + "%";
  // });

    topEl.style.opacity = wScroll/2 + "%";
});
