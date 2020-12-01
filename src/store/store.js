import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    genre:"All",
    tracks: [
      {
        num:0,
        album:"All",
        genre:"All",
      },
      {
        num:1,
        track:"Great Big White World ",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.20902777777777778
      },
      {
        num:2,
        track:"The Dope Show",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.15694444444444444
      },
      {
        num:3,
        track:"Mechanical Animals",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.18958333333333333
      },
      {
        num:4,
        track:"Rock Is Dead",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.13125
      },
      {
        num:"5.",
        track:"Disassociative",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.2013888888888889
      },
      {
        num:"6.",
        track:"The Speed of Pain",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.22916666666666666
      },
      {
        num:7,
        track:"Posthuman",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.17847222222222223
      },
      {
        num:8,
        track:"I Want to Disappear",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.12222222222222222
      },
      {
        num:9,
        track:"I Don't Like the Drugs (But the Drugs Like Me)",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.21041666666666667
      },
      {
        num:10,
        track:"New Model No. 15",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.1527777777777778
      },
      {
        num:11,
        track:"User Friendly",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.17847222222222223
      },
      {
        num:12,
        track:"Fundamentally Loathsome",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.20069444444444445
      },
      {
        num:13,
        track:"«The Last Day on Earth»",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.20902777777777778
      },
      {
        num:14,
        track:"Coma White",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.23472222222222222
      },
      {
        num:15,
        track:"Без названия (Untitled)",
        artist:"Marilyn Manson",
        album:"Mechanical Animals",
        genre:"Industrial Metal",
        time:0.05694444444444444
      },
      {
        num:1,
        track:"Bullet Ride",
        artist:"In Flames",
        album:"Clayman",
        genre:"MDM",
        time:0.19583333333333333
      },
      {
        num:2,
        track:"Pinball Map",
        artist:"In Flames",
        album:"Clayman",
        genre:"MDM",
        time:0.17222222222222222
      },
      {
        num:3,
        track:"Only for the Weak",
        artist:"In Flames",
        album:"Clayman",
        genre:"MDM",
        time:0.2048611111111111
      },
      {
        num:4,
        track:"...as the Future Repeats Today",
        artist:"In Flames",
        album:"Clayman",
        genre:"MDM",
        time:0.14375
      },
      {
        num:"5.",
        track:"Square Nothing",
        artist:"In Flames",
        album:"Clayman",
        genre:"MDM",
        time:0.16458333333333333
      },
      {
        num:"6.",
        track:"Clay man",
        artist:"In Flames",
        album:"Clayman",
        genre:"MDM",
        time:0.14444444444444443
      },
      {
        num:7,
        track:"Satellites and Astronauts",
        artist:"In Flames",
        album:"Clayman",
        genre:"MDM",
        time:0.20833333333333334
      },
      {
        num:8,
        track:"Brush the Dust Away",
        artist:"In Flames",
        album:"Clayman",
        genre:"MDM",
        time:0.13680555555555557
      },
      {
        num:9,
        track:"Swim",
        artist:"In Flames",
        album:"Clayman",
        genre:"MDM",
        time:0.13472222222222222
      },
      {
        num:10,
        track:"Suburban Me",
        artist:"In Flames",
        album:"Clayman",
        genre:"MDM",
        time:0.14930555555555555
      },
      {
        num:11,
        track:"Another Day in Quicksand",
        artist:"In Flames",
        album:"Clayman",
        genre:"MDM",
        time:0.1638888888888889
      },
      {
        num:1,
        track:"Inertia",
        artist:"Insomnium",
        album:"One for Sorrow",
        genre:"MDM",
        time:0.15486111111111112
      },
      {
        num:2,
        track:"Through the Shadows",
        artist:"Insomnium",
        album:"One for Sorrow",
        genre:"MDM",
        time:0.18819444444444444
      },
      {
        num:3,
        track:"Song of the Blackest Bird",
        artist:"Insomnium",
        album:"One for Sorrow",
        genre:"MDM",
        time:0.31180555555555556
      },
      {
        num:4,
        track:"Only One Who Waits",
        artist:"Insomnium",
        album:"One for Sorrow",
        genre:"MDM",
        time:0.22013888888888888
      },
      {
        num:"5.",
        track:"Unsung",
        artist:"Insomnium",
        album:"One for Sorrow",
        genre:"MDM",
        time:0.2111111111111111
      },
      {
        num:"6.",
        track:"Every Hour Wounds",
        artist:"Insomnium",
        album:"One for Sorrow",
        genre:"MDM",
        time:0.22569444444444445
      },
      {
        num:7,
        track:"Decoherence",
        artist:"Insomnium",
        album:"One for Sorrow",
        genre:"MDM",
        time:0.1375
      },
      {
        num:8,
        track:"Lay the Ghost to Rest",
        artist:"Insomnium",
        album:"One for Sorrow",
        genre:"MDM",
        time:0.3236111111111111
      },
      {
        num:9,
        track:"Regain the Fire",
        artist:"Insomnium",
        album:"One for Sorrow",
        genre:"MDM",
        time:0.18541666666666667
      },
      {
        num:10,
        track:"One for Sorrow",
        artist:"Insomnium",
        album:"One for Sorrow",
        genre:"MDM",
        time:0.2548611111111111
      },
      {
        num:1,
        track:"Chertograd ",
        artist:"Deathstars",
        album:"Night Electric Night",
        genre:"Industrial Metal",
        time:0.19791666666666666
      },
      {
        num:2,
        track:"Night Electric Night",
        artist:"Deathstars",
        album:"Night Electric Night",
        genre:"Industrial Metal",
        time:0.16944444444444445
      },
      {
        num:3,
        track:"Death Dies Hard ",
        artist:"Deathstars",
        album:"Night Electric Night",
        genre:"Industrial Metal",
        time:0.13958333333333334
      },
      {
        num:4,
        track:"The Mark of the Gun ",
        artist:"Deathstars",
        album:"Night Electric Night",
        genre:"Industrial Metal",
        time:0.16805555555555557
      },
      {
        num:5,
        track:"Via the End",
        artist:"Deathstars",
        album:"Night Electric Night",
        genre:"Industrial Metal",
        time:0.17152777777777778
      },
      {
        num:6,
        track:"Blood Stains Blondes ",
        artist:"Deathstars",
        album:"Night Electric Night",
        genre:"Industrial Metal",
        time:0.13541666666666666
      },
      {
        num:7,
        track:"Babylon ",
        artist:"Deathstars",
        album:"Night Electric Night",
        genre:"Industrial Metal",
        time:0.17916666666666667
      },
      {
        num:8,
        track:"The Fuel Ignites ",
        artist:"Deathstars",
        album:"Night Electric Night",
        genre:"Industrial Metal",
        time:0.16666666666666666
      },
      {
        num:9,
        track:"Arclight ",
        artist:"Deathstars",
        album:"Night Electric Night",
        genre:"Industrial Metal",
        time:0.1909722222222222
      },
      {
        num:10,
        track:"Venus in Arms ",
        artist:"Deathstars",
        album:"Night Electric Night",
        genre:"Industrial Metal",
        time:0.16805555555555557
      },
      {
        num:11,
        track:"Opium ",
        artist:"Deathstars",
        album:"Night Electric Night",
        genre:"Industrial Metal",
        time:0.15486111111111112
      },
      {
        num:1,
        track:"Sa Bir",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.08333333333333333
      },
      {
        num:2,
        track:"Vinushka",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.40069444444444446
      },
      {
        num:3,
        track:"Red Soil",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.14166666666666666
      },
      {
        num:4,
        track:"Dōkoku to Sarinu ",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.15833333333333333
      },
      {
        num:5,
        track:"Toguro ",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.16458333333333333
      },
      {
        num:6,
        track:"Glass Skin",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.18541666666666667
      },
      {
        num:7,
        track:"Stuck Man",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.1486111111111111
      },
      {
        num:8,
        track:"Reiketsu Nariseba",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.14791666666666667
      },
      {
        num:9,
        track:"Ware, Yami Tote… ",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.2923611111111111
      },
      {
        num:10,
        track:"Bugaboo",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.19652777777777777
      },
      {
        num:11,
        track:"Gaika, Chinmoku ga Nemuru Koro",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.18194444444444444
      },
      {
        num:12,
        track:"Dozing Green",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.1701388888888889
      },
      {
        num:13,
        track:"Inconvenient Ideal",
        artist:"DIR EN GREY",
        album:"UROBOROS",
        genre:"Avant-garde Metal",
        time:0.18263888888888888
      },
      {
        num:1,
        track:"Kyōkotsu no Nari ",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.08194444444444444
      },
      {
        num:2,
        track:"The Blossoming Beelzebub",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.3159722222222222
      },
      {
        num:3,
        track:"Different Sense",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.21041666666666667
      },
      {
        num:4,
        track:"Amon",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.16875
      },
      {
        num:5,
        track:"Yokusō ni Dreambox' Aruiwa Seijuku no Rinen to Tsumetai Ame",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.20069444444444445
      },
      {
        num:6,
        track:"Jūyoku",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.14444444444444443
      },
      {
        num:7,
        track:"Shitataru Mōrō ",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.16805555555555557
      },
      {
        num:8,
        track:"Lotus",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.16875
      },
      {
        num:9,
        track:"Diabolos",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.41041666666666665
      },
      {
        num:10,
        track:"Akatsuki",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.14791666666666667
      },
      {
        num:11,
        track:"Decayed Crow",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.15833333333333333
      },
      {
        num:12,
        track:"Hageshisa to, Kono Mune no Naka de Karamitsuita Shakunetsu no Yami",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.16875
      },
      {
        num:13,
        track:"Vanitas ",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.22708333333333333
      },
      {
        num:14,
        track:"Ruten no Tō ",
        artist:"DIR EN GREY",
        album:"DUM SPIRO SPERO",
        genre:"Avant-garde Metal",
        time:0.18541666666666667
      }
    ]
  },
  actions: {
 
  },
  mutations: {

  },
  getters: {
    unique(state) {
      return state.tracks.reduce((acc, el) => {
        if (acc.indexOf(el.genre) != -1) {
          return acc;
        } 
        return [...acc, el.genre]
      },[]);
    }, 
    getAlbums(state) {
      return state.tracks.reduce((acc, el) => {
        if (acc.indexOf(el.album) != -1) {
          return acc;
        } 
        return [...acc, el.album]
      },[]);
    }, 
  }
})
