$('body').on('click', '.menu-btn', function () {
    $("header").fadeToggle();
    $(".menu-btn").toggleClass("close");
    $("body").toggleClass("no-scroll");

});


$('body').on('click', '.slide .slide-ttl', function () {
   
   $(this).next(".slide-cnt").slideToggle(300); 
    $(this).nextAll(".close-btn").slideToggle(0); 
     $(this).toggleClass("open");

});

$('body').on('click', '.slide .close-btn', function () {
   
   $(this).prev(".slide-cnt").slideUp(300); 
    $(this).slideUp(300); 
     $(this).removeClass("open");

});

$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(window).on('load scroll', function () {
            
    $(".fade").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("on");
      }
        });           
    
    
  });

