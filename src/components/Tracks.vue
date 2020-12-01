<template lang="pug">
.tracks__item
  .tracks__item-logo
    img(src="../assets/07_play_track.svg", alt='play', width='15', height='15')
  span.tracks__item-title {{title}} 
</template>

<script>
/* elsint-disable */
export default {
  name: 'Tracks',
  props: {
    title: String,
    value: Number,
    active: Boolean,
    activeValue: Number,
  }
}
</script>


<style lang="scss" scoped>
.tracks {

  &__item {
    padding: 10px 0;
    width: 50%;
    display: flex;
    align-items: center;
    border-radius: 45px;
    transition: background 1s ease;

    &:hover {
      background: rgb(248, 226, 226);
      cursor: pointer;
      }
  }

  &__item-logo {
    width: 45px;
    height: 45px;
    background: #e64b3a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }

  &__item-title {
    font: normal 22px/22px "Montserrat Regular", sans-serif;
    color: #5d5d5d;
  } 
}
</style>

