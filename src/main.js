import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/store'

import Preloader from './components/Preloader.vue'
import Main from './components/Main.vue'
import Menu from './components/Menu.vue'
import Contacts from './components/Contacts.vue'
import ButtonMenu from './components/ButtonMenu.vue'
import ButtonContacts from './components/ButtonContacts.vue'
import ButtonSound from './components/ButtonSound.vue'
import ButtonMusic from './components/ButtonMusic.vue'
import Music from './components/Music.vue'
import Player from './components/Player.vue'
import Playlist from './components/Playlist.vue'
import Genre from './components/Genre.vue'
import Albums from './components/Albums.vue'
import AlbumScroll from './components/AlbumScroll.vue'
import Tracks from './components/Tracks.vue'
import Photo from './components/Photo.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(Vuex);

Vue.component('app-preloader', Preloader);
Vue.component('app-main', Main);
Vue.component('app-menu', Menu);
Vue.component('app-contacts', Contacts);
Vue.component('button-menu', ButtonMenu);
Vue.component('button-contacts', ButtonContacts);
Vue.component('button-sound', ButtonSound);
Vue.component('button-music', ButtonMusic);
Vue.component('app-music', Music);
Vue.component('app-player', Player);
Vue.component('app-playlist', Playlist);
Vue.component('Genre', Genre);
Vue.component('Albums', Albums);
Vue.component('album-scroll', AlbumScroll);
Vue.component('Tracks', Tracks);
Vue.component('app-photo', Photo);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
