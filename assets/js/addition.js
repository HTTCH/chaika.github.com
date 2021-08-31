
var wwidth = $(window).innerWidth(); 

var nowdate = new Date();
var season = nowdate.getMonth();

if(season=="11" || season==0 || season==1){
  $(document).ready(function(){//Snow
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
    }//site elements
    $('body').css('background', '#eaeef563');
    $('footer').css('background', '#f5f3fd');
    $('.copyright').css('background', 'rgb(202 209 222)');
    $('#header').css('background', 'rgba(202, 209, 222, 0.95)');
    $('.nav').css('background', 'rgba(202, 209, 222, 0.95)');
    $('.nav').css('border-color', 'rgba(187, 194, 206, 0.85)');
    //buttons
    $(".btn").addClass("winter");
    $(".trigger").attr('id', 'btn__modal-winter');
    //images
    $('.intro').css('background', 'url("../assets/images/intro-winter.png") center no-repeat');
    $('.intro').css('background-size', 'cover');

  });
}if(season=="8" || season==7 || season==10){
    $('body').css('background', 'rgba(245, 241, 234, 0.39);');
    $('footer').css('background', 'rgb(253 243 243)');
    $('.copyright').css('background', 'rgb(222 202 202)');
    $('#header').css('background', 'rgba(227, 130, 0, 0.95)');
    $('.nav').css('background', 'rgba(227, 130, 0, 0.95)');
    $('.nav').css('border-color', 'rgba(212, 121, 0, 0.9)');
    //buttons
    $(".btn").addClass("autumn");
    $(".trigger").attr('id', 'btn__modal-autumn');
    //images
    //$('.intro').css('background', 'url("../assets/images/intro.png") center no-repeat');
    //$('.intro').css('background-size', 'cover');
}

