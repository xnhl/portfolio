<template>
	<div id="home-wrapper">
		<div id="content-wrapper">
			<div id="self-portrait">
				<!-- <img id="self-portrait-image" src="/img/other/i.jpg" alt=""> -->
				<img id="self-portrait-image" src="/img/other/mm.svg" alt="logo">
			</div>
			<p id="name">Matthew McCutcheon</p>
			<div id="titles">
				<p class="titles-title">Front-End Web Developer</p>
				<p class="titles-title">Image Creator</p>
				</div>
			<div id="contact">
				<a class="contact-method" href="mailto:mwtheta@protonmail.com" target="_blank">
					<img class="contact-method-image" src="/img/icons/email.svg" alt="email">
				</a>
				<a class="contact-method" href="https://www.linkedin.com/in/matthew-mccutcheon-03851010b/" target="_blank">
					<img class="contact-method-image" src="/img/icons/linkedin.svg" alt="linked in">
				</a>
				<a class="contact-method" href="https://github.com/xnhl" target="_blank">
					<img class="contact-method-image" src="/img/icons/github1.svg" alt="github">
				</a>
			</div>
			<div id="resume">
				<a class="resume-link" href="/Resume - Matthew McCutcheon.pdf" target="_blank">Resume (PDF)</a>
				<a class="resume-link" href="/Resume - Matthew McCutcheon.txt" target="_blank">Resume (Plain Text)</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: 'Matthew McCutcheon'
		}
	}
}
</script>

<style lang="sass">
#home-wrapper
	@include pageWrapper
	min-height: 85vh
	#content-wrapper
		padding: 0.5rem
		margin: 0 auto
		margin-top: 4rem
		border-radius: 1rem
		background: rgba(white, 0.005)
		@include flexCenter
		max-width: 37.5rem
		box-shadow: 0 0 1rem 0.5rem rgba(black, 0.1)
		@media (min-width: 37.5rem)
			margin-top: 7rem
		// #self-portrait
		// 	margin: 1rem
		// 	min-width: 100%
		// 	height: 300px
		// 	width: 300px
		// 	@include flexCenter
		// 	#self-portrait-image
		// 		border-radius: 50%
		// 		border: 0.5rem solid rgba(white, 0.05)
		// 		filter: drop-shadow(0 0 1rem rgba(black, 0.025))
		#self-portrait
			min-width: 100%
			@include flexCenter
			#self-portrait-image
				height: 25rem
				width: 25rem
				border-radius: 50%
				opacity: 0.05
				filter: drop-shadow(0 0 1rem rgba(black, 0.25))
		#name
			text-align: center
			font-size: 2rem
			min-width: 100%
			letter-spacing: 0.05rem
		#titles
			min-width: 100%
			@include flexCenter
			margin: 1rem auto
			text-align: center
			.titles-title
				font-size: 1.5rem
				margin: 0.5rem
				min-width: 100%
		#contact
			@include flexCenter
			margin-top: 0.5rem
			width: 100%
			max-width: 37.5rem
			.contact-method
				@include flexCenter
				padding: 0.5rem
				flex: 1
				min-width: 20%
				margin: 0.5rem
				border-radius: 0.25rem
				background: rgba(white, 0.025)
				&:hover
					box-shadow: 0 0 1rem 0.25rem rgba(black, 0.15)
					background: rgba(white, 0.04)
					.contact-method-image
						transform: scale(1.15)
						transition: transform 0.15s
				.contact-method-image
					box-sizing: content-box
					padding: 0.5rem
					height: 2.5rem
					width: 2.5rem
					filter: drop-shadow(0 0 0.25rem rgba(black, 0.1))
		#resume
			@include flexCenter
			align-items: stretch
			width: 100%
			.resume-link
				flex: 1
				min-width: 100%
				font-size: 1.1rem
				cursor: pointer
				padding: 0.5rem
				margin: 0.5rem
				border-radius: 0.25rem
				text-align: center
				@include flexCenter
				text-decoration: none
				background: rgba(white, 0.025)
				@media (min-width: 24rem)
					min-width: 40%
				&:hover
					box-shadow: 0 0 1rem 0.25rem rgba(black, 0.15)
					background: rgba(white, 0.04)
</style>
