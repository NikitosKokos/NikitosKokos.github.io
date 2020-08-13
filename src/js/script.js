window.addEventListener("load", () => {
  const preloader = document.querySelector('#preloader');
  const bodyPage = document.querySelector('body');
  setTimeout(() =>{
    if(!preloader.classList.contains('done')){
    preloader.classList.add('done');
    bodyPage.classList.remove('hidden');
  }
  }, 800);
  
});
// exports
$( document ).ready(function() {
@@include('jquery.wavify.js');
@@include('wavify.js');
@@include('slick.min.js');

function testWebP(callback) {
// webp
  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });
// fonts
  function fontsStyle(params) {

    let file_content = fs.readFileSync(source_folder + '/scss/base/_fonts.scss');
    if (file_content == '') {
    fs.writeFile(source_folder + '/scss/base/_fonts.scss', '', cb);
    return fs.readdir(path.build.fonts, function (err, items) {
    if (items) {
    let c_fontname;
    for (var i = 0; i < items.length; i++) {
    let fontname = items[i].split('.');
    fontname = fontname[0];
    if (c_fontname != fontname) {
    fs.appendFile(source_folder + '/scss/base/_fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
    }
    c_fontname = fontname;
    }
    }
    })
    }
    }
// Cache selectors
let lastId,
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
  let href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1500);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   let fromTop = $(this).scrollTop()+topMenuHeight;
   
     // Get id of current scroll item
     let cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     let id = cur && cur.length ? cur[0].id : "";

     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("menu-element_active")
           .end().filter("[href='#"+id+"']").parent().addClass("menu-element_active");
     }                   
  });

var myWave = $("#svg").wavify({
  height: 50,
  bones: 5,
  amplitude: 100,
  color: "#111",
  speed: 0.25,
});
var myWave2 = $("#svgFooter").wavify({
  height: 50,
  bones: 5,
  amplitude: 50,
  color: "#111",
  speed: 0.25,
});


if(window.innerWidth <= 992){
    myWave  = $("#svg").wavify({
    height: 50,
    bones: 5,
    amplitude: 30,
    color: "#111",
    speed: 0.25,
  });
  myWave  = $("#svgFooter").wavify({
    height: 50,
    bones: 5,
    amplitude: 30,
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
      marker.style.width = `${e.offsetWidth}px`;
  };
  items.forEach(link => {
    link.addEventListener("click", (e) => {
      indicator(e.target);

    });
  
    
});
// header
$(window).scroll(function (event) {
  
  
    
    
    items.forEach(link => {
        // link.addEventListener("click", (e) => {
        //   indicator(e.target);
        // });
      if(link.closest('li').classList.contains('menu-element_active')){
        indicator(link);
      }
        
    });
    
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

// spoiler

if(window.innerWidth <= 992){
  $('.footer__title').click(function(e) {
  if($('.footer').hasClass("one")){
    $(".footer__title").not($(this)).removeClass("footer__title_active");
    $(".block__text").not($(this).next()).slideUp(300);
  }
  $(this).toggleClass("footer__title_active").next().slideToggle(300);
});
}
// $(window).resize(function () {
//   if($(window).innerWidth <= 992){
//   $('.footer__title').click(function(e) {
//   if($('.footer').hasClass("one")){
//     $(".footer__title").not($(this)).removeClass("footer__title_active");
//     $(".block__text").not($(this).next()).slideUp(300);
//   }
//   $(this).toggleClass("footer__title_active").next().slideToggle(300);
// });
// }
// });

$('.block__title').click(function(e) {
  if($('.block').hasClass("one")){
    $(".block__title").not($(this)).removeClass("active-title");
    $(".block__text").not($(this).next()).slideUp(300);
  }
  $(this).toggleClass("active-title").next().slideToggle(300);
});
// spoiler end

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


  // img svg
  $('img.img-svg').each(function(){
    let $img = $(this);
    let imgClass = $img.attr('class');
    let imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });


  // languages__icon

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
        
  });


// cursor
/*
  $( "body" ).mousemove(function( event ) {
    var  x, y, z;
   
     x = event.clientX;
     y = event.clientY;
     z = event.clientZ;
    
   $( ".js-cursor" ).css( 'left', function( ) {
       x =  event.pageX-10;
     return x;
   });
   $( ".js-cursor" ).css( 'top', function() {
      y =  event.pageY-10;
     return y;
   }); 
   $('a').on('mouseover', function() {
    // $('.cursor').css({'width':'40px', 'height':'40px'});
    $('.cursor').css({'transform':'scale(2.2)','opacity': '.6'});
   });
   
   $('a').on('mouseout', function() {
    // $('.cursor').css({'width':'30px', 'height':'30px'});
    $('.cursor').css({'transform':'scale(1)','opacity': '.8'});
   });
   });
*/
  // cursor end
  
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


// tabs
$('ul.portfolio__tabs').on('click', 'li:not(.portfolio__tab_active)', function() {
  $(this)
    .addClass('portfolio__tab_active').siblings().removeClass('portfolio__tab_active')
    .closest('div._container').find('div.portfolio__content').removeClass('portfolio__content_active').eq($(this).index()).addClass('portfolio__content_active');
});
   
$('.portfolio__item').on('click', function() {
  $(this)
  .addClass('portfolio__item_active').siblings().removeClass('portfolio__item_active');
});
// tabs end

  //  form
    const inputs = document.querySelectorAll('.form__input');
    const formBtn = document.querySelector('.form__btn');
    const formBtnClose = document.querySelector('.form__btn-close');
 inputs.forEach((element) => {
  element.addEventListener('keyup', () => {
    if(element.value != ''){
      if(element['required'] != undefined && element['required'].value == ''){
        formBtn.disabled = true;
      }else{
        formBtn.disabled = false;
      }
      formBtnClose.disabled = false;
    }else{
      formBtn.disabled = true;
      formBtnClose.disabled = true;
    }
    
  });
  
    });


    const formReset = () => {
      setTimeout(function()  {
        document.querySelector('.form__main').reset(); // reset form
        formBtn.disabled = true;
        formBtnClose.disabled = true;
      }, 300);
       
    };
    formBtnClose.addEventListener('click', formReset);

    
    
    //  form end



    // Date

let res = document.querySelector("#webYear");
let current = new Date(); 
let old = new Date("04-01-2019"); // !!! месяц-день-год !!!


let days = Math.ceil(Math.abs(old.getTime() - current.getTime()) / (1000 * 3600 * 24));
let year = Math.floor(days / 365); 
let month = Math.floor((days - (year * 365)) / 30); 


res.innerHTML = `${year} year(s) ${month} month`;
 // Date end

//  scroll top
$(window).scroll(function() {scrollFunction()});

function scrollFunction() {
  if ($(document).height() - $(window).height() - $(window).scrollTop() <= 50 ) {
    $('#scrollTop').addClass('scrollTop_active');
  } 
  // Will not hide
  // else {
  //   $('#scrollTop').removeClass('scrollTop_active');
  // }
}


$('#scrollTop').on('click',(e) => {
  e.preventDefault();
  $('html, body').stop().animate({ 
    scrollTop: 0
}, 1000);
}) 
//  scroll top end

// ibg
function ibg(){

  let ibg=document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }
  
  ibg();
  // ibg end
const createMessage = () => {
  $('.message').addClass('message_active');
};

  setTimeout(createMessage, 10000);

});