window.addEventListener('scroll', function(e) {

  var image   = document.getElementById('heroImage');
  var wHeight = window.innerHeight;
  var wScroll = window.pageYOffset;

  var blurAmount;

  if(wScroll > wHeight) {
    wScroll = wHeight;
  }

  blurAmount = (wScroll/wHeight)*20;
  image.style.filter = 'blur('+ blurAmount +'px)';
});
