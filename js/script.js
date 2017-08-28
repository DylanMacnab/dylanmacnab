// jQuery Junk Drawer

var navOffset = $('nav').offset().top;

$("nav").wrap('<div class="nav-placeholder"></div>');
$(".nav-placeholder").height($("nav").outerHeight());

$(window).scroll(function() {
	var scrollPos = $(window).scrollTop();
	if (scrollPos >= navOffset) {
		$("nav").addClass("fixed-nav");
	} else {
		$("nav").removeClass("fixed-nav");
	}
});


// NEW JS
var nav = document.querySelector('.nav');
var navOffset = nav.offsetTop;
document.addEventListener('scroll', () => {
	var scrollPos = widow.scrollY;
	if (scrollPos >= navOffset) {
		nav.classList.add('fixed-nav');
	} else {
		nav.classList.remove('fixed-nav');
	}
});


// jQuery scroll to anchor point

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {

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


// jQuery Parallax for header

$.stellar({
    horizontalScrolling: false,
});


// jQuery FadeIn /
//***************//
$('.header-image').animate({ opacity: 1 }, { duration: 300 });
