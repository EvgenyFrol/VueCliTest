<template lang="pug">
button.button.button__music(@click="openMusic")
  img(src="../assets/player.svg" alt="player")
</template>

<style lang="scss">
.button {
  width: 40px;
  height: 20px;
  background: transparent;
  border: none;
  position: absolute;

  &__music {
    bottom: 4%;
    left: 2%;
  }
}
</style>

<script>
export default {
  methods: {
    openContacts() {
      let music = document.querySelector('.music');

      music.classList.toggle('music__open')
    }
  }
}
</script>
