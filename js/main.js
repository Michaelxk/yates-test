




var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})



// // lightbox gallery
// let lightbox = new SimpleLightbox('.index-gallery a'),
//     lightboxMain = new SimpleLightbox('.mySwiper a'),
//     lightboxBoats = new SimpleLightbox('.nuestraFLota-gallery a');



// //swipper home carousel
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });




/*---------------------------------------------------------------
    scroll navbar animation
------------------------------------------------------------------*/

// window.addEventListener("scroll", function(){
  // console.log('yeah');
  // let navbarContent = document.getElementById('navbar-content');
  // navbarContent.classList.toggle('sticky', window.scrollY > 0);
// })


/*---------------------------------------------------------------
      script para pausar y dar play al video 
------------------------------------------------------------------*/

// let options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 1.0
// }
// let callback = (entries, observer) => {
//   entries.forEach(entry => {
//     if(entry.target.id == 'main-video') {

//     }
//     if(entry.isIntersecting) {
//       entry.target.play();
//     }
//     else {
//       entry.target.pause();
//     }
//   })
// }
// let observer = new IntersectionObserver(callback, options)
//   observer.observe(document.getElementById('main-video'));


/*---------------------------------------------------------------
        ocultar  y mostrar el menu mobile 
------------------------------------------------------------------*/

let menu = document.getElementById('menu');
let menu_bar = document.getElementById('menu-bar');

menu_bar.addEventListener('click', function() {  
  menu.classList.toggle('menu-toggle');
})


/*---------------------------------------------------------------
       Filter gallery Nuestra Flota
------------------------------------------------------------------*/

let filterButtons = document.querySelectorAll(".filter-item");
let cards = document.querySelectorAll(".gallery-item");

filterButtons.forEach(item => {
    item.addEventListener('click', () => {
      filterButtons.forEach(item => {
        item.className = '';
      });
      item.className = 'active';
      // show images
      let values = item.textContent;
      cards.forEach(show => { 
        show.style.display = 'none';
        if(show.getAttribute('data-id') === values.toLowerCase() || values === 'Todos'){
          show.style.display = 'block';
           console.log(values)
        }
      });
    })
  });

/*---------------------------------------------------------------
      Testimonials slider quotes
------------------------------------------------------------------*/

// let slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

