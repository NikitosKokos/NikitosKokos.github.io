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

var myWave = $("#myID").wavify({
  height: 550,
  bones: 6,
  amplitude: 80,
  color: "#62a6ff",
  speed: 0.25,
});
var myWave = $("#svg").wavify({
  height: 50,
  bones: 5,
  amplitude: 100,
  color: "#111",
  speed: 0.25,
});

$(window).scroll(function (event) {
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
  // console.log(t);
  // console.log(s);
  console.log(p);
  $(".svg-parallax").css("transform", `translateY(${100 - p}%)`);
});

setInterval(() => {
  const deg = 6;
  const hr = document.querySelector("#hr");
  const mn = document.querySelector("#mn");
  const sc = document.querySelector("#sc");

  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

$('.block__title').click(function(e) {
  if($('.block').hasClass("one")){
    $(".block__title").not($(this)).removeClass("active-title");
    $(".block__text").not($(this).next()).slideUp(300);
  }
  $(this).toggleClass("active-title").next().slideToggle(300);
});

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.nav ul').toggleClass('ul_active');
  $('body').toggleClass('body_hidden');
  $('.languages__menu').removeClass('languages__menu_active');
});

$(".menu-element").on('click', function(e) {
  e.preventDefault();
  $('.menu-btn').toggleClass('menu-btn_active');
  $('body').toggleClass('body_hidden');
  $('.nav ul').toggleClass('ul_active');
  
});




    $('.languages__icon').on("click", function() {
      $('.languages__menu').toggleClass('languages__menu_active');
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
