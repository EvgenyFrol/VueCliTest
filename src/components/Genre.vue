<template lang="pug">
  .genre(@click="change"
         :class="active?'genre__active':''") {{ name }}
</template>


<script>
export default {
  name: 'Genre',
  props: {
    name: String,
    active: Boolean,
    index: Number
  }, 
  methods: {
    change() {
      this.$emit('changeAlbum', {
        name: this.name, 
        index: this.index
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.genre {
  margin: 20px 20px 0 0;
  font: normal 22px/22px "Montserrat Regular", sans-serif;
  color: #ababab;

  &:hover {
    color: #e64b3a;
    cursor: pointer;
  }

  &__active {
    color: #e64b3a;
  }

  &:focus {
    color: #e64b3a;
  }
}
</style>
