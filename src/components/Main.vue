/* eslint-disable no-console */
<template lang="pug">
.main
  .main__image
    img.main__pic(src='../assets/111111.png' alt="heart")
  button-contacts
  button-menu
  button-sound
  button-music


</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__pic {
    object-fit: fill;
    max-width: 100%;
    width: auto;
  }

  &__headline {
    font: normal 124px/124px "Montserrat Regular", sans-serif;
    color: $fontColor1;
    text-transform: uppercase;
    position: absolute;
    top: 13vh;
    left: -4vh;
  }
}
</style>

<script>
export default {
  name: 'Main',
  data: () => {
    return {

    }
  }
}
</script>
