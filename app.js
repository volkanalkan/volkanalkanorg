$(document).ready(function(){


  $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
  });


  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });



  $('.top-nav .nav-link').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });
  
  // toggle menu/navbar script
  $('.menu-toggler').click(function(){
    $('.navbar .menu').toggleClass("active");
  });

});

AOS.init({
  easing: 'ease',
  duration: 1000,
  once: true
});

setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 1200);
