new Typed('#typed',{
    strings : ['z','Developer','Larry Daniels'],
	loop: true,
	typeSpeed: 100,
    backSpeed: 50,
	backDelay: 1500,
  });
/*------------------------------------
    Counter
    
-------------------------------------- */
"use strict"

document.addEventListener("DOMContentLoaded", function() {
  // You can change this class to specify which elements are going to behave as counters.
  var elements = document.querySelectorAll(".scroll-counter")

  elements.forEach(function(item) {
    // Add new attributes to the elements with the '.scroll-counter' HTML class
    item.counterAlreadyFired = false
    item.counterSpeed = item.getAttribute("data-counter-time") / 45
    item.counterTarget = +item.innerText
    item.counterCount = 0
    item.counterStep = item.counterTarget / item.counterSpeed

    item.updateCounter = function() {
      item.counterCount = item.counterCount + item.counterStep
      item.innerText = Math.ceil(item.counterCount)

      if (item.counterCount < item.counterTarget) {
        setTimeout(item.updateCounter, item.counterSpeed)
      } else {
        item.innerText = item.counterTarget
      }
    }
  })

  // Function to determine if an element is visible in the web page
  var isElementVisible = function isElementVisible(el) {
    var scroll = window.scrollY || window.pageYOffset
    var boundsTop = el.getBoundingClientRect().top + scroll
    var viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    }
    var bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight,
    }
    return (
      (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    )
  }

  // Funciton that will get fired uppon scrolling
  var handleScroll = function handleScroll() {
    elements.forEach(function(item, id) {
      if (true === item.counterAlreadyFired) return
      if (!isElementVisible(item)) return
      item.updateCounter()
      item.counterAlreadyFired = true
    })
  }

  // Fire the function on scroll
  window.addEventListener("scroll", handleScroll)
})



 // navbar scroll active section 
var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
 
    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});



  /*------------------------------------
    pageloader
-------------------------------------- */
 var loader = document.getElementById("pageloader");
 window.addEventListener("load",function(){
  loader.style.display = "none";
 })


    /*------------------------------------
    portfolio lightbox
-------------------------------------- */
const portfolioAll = GLightbox({
  selector: '.portfolio-all'
});
const portfolioBrand = GLightbox({
  selector: '.portfolio-brand'
});
const portfolioDesign = GLightbox({
  selector: '.portfolio-design'
});
const portfolioIGraphic = GLightbox({
  selector: '.portfolio-graphic '
});
    /*------------------------------------
   Change nav bg
-------------------------------------- */
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        nav.classList.add('active_nav');
    } else {
        nav.classList.remove('active_nav');
    }
})


$(".progress-bar-1").animate({
  width: "95%"
}, 2000);

$(".progress-bar-2").animate({
  width: "80%"
}, 2000);

$(".progress-bar-3").animate({
  width: "90%"
}, 2000);


$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    autoHeight: true,
    smartSpeed:500,
    loop: true,
    nav: false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
});
