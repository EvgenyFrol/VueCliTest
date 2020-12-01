<template lang="pug">
  .preloader
    h2.preloader__count {{ number }}
</template>

<style lang="scss" scoped>
  .preloader {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

  &__count {
    color: $fontColor1;
    font: normal 116px/116px "Montserrat Regular", sans-serif;
    }
  }
</style>

<script>
export default {
  data() {
    return {
      number:0,
    }
  },
  // computed() {
  //     return this.number.toFixed();
  // },
  created() {
    var intval = setInterval (() => {
      if (this.number < 100) 
        this.number++;
      else 
        clearInterval(intval);
    }, 30)
  }
}
</script>
