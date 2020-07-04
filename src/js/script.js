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
var myWave = $("#svgFooter").wavify({
  height: 50,
  bones: 5,
  amplitude: 50,
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
    // const check = () => {
     
    //   if(inputs[0].value != '' || inputs[1].value != '' || inputs[2].value != ''){
    //     if($('.form__input[required]')[0].value == ''){
    //       formBtn.disabled = true;
    //     }else{
    //       formBtn.disabled = false;
    //     }
    //     formBtnClose.disabled = false;
    //   }else{
    //     formBtn.disabled = true;
    //     formBtnClose.disabled = true;
    //   }

    // };

    const formReset = () => {
      setTimeout(function()  {
        formBtn.disabled = true;
        formBtnClose.disabled = true;
      }, 300);
       
    };
    formBtnClose.addEventListener('click', formReset);
    // inputs[0].addEventListener('keyup', check);
    // inputs[1].addEventListener('keyup', check);
    // inputs[2].addEventListener('keyup', check);
    
    
    //  form end



    // Date
    
/*
// Берём элемент для вывода таймера
let timer_show = document.querySelector("#webYear");
 
// Функция для вычисления разности времени
function diffSubtract(date1, date2) {
    return date2 - date1;
}
 
// Массив данных о времени
let end_date = {
    "full_year": "2019", // Год
    "month": "04", // Номер месяца
    "day": "01", // День
    "hours": "00", // Час
    "minutes": "00", // Минуты
    "seconds": "00" // Секунды
}
 
// Строка для вывода времени
let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;

// Запуск интервала таймера
timer = setInterval(function () {
    // Получение времени сейчас
    let now = new Date();
    // Получение заданного времени
    let date = new Date(end_date_str);
    // Вычисление разницы времени 
    let ms_left = diffSubtract(now, date);
    // Если разница времени меньше или равна нулю 
    if (ms_left <= 0) {
      let res = new Date(ms_left);
      // Делаем строку для вывода
      monthEnd = end_date.month;
      monthNow = now.getMonth();
      let str_timer = `${now.getFullYear() - 2019} year(s) ${diffSubtract( monthEnd, monthNow)} month`;
      timer_show.innerHTML = str_timer;
    } 
}, 1000)
    // Date end

*/
// находим в теле HTML контейнер, куда будем выводить результат
let res = document.querySelector("#webYear");

// объявляем наши даты
let current = new Date(); // сегодня
let old = new Date("04-01-2019"); // !!! месяц-день-год !!!

// сначала находим количество дней между датами
let days = Math.ceil(Math.abs(old.getTime() - current.getTime()) / (1000 * 3600 * 24));
let year = Math.floor(days / 365); // вычисляем кол-во лет. Math.floor убирает остаток.
let month = Math.floor((days - (year * 365)) / 30); // отняв года, вычисляем месяцы

// осталось вывести полученную информацию в контейнер:
res.innerHTML = `${year} year(s) ${month} month`;

});