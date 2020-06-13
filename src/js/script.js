
// exports
$( document ).ready(function() {
@@include('jquery.wavify.js');
@@include('wavify.js');
@@include('slick.min.js');
// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1500);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";

     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("menu-element_active")
           .end().filter("[href='#"+id+"']").parent().addClass("menu-element_active");
     }                   
  });
  // Wave
// var myWave = $("#myID").wavify({
//   height: 550,
//   bones: 6,
//   amplitude: 80,
//   color: "#62a6ff",
//   speed: 0.25,
// });
var myWave = $("#svg").wavify({
  height: 50,
  bones: 5,
  amplitude: 100,
  color: "#111",
  speed: 0.25,
});

if(window.innerWidth <= 992){
    myWave = $("#svg").wavify({
    height: 50,
    bones: 5,
    amplitude: 50,
    color: "#111",
    speed: 0.25,
  });
}
// const nav = responsiveNav(".nav");
// nav.open();
const marker = document.querySelector("#marker");
const items =  document.querySelectorAll('.menu-element');
const indicator = (e) => {
      marker.style.left = `${e.offsetLeft}px`;
      marker.style.width = e.offsetWidth+"px";
  };
// header
$(window).scroll(function (event) {
  
  
    
    
    items.forEach(link => {

      if(link.closest('li').classList.contains('menu-element_active')){
        indicator(link);
      }
        link.addEventListener("click", (e) => {
          indicator(e.target);
         
        })
    })
  let s = $(this).scrollTop();
  let w = $(this).outerWidth();
  let h = $(".wrapper").outerHeight();
  let p = (s / h) * 100;
  let t = p;
  if (p > 0) {
    h = document.querySelector(".header");
    h.classList.add("header_active");
  } else {
    h = document.querySelector(".header");
    h.classList.remove("header_active");
  }
  if (p >= 60) {
    h = document.querySelector(".header");
    h.classList.add("header_active-white");
  } else {
    h = document.querySelector(".header");
    h.classList.remove("header_active-white");
  }
  if($('.header').hasClass("header_active-white")){
      $('body').addClass('scrollbar');
    }else{
      $('body').removeClass('scrollbar');
    }
  $(".svg-parallax").css("transform", `translateY(${100 - p}%)`);
});

// setInterval(() => {
//   const deg = 6;
//   const hr = document.querySelector("#hr");
//   const mn = document.querySelector("#mn");
//   const sc = document.querySelector("#sc");

//   let day = new Date();
//   let hh = day.getHours() * 30;
//   let mm = day.getMinutes() * deg;
//   let ss = day.getSeconds() * deg;

//   hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
//   mn.style.transform = `rotateZ(${mm}deg)`;
//   sc.style.transform = `rotateZ(${ss}deg)`;
// });

$('.block__title').click(function(e) {
  if($('.block').hasClass("one")){
    $(".block__title").not($(this)).removeClass("active-title");
    $(".block__text").not($(this).next()).slideUp(300);
  }
  $(this).toggleClass("active-title").next().slideToggle(300);
});

// menu
$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.nav ul').toggleClass('ul_active');
  $('body').toggleClass('body_hidden');
  $('.languages__menu').removeClass('languages__menu_active');
});

$(".menu-element").on('click', function(e) {
  e.preventDefault();
  $('.menu-btn').removeClass('menu-btn_active');
  $('body').removeClass('body_hidden');
  $('.nav ul').removeClass('ul_active');
  
});




    $('.languages__icon').on("click", function() {
      $('.languages__menu').toggleClass('languages__menu_active');
    });


 
   
     $(function(){
      
      
      const typed = new Typed('#typing-header', {
        /**
         * @property {array} strings strings to be typed
         * @property {string} stringsElement ID of element containing string children
         */
        strings: [
          "а website",
         "layout",
          "adaptive",
          "design",
          " Wordpress",
           "a database"
          ],
        stringsElement: null,
      
        /**
         * @property {number} typeSpeed type speed in milliseconds
         */
        typeSpeed: 100,
      
        /**
         * @property {number} startDelay time before typing starts in milliseconds
         */
        startDelay: 2500,
      
        /**
         * @property {number} backSpeed backspacing speed in milliseconds
         */
        backSpeed: 50,
      
        /**
         * @property {boolean} smartBackspace only backspace what doesn't match the previous string
         */
        smartBackspace: true,
      
        /**
         * @property {boolean} shuffle shuffle the strings
         */
        shuffle: false,
      
        /**
         * @property {number} backDelay time before backspacing in milliseconds
         */
        backDelay: 1500,
      
        /**
         * @property {boolean} fadeOut Fade out instead of backspace
         * @property {string} fadeOutClass css class for fade animation
         * @property {boolean} fadeOutDelay Fade out delay in milliseconds
         */
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
      
        /**
         * @property {boolean} loop loop strings
         * @property {number} loopCount amount of loops
         */
        loop: true,
        loopCount: Infinity,
      
        /**
         * @property {boolean} showCursor show cursor
         * @property {string} cursorChar character for cursor
         * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
         */
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
      
        /**
         * @property {string} attr attribute for typing
         * Ex: input placeholder, value, or just HTML text
         */
        attr: null,
      
        /**
         * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
         */
        bindInputFocusEvents: false,
      
        /**
         * @property {string} contentType 'html' or 'null' for plaintext
         */
        contentType: 'html',
      
        /**
         * Before it begins typing
         * @param {Typed} self
         */
        onBegin: (self) => {},
      
        /**
         * All typing is complete
         * @param {Typed} self
         */
        onComplete: (self) => {},
      
        /**
         * Before each string is typed
         * @param {number} arrayPos
         * @param {Typed} self
         */
        preStringTyped: (arrayPos, self) => {},
      
        /**
         * After each string is typed
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onStringTyped: (arrayPos, self) => {},
      
        /**
         * During looping, after last string is typed
         * @param {Typed} self
         */
        onLastStringBackspaced: (self) => {},
      
        /**
         * Typing has been stopped
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onTypingPaused: (arrayPos, self) => {},
      
        /**
         * Typing has been started after being stopped
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onTypingResumed: (arrayPos, self) => {},
      
        /**
         * After reset
         * @param {Typed} self
         */
        onReset: (self) => {},
      
        /**
         * After stop
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onStop: (arrayPos, self) => {},
      
        /**
         * After start
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onStart: (arrayPos, self) => {},
      
        /**
         * After destroy
         * @param {Typed} self
         */
        onDestroy: (self) => {}
      });
        
      $("#typing-header").typed();
  });

// let active = 0;
// const menuEl = document.querySelectorAll(".menu-element");
// const menuline = document.querySelectorAll(".menu-line");
//   this.addEventListener("click", () => {
//     menuEl[active].classList.remove("menu-element_active");
    
//     if(active + 1 == menuEl.length){
//       // menuline[active].classList.remove('menu-line_active');
//       active = 0;
//     }else{
//        active++;
        
//     }
//      menuEl[active].classList.add("menu-element_active");
//     if(active-1 < 0){
//       menuline[0].classList.remove('menu-line_active');
//     }else{
//       menuline[active].classList.remove('menu-line_active');
//       menuline[active-1].classList.add('menu-line_active');
//     }
   
//   });



  // cursor
  // $(document).mousemove(function(e){
  // o = $('.cursor').offset();
  // $(".dot").css({
  // "top": e.pageY - o.top,
  // "left": e.pageX - o.left
  // });
  // });


  // slider
 
    $('.slider__inner').slick(
      {
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="./img/icons/prev.svg" alt="prev"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="./img/icons/next.svg" alt="next"></button>',
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    );



   


});