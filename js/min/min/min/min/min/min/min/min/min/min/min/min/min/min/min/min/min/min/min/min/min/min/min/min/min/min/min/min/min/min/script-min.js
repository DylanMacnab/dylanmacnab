"use strict";var navOffset=$("nav").offset().top;$("nav").wrap('<div class="nav-placeholder"></div>'),$(".nav-placeholder").height($("nav").outerHeight()),$(window).scroll(function(){$(window).scrollTop()>=navOffset?$("nav").addClass("fixed-nav"):$("nav").removeClass("fixed-nav")}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var a=$(this.hash);if((a=a.length?a:$("[name="+this.hash.slice(1)+"]")).length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}}),$.stellar({horizontalScrolling:!1}),$(".header-image").animate({opacity:1},{duration:300});