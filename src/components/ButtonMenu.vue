<template lang="pug">
.wrapper
  button.button.button__menu(@click="openMenu")
    img(src="../assets/burger.svg" alt="menu")
  app-menu
</template>

<style lang="scss">
.button {
  width: 40px;
  height: 20px;
  background: transparent;
  border: none;
  position: absolute;

  &__menu {
    top: 2%;
    right: 2%;
    z-index: 10;
  }
}
</style>

<script>
export default {

  methods: {
    openMenu() {
      let blockMenu = document.querySelector('.menu');

        blockMenu.classList.toggle('menu__open');
    }
  }
}
</script>
