// fixed-nav //
$(window).scroll(function () {

    var scrolling = $(this).scrollTop();

    if (scrolling > 400) {

        $(".menubg").addClass("fixed-nav");

    } else {
        $(".menubg").removeClass("fixed-nav");
    };
    if (scrolling > 500) {
        $(".scroll-btn").fadeIn(1000)
    } else {
        $(".scroll-btn").fadeOut(1000)
    }
});



//paralax js

$('.gallerybg').parallax({
    imageSrc: 'images/gallery-banner.jpg',

});
$('.eventbg').parallax({
    imageSrc: 'images/event-banner.jpg',

});


$(function () {
    //center mood
    $('.center').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        prevArrow:'<i class="fa fa-chevron-left slick-prev"></i>',
        nextArrow:'<i class="fa fa-chevron-right slick-next"></i>',
    });

    $('.blog-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        prevArrow:'<i class="fa fa-chevron-left slick-prev"></i>',
        nextArrow:'<i class="fa fa-chevron-right slick-next"></i>',
    });
    
    $('.testi-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:'<i class="fa fa-chevron-left slick-prev"></i>',
        nextArrow:'<i class="fa fa-chevron-right slick-next"></i>',
    });
    
     $('.plan-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        centerMode: true,
        centerPadding: "0",
    });
   
});

var date = document.getElementById('date');
var day = document.getElementById('day');
var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');

//get current year

var currentDate = new Date().getDate();
var currentMonth = new Date().getMonth();
var currentYear = new Date().getFullYear();
var nextDate = new Date(`${currentMonth + 8} ${currentDate + 8} ${currentYear} 00:00:00`);

//create function
function countdown()
{
    var currentTime = new Date();
    var diff = nextDate - currentTime;
    
    var d = Math.floor(diff / 1000 / 60 / 60 / 24);
    var h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    var m = Math.floor(diff / 1000 / 60 ) % 60;
    var s = Math.floor(diff / 1000 ) % 60;
    
    //print in html
    sec.innerHTML = s < 10 ? '0' + s : s ;
    min.innerHTML = m < 10 ? '0' + m : m ;
    hour.innerHTML = h < 10 ? '0' + h : h ;
    day.innerHTML = d < 10 ? '0' + d : d ;
}

//js timing
setInterval(countdown,1000);


// print next date






