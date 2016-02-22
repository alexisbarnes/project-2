
$("main.onepage_scroll")({
  sectionContainer: "section",
  easing: "ease",

  animationTime: 1000,
  pagination: true,
  updateURL: false,
  beforeMove: function(index) {},
  afterMove: function(index) {},
  loop: false,
  keyboard: true,
  responsiveFallback: false,


  direction: "vertical"
});

 
$(window).scroll(function(){
  afterMove: function(index) {
      console.log("scroll element")
      console.log(index);
      if (index == 2) {
        console.log("animating the image for second slide.");
      
      $('#object').addClass("fadeIn");
		
   
      }
    }
});
