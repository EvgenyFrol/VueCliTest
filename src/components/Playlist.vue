<template lang="pug">
.playlist
  .playlist__wrapper
    .playlist__filters
      Genre(v-for="(item, i) in this.$store.getters.unique"
            :active="isActive==i"
            :index="i"
            :name="item"
            @changeAlbum="changeAlbum")
    .playlist__division
      .albums
        swiper(:options='swiperOption', ref='mySwiper')
          Albums(v-for="item in dataAlbums"
                :active="isActive==item"
                :name="item"
                @changeTrack="changeTrack")
        album-scroll
    .tracks
      Tracks(v-for="item in data"
              :title="item.track")
</template>

<script>
/* eslint-disable */
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Swiper from 'swiper'

export default {
  name: 'Playlist',
  data () {
    return {
      data: this.$store.state.tracks,
      dataAlbums: this.$store.getters.getAlbums,
      isActive: 0, 
      swiperOption: {
        direction: 'horizontal',
        slidesPerView: 4,
        navigation: {
          nextEl: '.filter__next',
          prevEl: '.filter__prev',
        }
      }
    }
  },
  methods: {
    changeAlbum(value) {
      this.isActive = value.index;
      
      if (this.isActive == 0) {
        this.dataAlbums = this.$store.getters.getAlbums
      } else {
        this.dataAlbums = this.$store.state.tracks.filter(item => item.genre == value.name).reduce((acc, el) => {
          if (acc.indexOf(el.album) != -1) {
            return acc;
          } 
            return [...acc, el.album]
        }, [])
      }
    },  
    changeTrack(value) {
      this.isActive = value.name;
      // eslint-disable-next-line no-console
      console.log(value.name)

      if (this.isActive == 'All') {
        this.data = this.$store.state.tracks
      } else {
        this.data = this.$store.state.tracks.filter(item => item.album == value.name).reduce((acc, el) => {
             
          return [...acc, el]
          
        }, [])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.playlist {
  width: auto;
  max-width: 600px;
  height: auto;
  max-height: 600px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  &__filters {
    display: flex;
    justify-content: flex-start;
    align-items: center;    
  }

  &__wrapper {
    width: 100%;
  }

  &__division {
    border-bottom: 1px solid #ababab;
  }
}

.albums {
  display: flex;
  align-items: center;
  position: relative;

  &__item {
    margin: 20px 20px 20px 0;
    width: auto!important;
    font: normal 22px/22px "Montserrat Regular", sans-serif;
    color: #ababab;

    &:hover {
      color: #e64b3a;
      cursor: pointer;
    }

    &__active {
      color: #e64b3a;
    }

    &:focus {
      color: #e64b3a;
    }
  }
}

.tracks {
  height: 100%;
  max-height: 320px;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e64b3a;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: #ddd;
    border-radius: 20px;
  }
}
</style>


