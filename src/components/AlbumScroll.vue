<template lang="pug">
.filter
  .filter__prev
    img(src="../assets/left_filter.svg" alt="left filter" width="15" height="15")
  .filter__next
    img(src="../assets/right_filter.svg" alt="rigth filter" width="15" height="15")
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  position: absolute;
  right: -40px;

  &__prev,
  &__next {
    &:hover {
      cursor: pointer;
    }
  }

  &__next {
    margin-left: 10px;
  }
}
</style>
