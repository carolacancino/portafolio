
//SMOOTH SCROLL ON NAVBAR CLICKS
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// NAV BAR CLOSE ON PAGE CLICK
$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
})

//Fade header on scroll
$(window).scroll(function(){
    $(".main-title").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".hr-size").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".fa-chevron-down").css("opacity", 1 - $(window).scrollTop() / 500);
  });

window.sr = ScrollReveal();
sr.reveal('.section-header');
sr.reveal('.effect-sarah');
sr.reveal('.bio-text');
sr.reveal('.about-item');
sr.reveal('.contact-wrapper');

// button Up
/////////////////////////////////////////////
$(function () {
  $(window).scroll(function () {
  if ($(this).scrollTop() > 300) $('a#move_up').fadeIn(200);
  else $('a#move_up').fadeOut(400);
  });
  $('a#move_up').click(function () {
  $('body,html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });
});
//skills//
$(document).ready(function() {

  $('.html').css('width', '95%');
  $('.css').css('width', '95%');
  $('.jquery').css('width', '70%');
  $('.javascript').css('width', '60%');
  $('.bootstrap').css('width', '90%');
  $('.sass').css('width', '70%');
  $('.materia').css('width', '60%');
  $('.git').css('width', '95%');
  $('.gulp').css('width', '60%');
  $('.rwd').css('width', '80%');
});
/////////////mas
$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});