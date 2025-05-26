
//first slidder set 
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction:
      false,
  },
  loop: true
});


//secend slider set 
var swiper = new Swiper(".my ", {
  slidesPerView: 1.6,
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


  //secend sliders breakpoint 
  breakpoints: {
    478: {
      slidesPerView: 1.6,
    },
    650:{
      slidesPerView: 2  ,
    },
    768: {
      slidesPerView: 3  ,
    },
    968: {
      slidesPerView: 3.5,
    },
   
   
    1300: {
      slidesPerView: 5    ,
    },
    1650: {
      slidesPerView: 6.5    ,
    },
  },
});
