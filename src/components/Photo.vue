<template lang="pug">
.photo#photo
  swiper.photo__wrapper(:options='swiperOption', ref='mySwiper', @someswiperevent='callback')
    // slides
    swiper-slide.photo__item 
      .photo__image
        img(src="../assets/photo.png" alt="slide")
      p.photo__title {{ title }}
    swiper-slide.photo__item 
      .photo__image
        img(src="../assets/photo.png" alt="slide")
      p.photo__title {{ title }}
    swiper-slide.photo__item 
      .photo__image
        img(src="../assets/photo.png" alt="slide")
      p.photo__title {{ title }}
    // Optional controls
    .photo__prev(slot='button-prev')
      img.photo__prevIcon(src="../assets/photo_prev.png" alt="prev")
    .photo__next(slot='button-next')
      img.photo__nextIcon(src="../assets/photo_next.png" alt="next")
  ButtonMenu
  ButtonContacts
</template>

<style lang="scss">
.photo {
  position: relative;
  top: -100;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__open {
    top: 0;
  }

  &__item {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__title {
    position: absolute;
    font: normal 90px/118px "Montserrat Regular", sans-serif;
    color: #e64b3a;
    text-transform: uppercase;
    top: 60%;
    left: 18%;
  }

  &__wrapper {
    position: relative;
  }

  &__prev,
  &__next {
    position: absolute;
    z-index: 10;

    &:hover {
      cursor: pointer;
    }
  }

  &__prev {
    top: 50%;
    left: 10%;
  }

  &__next {
    top: 50%;
    right: 10%;
  }
}
</style>

<script>
import ButtonMenu from './ButtonMenu.vue'
import ButtonContacts from './ButtonContacts.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Photo',
  data: () => {
    return {
      title: 'love and music',
      swiperOption: {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        paginationClickable: true,
        observer: true, 
        observeParents: true,
        navigation: {
          nextEl: '.photo__next',
          prevEl: '.photo__prev',
        }
      }
    }
  },
    components: {
      ButtonMenu,
      ButtonContacts,
      swiper,
      swiperSlide
  },
}
</script>
