
//xìa chung
$(window).on('load', function () {
    setTimeout(() => {
        $("#loading").fadeOut(1000);
        $("#content").fadeIn(1000);
        $("#content").removeClass("d-none");
    }, 0);
   
});

$('.scrollToTop').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });


//xài riêng
//slide
document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#main-carousel', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
} );

var thumbnails = new Splide( '#thumbnail-carousel', {
        fixedWidth  : 150,
        fixedHeight : 90,
        gap         : 10,
        rewind      : true,
        pagination  : false,
        isNavigation: true,
        breakpoints : {
        600: {
        fixedWidth : 60,
        fixedHeight: 44,
        },
    },
} );

main.sync( thumbnails );
main.mount();
thumbnails.mount();
} );

//count
$(document).ready(function () {
    //Bidding All Events Here
    //New Countdown Starts
    if ($("#counter").length) {
      // If you need specific date then comment out 1 and comment in 2
      // let endDate = "2020/03/20"; //This is 1
      let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
      let counterElement = document.querySelector("#counter");
      let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
          let message = "";
          if (finished) {
            message = "Expired";
          } else {
              var re_days = remaining.totalDays;
              var re_hours = remaining.hours;
              message += re_days +"d  : ";
              message += re_hours +"h  : ";
              message += remaining.minutes +"m  : ";
              message += remaining.seconds + "s";
          }
          counterElement.textContent = message;
      });
    }}
);

var header = $(".header-bottom");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 1) {
        header.removeClass("active");
      } else {
        header.addClass("active");
      }
    });

$('.overlay').on('click', function () {
    $(this).removeClass('active');
    $('.header-bar').removeClass('active');
    $('.menu').removeClass('active');
    $('.cart-sidebar-area').removeClass('active');
    })
$('.cart-button, .side-sidebar-close-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('active');
    $('.cart-sidebar-area').toggleClass('active');
})

$(".btn-buy").on('click', function(){
  $.toast({
    heading: 'The bike has been added to your cart',
    text: 'Please go to cart to checkout',
    showHideTransition: 'slide',
    icon: 'success'
})

})