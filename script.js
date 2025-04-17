var swiper = new Swiper(".mySwiper", {
  autoplay:{
      delay:4000,
      disableOnInteraction:
      false,
  },
  loop:true
});

// nav1
const dropdownLink =  document.querySelectorAll('.dropdown')
const clickLi = document.querySelectorAll('.li-link')
const arrowLi = document.querySelectorAll('.arrow-li')


// menu2
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')
const menu = document.querySelector('.menu-ham')
const sideBar = document.querySelector('.side-menu')
const closeIcon = document.querySelector('.close-icon')




//nav1
clickLi[0].addEventListener("click", () => {
    dropdownLink[0].classList.toggle("hidden");
    dropdownLink[1].classList.add("hidden");
  });
  clickLi[1].addEventListener("click", () => {
    dropdownLink[1].classList.toggle("hidden");
    dropdownLink[0].classList.add("hidden");
  });
 
dropdownLink.forEach((toggle, index) => {
  toggle.addEventListener("click", (e) => {
    // e.stopPropagation();      // برای جلوگیری از بستن منو هنگام کلیک روی خودش
    dropdownLink[index].classList.toggle("hidden");
  });
});


//menu2
menu.addEventListener("click", () => {
  sideBar.style.transform =  "translateX(0)";
})
closeIcon.addEventListener('click', () => {
  sideBar.style.transform =  "translateX(500px)";
  
})
document.addEventListener('click', (e) => {
  if(
    !sideBar.contains(e.target) &&
    !menu.contains(e.target) &&
    !closeIcon.contains(e.target)
  ) {
    sideBar.style.transform =  "translateX(500px)";
  }
})



// این فانکشن برای بستن هر منوی بازی استفاده میشه
document.addEventListener("click", (e) => {
  // توی این خط کد میگه که وقتی کاربر روی صفحه کلیک کرد
  clickLi.forEach((toggle, index) => {
    // برای هر کلیکی که کاربر روی صفحه انجام داده
    if (!toggle.contains(e.target) && !dropdownLink[index].contains(e.target)) {
      // اگر تارگت کلیک شده روی منو های باز شده نبود
      dropdownLink[index].classList.add("hidden");
    }
  });
});

