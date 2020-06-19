<template>
	<div id="navigation-wrapper">
		<div id="nav-list">
			<nuxt-link to="/" exact active-class="active" class="nav-item">home</nuxt-link>
			<nuxt-link to="/about" active-class="active" class="nav-item">about</nuxt-link>
			<nuxt-link to="/dev" active-class="active" class="nav-item">code</nuxt-link>
			<nuxt-link to="/images" active-class="active" class="nav-item">images</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="sass">
#navigation-wrapper
	position: fixed
	left: 0
	z-index: 3
	display: flex
	top: -0.1rem
	min-width: 100%
	max-width: 90rem
	margin: 0 auto
	background: lighten(black, 10)
	box-shadow: 0 0 0.5rem 0.25rem rgba(black, 0.25)
	#nav-list
		flex: 1
		@include flexCenter
		justify-content: space-around
		width: 100%
		background: lighten(black, 15)
		margin: 0 auto
		max-width: 40rem
		overflow: hidden
		border-radius: 0 0 0.25rem 0.25rem
		.nav-item
			flex: 1
			padding: 0.5rem
			min-width: 20%
			text-decoration: none
			@include flexCenter
			background: lighten(black, 10)
			&:hover
				background: lighten(black, 15)
			&.active
				background: lighten(black, 20)
</style>
