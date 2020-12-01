<template lang="pug">
.player
  .player__wrapper
    .player__progress-bar.progress
      .player__player-wrapper
        .player__title
          h3.player__track-title tracks.title
          p.player__artist-title tracks.artist
          p.player__progress tracks.time
        .player__buttonGroup
          .player__button.button__prev.prev
            img(src="../assets/prev.png" alt="prev")
          .player__button.button__play.play
            img.play__icon(src="../assets/play.png" alt="play")
          .player__button.button__next.next
            img(src="../assets/next.png" alt="next")
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.player {
  background: #fff;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {
    display: flex;
    justify-content:center;
    background: #fe6d5d;
    border-radius: 50%;
  }

  &__progress-bar {
    display: inline-block;
    position: relative;
    width: 100%;
    left: 0;
    height: 100%;
    border-radius: 50%;
  }

.progress {
    background-image: linear-gradient(-90deg, transparent 50%, #e64b3a 50%),
                      linear-gradient(-90deg, transparent 50%, #e64b3a 50%);
}

  &__player-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('../assets/rectangle1.png') no-repeat;
    background-size: cover;
    width: 50vh;
    height: 50vh;
    margin: 30px;
  }

  &__buttonGroup {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }

  &__button {
    background: transparent;
  }

  .play {
    background: #fe6d5d!important;
    border: 5px solid #c51c18;
    border-radius: 50%;
    position: relative;

    &__icon {
      position: absolute;
      top: 30%;
      left: 36%;
    }
  }

  .button__prev,
  .button__next,
  .button__play {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    background: transparent;
    display: flex;
    align-items: center;
  }

  .button__prev {
    margin: 0;
  }

  &__track-title,
  &__artist-title,
  &__progress {
    font: normal 16px/21px "Montserrat Regular", sans-serif;
    color: #fff;
    text-align: center;
  }
}
</style>
