$(document).ready(function(){
  console.info("DOM Ready!")
  $(".main").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",

    animationTime: 1000,
    pagination: true,
    updateURL: false,
    beforeMove: function(index) {},
    afterMove: function(index) {
      console.log("afterMove");
      console.log("scroll element");
      console.log(index);
      if (index == 2) {
        console.log("animating the image for second slide.");

      $('#object').addClass("fadeIn");


      }

      if (index == 3) {
        console.log("animating the image for third slide.");

        $('#wbb-graphic').addClass("slideRight");
        $('#mbb-graphic').addClass("slideLeft");
      }
    },
    loop: false,
    keyboard: true,
    responsiveFallback: false,

    direction: "vertical"
  });
});
