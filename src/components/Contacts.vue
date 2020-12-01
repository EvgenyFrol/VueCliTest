<template lang="pug">
.contacts
  .contacts__wrapper
    .contacts__content
      h2.contacts__title lerimpresa. love and music <br>
      .contacts__container
        .contacts__desc
          a.contacts__email(href="mailto:lerimpresa@gmail.com") get in touch: lerimpresa@gmail.com
          p.contacts__text Lerimpresa is a creative agency with a digital obsession. Our singular vision is to infect minds with gooey interactive experiences that amaze and stupefy.<br> 
          p.contacts__text What We Do <br>Since 2004, Resn has worked at the frontier of interactive development and design. Our highly-skilled team has the expertise to take on complex technical challenges and fulfill creative dreams. From early insights and strategy to premium design Since 2004, Resn has worked at the frontier of interactive development and design. Our highly-skilled team has the expertise to take on complex technical challenges and fulfill creative dreams. From early insights and strategy to premium design 

        .contacts__social
          h3.contacts__social-title social networks
          .aboul__links
            .contacts__link
              img.contacts__icon(src="../assets/arrow.png")
              a.contacts__linkTo(href="#" alt="facebook") Facebook <br>
            .contacts__link
              img.contacts__icon(src="../assets/arrow.png")
              a.contacts__linkTo(href="#" alt="vk") Vkontakte <br>
            .contacts__link
              img.contacts__icon(src="../assets/arrow.png")
              a.contacts__linkTo(href="#" alt="instagram") Instagram <br>
            .contacts__link
              img.contacts__icon(src="../assets/arrow.png")
              a.contacts__linkTo(href="#" alt="youtube") YouTube <br>
</template>

<style lang="scss" scoped>
.contacts {
	position: relative;
	display: none;
	width: 100%;
	height: 100vh;
	left: -100%;
	z-index: 12;
	transition: right 0.3s ease;

  &__wrapper {
    background: url("../assets/about__back.png") no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    width: 60%;
  }

  &__container {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
  }

  &__desc {
    width: 60%;
  }

  &__email {
    font: normal 22px/22px "Montserrat Regular", sans-serif;
    color: #ff886a;
    text-transform: uppercase;
    text-decoration: none;
  }

  &__title {
    font: normal 38px/38px "Montserrat Regular", sans-serif;
    color: #ec6e4f;
    text-transform: uppercase;
    text-shadow: -2px 0 2px #df6b4e, 0 0 1em red;
    text-align:center;
  }

  &__link {
    margin-bottom: 15px;
    display: flex;
    justify-content: flex-start;
  }

  &__linkTo {
    font: normal 20px/22px "Montserrat Light", sans-serif;
    color: #ec6e4f;
    text-decoration: none;
  }

  &__icon {
    padding-right: 15px;
  }

  &__text {
    font: normal 20px/22px "Myriad Pro", sans-serif;
    color: #ff886a;
  }

  &__social-title {
    font: normal 22px/22px "Montserrat Regular", sans-serif;
    color: #ff886a;
    text-transform: uppercase;
  }

  &__open {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
  }
}
</style>

<script>
import ButtonMenu from './ButtonMenu.vue'
import ButtonContacts from './ButtonContacts.vue'
export default {
  components: {
    ButtonMenu,
    ButtonContacts,
  },
}
</script>
