window.addEventListener('scroll', function(e) {

  var container   = document.getElementById('container');
  var wHeight     = window.innerHeight;
  var wScroll     = window.pageYOffset;

  var blurAmount;

  if(wScroll > wHeight) {
    wScroll = wHeight;
  }

  blurAmount = (wScroll/wHeight)*20;
  container.style.filter = 'blur('+ blurAmount +'px)';

  // console.log(wScroll);
  // console.log(opacity);

  // topEl.style.opacity = wScroll/2 + "%";
});
