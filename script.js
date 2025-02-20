$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){// sticky navbar on scroll script
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){ // scroll-up button show/hide script
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){   // slide-up script
        $('html').animate({scrollTop: 0}); // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){ // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function(){  // toggle menu/navbar script
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed(".typing", {    // typing text animation script
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    $('.carousel').owlCarousel({    // owl carousel script
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{items: 1, nav: false },
            600:{ items: 2, nav: false },
            1000:{ items: 3, nav: false }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () { // Circular Progress Bar Animation
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => {
        const percent = circle.getAttribute("data-percent");
        circle.style.setProperty("--percent", `${percent}%`);
    });
});
