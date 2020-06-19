<template>
	<div>
		<Navigation />
		<nuxt />
	</div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
	components: {Navigation},
	head() {
		return {
			title: 'Matthew McCutcheon',
			meta: [
				{
					charset: 'utf-8'
				},
				{
					name: 'viewport', 
					content: 'width=device-width, initial-scale=1'
				},
				{
					hid: 'description',
					name: 'description',
					content: 'Matthew McCutcheon - Front-End Web Developer, Image Creator'
				}
			]
		}
	}
}
</script>

<style lang="sass">
@keyframes fadeIn
	0%
		opacity: 0
	100%
		opacity: 1
.hide
	display: none !important
@font-face
	font-family: 'Open Sans'
	src: url('../static/fonts/OpenSans-Regular.ttf') format('truetype')
	font-weight: normal
	font-style: normal
html
	font-family: 'Open Sans', sans-serif
	font-size: 14px
	-ms-text-size-adjust: 100%
	-webkit-text-size-adjust: 100%
	-moz-osx-font-smoothing: grayscale
	-webkit-font-smoothing: antialiased
	box-sizing: border-box
	position: relative
body
  background-image: url('../static/img/bg/zwartevilt.png')
*,
*:before,
*:after
	box-sizing: border-box
	font-size: 14px
	padding: 0
	margin: 0
	line-height: 1.25rem
	transition: $transition
	color: white
</style>
