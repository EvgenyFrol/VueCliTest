<template lang="pug">
swiper-slide.albums__item(@click.native="changeTrack" :class="active?'albums__active':''") {{name}}
</template>

<script>
/* eslint-disable */
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Swiper from 'swiper'
export default {
  name: 'Albums',
  props: {
    name: String,
    active: Boolean,
    index: Number
  }, 
  data ()  {   
    return {
      swiperOption: {
        direction: 'horizontal',
        slidesPerView: 7,
        navigation: {
          nextEl: '.filter__next',
          prevEl: '.filter__prev',
        }
      }
    }
  },
  methods: {
    changeTrack() {
       this.$emit('changeTrack', {
        name: this.name, 
        index: this.index
      })
    }
  },
  components: {
    swiper,
    swiperSlide
  },
}
</script>


<style lang="scss" scoped>
.albums {
  display: flex;
  align-items: center;
  position: relative;

  &__item {
    margin: 20px 20px 20px 0;
    font: normal 22px/22px "Montserrat Regular", sans-serif;
    color: #ababab;

    &:hover {
      color: #e64b3a;
      cursor: pointer;
    }

    &:focus {
      color: #e64b3a;
    }
  }
  &__active {
    color: #e64b3a;
  }
}
</style>
