window.addEventListener('scroll', function(e) {

  var container   = document.getElementById('container');
  var wHeight     = window.innerHeight;
  var wScroll     = window.pageYOffset;

  var opacity;

  if(wScroll > wHeight) {
    wScroll = wHeight;
  }

  opacity = wScroll/wHeight;
  container.style.filter = 'blur('+ opacity*20 +'px)';

  // console.log(wScroll);
  // console.log(opacity);

  // topEl.style.opacity = wScroll/2 + "%";
});
