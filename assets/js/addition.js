
var wwidth = $(window).innerWidth(); 

var nowdate = new Date();
var winter = nowdate.getMonth();

if(winter=="7" || winter==0 || winter==1){
  $(document).ready(function(){
    if (wwidth>770) {
      $(document).snowfall({
        flakeCount: 15,
        minSize: 4,
        maxSize: 8,
        round: true,
        shadow: false,
        minSpeed: 0.5,
        maxSpeed: 1,
      });
    }if (wwidth>520) {
      $(document).snowfall({
        flakeCount: 10,
        minSize: 4,
        maxSize: 8,
        round: true,
        shadow: false,
        minSpeed: 0.5,
        maxSpeed: 1,
      });
    }else{
      $(document).snowfall({
        flakeCount: 7,
        minSize: 4,
        maxSize: 8,
        round: true,
        shadow: false,
        minSpeed: 0.5,
        maxSpeed: 1,
      });
    }
    /*$(document).snowfall({
      //flakeCount: 15,
      minSize: 4,
      maxSize: 8,
      round: true,
      shadow: false,
      minSpeed: 0.5,
      maxSpeed: 1,
    });*/
    $('body').css('background', '#eaeef563');
    $('footer').css('background', '#f5f3fd');
    $('.copyright').css('background', 'rgb(202 209 222)');
    $('#header').css('background', 'rgba(202, 209, 222, 0.95)');
    $('.nav').css('background', 'rgba(202, 209, 222, 0.95)');
    $('.nav').css('border-color', 'rgba(187, 194, 206, 0.85)');

    $(".btn").addClass("winter");
    $(".trigger").attr('id', 'btn__modal-winter');

    $('.intro').css('background', 'url("../assets/images/intro-winter.png") center no-repeat');
    $('.intro').css('background-size', 'cover');

  });
}

