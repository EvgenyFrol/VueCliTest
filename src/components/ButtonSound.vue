<template lang="pug">
button.button.button__sound
  img(src="../assets/sound.svg" alt="sound")
</template>

<style lang="scss">
.button {
  width: 40px;
  height: 20px;
  background: transparent;
  border: none;
  position: absolute;

  &__sound {
    bottom: 3%;
    right: 2%;
  }
}
</style>
