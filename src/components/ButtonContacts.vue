<template lang="pug">
.wrapper
  button.button.button__contacts(@click="openContacts")
    img(src="../assets/about.svg" alt="contacts")
  app-contacts
</template>

<style lang="scss">
.button {
  width: 40px;
  height: 20px;
  background: transparent;
  border: none;
  position: absolute;

  &__contacts {
    top: 2%;
    left: 2%;
    z-index: 10;
  }
}
</style>

<script>
export default {
  methods: {
    openContacts() {
      let contacts = document.querySelector('.contacts');

      contacts.classList.toggle('contacts__open')
    }
  }
}
</script>
