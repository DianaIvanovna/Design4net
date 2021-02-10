
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper';


(function () {
  Swiper.use([Navigation, Pagination]);

  const swiperElements = document.querySelectorAll('.swiper-container');

  swiperElements.forEach((item, index)=>{
    let swiper;
    let clients = item.querySelectorAll('.our-client__client');
    if (document.documentElement.clientWidth >768 ){
      swiper= new Swiper(`.swiper-container-${index+1}`, {
        slidesPerView: clients.length<=5 ? clients.length : 5,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })

      if (clients.length<=5) {
        document.querySelector(`.swiper-button-next-${index+1}`).classList.add('our-client__button_hidden');
        document.querySelector(`.swiper-button-prev-${index+1}`).classList.add('our-client__button_hidden');
      }
    } else if (document.documentElement.clientWidth < 720 && document.documentElement.clientWidth >500) {
      swiper= new Swiper(`.swiper-container-${index+1}`, {
        slidesPerView: clients.length<=3 ? clients.length : 3,
        spaceBetween: 15,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      if (clients.length<=3) {
        document.querySelector(`.swiper-button-next-${index+1}`).classList.add('our-client__button_hidden');
        document.querySelector(`.swiper-button-prev-${index+1}`).classList.add('our-client__button_hidden');
      }
    } else {
      swiper= new Swiper(`.swiper-container-${index+1}`, {
        slidesPerView: clients.length<=2 ? clients.length : 2,
        spaceBetween: 15,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      if (clients.length<=2) {
        document.querySelector(`.swiper-button-next-${index+1}`).classList.add('our-client__button_hidden');
        document.querySelector(`.swiper-button-prev-${index+1}`).classList.add('our-client__button_hidden');
      }
    }
  })

})();
