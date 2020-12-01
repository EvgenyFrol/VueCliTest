<template lang="pug">
.music
  button-contacts
  button-menu
  .music-player
    app-player
    app-playlist
</template>

<style lang="scss" scoped>
// .music {
// 	position: relative;
// 	display: none;
// 	width: 100%;
// 	height: 100vh;
// 	left: -100%;
// 	z-index: 12;
// 	transition: right 0.3s ease;
	
//   &__open {
//     display: block;
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     width: 100%;
//     height: 100vh;
//     z-index: 9;
//   }
// }

.music-player {
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  @media (max-width: 1122px) {
  display: flex;
  flex-direction: column;
  }
}
</style>

<script>

export default {

}
</script>
