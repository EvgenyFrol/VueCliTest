<template lang="pug">
.menu
	.menu__wrapper
		.menu__links
			button.menu__link() music
			button.menu__link() photo
			button.menu__link() video
			button.menu__link() contact us
		.menu__button-close()
			img(src='../assets/close.png' alt='contacts')
</template>

<script>

export default {
}
</script>


<style lang="scss">
.menu {
	position: relative;
	display: none;
	width: 100%;
	height: 100vh;
	right: -100%;
	background: #fff;
	z-index: 12;
	transition: right 1s ease;

	&__wrapper {
		padding-top: 10%;
	}

	&__links {
		margin-left: 140px;
		display: flex;
		flex-direction: column;
	}

	&__link {
		font: normal 89px/89px "Montserrat Regular", sans-serif;
		color: #e64b3a;
		text-transform: uppercase;
		text-align: left;
		padding: 20px 0;
		background: transparent;
		border: none;
		text-decoration: none;

		&:hover {
			cursor: pointer;
		}
	}

	&__open {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100vh;

	}

	&__button-close {
		position: absolute;
		right: 50px;
		top: 23px;
	}
}
</style>


