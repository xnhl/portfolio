<template>
	<div id="about-wrapper">
		<div id="content-wrapper">
			<div id="cv">
				<div class="cv-section">
					<div class="cv-section-header">Education</div>
					<hr class="divider">
					<div class="cv-section-text">
						California State University, Long Beach (2015):<br>Bachelor of Fine Arts (BFA) - Focus in Art Photography
					</div>
				</div>
				<div class="cv-section">
					<div class="cv-section-header">Exhibitions</div>
					<hr class="divider">
					<div class="cv-section-text">
						<em>This Image Before Me</em>(2015), Gatov Galleries, Long Beach, CA
					</div>
				</div>
				<div class="cv-section">
					<div class="cv-section-header">About Me</div>
					<hr class="divider">
					<div class="cv-section-text">
						15+ years of experience with photography and advanced image manipulation.
					</div>
					<div class="cv-section-text">
						2+ years of experience with web development.
					</div>
				</div>
			</div>
			<div id="skills">
				<div id="skills-header">Language / Software Familiarity</div>
				<hr class="divider">
				<div id="skills-list">
					<a class="skills-list-item" v-for="(item, index) in this.skills" :key="index" :href="item.link" target="_blank">
						<img class="skills-list-item-image lazy" src="" :data-lazysrc="item.image" :alt="item.title">
						<p class="skills-list-item-text">{{item.title}}</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import skills from '@/assets/skills'
export default {
	head() {
		return {
			title: 'Matthew McCutcheon - About'
		}
	},
	mounted() {
		var lazyloadImages = document.querySelectorAll('.lazy');
		var imageObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					var image = entry.target;
					image.src = image.dataset.lazysrc;
					image.classList.remove('lazy');
					imageObserver.unobserve(image)
				}
			})
		});

		lazyloadImages.forEach((image) => {
			imageObserver.observe(image)
		})
	},
	data () {
		return {
			skills
		}
	}
}
</script>

<style lang="sass">
#about-wrapper
	padding: 0.5rem
	@include pageWrapper
	#content-wrapper
		#cv
			@include flexCenter
			align-items: stretch
			.cv-section
				@include flexCenter
				flex-direction: column
				min-width: 100%
				flex: 1
				padding: 0.5rem
				margin: 0.5rem
				border-radius: 0.5rem
				background: rgba(white, 0.025)
				line-height: 1rem
				@media (min-width: 37.5rem)
					min-width: 40%
				&:hover
					.divider
						width: 75%
				.divider
					width: 33%
					border: 0
					margin: 0.25rem auto
					height: 1px
					background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))
				.cv-section-header
					font-size: 1.25rem
					padding: 0.25rem
					letter-spacing: 0.025rem
				.cv-section-text
					@include flexCenter
					padding: 0.5rem
					font-size: 1.05rem
					flex: auto
					text-indent: 0.5rem
					max-width: 55rem
					&:last-child
						text-align: left
						text-indent: 0.5rem
					em
						margin-right: 0.25rem
		#skills
			margin-top: 1rem
			background: rgba(white, 0.025)
			border-radius: 0.5rem
			&:hover
				.divider
					width: 75%
			.divider
				width: 33%
				border: 0
				margin: 0.25rem auto
				height: 1px
				background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))
			#skills-header
				font-size: 1.25rem
				padding: 0.5rem
				text-align: center
			#skills-list
				@include flexCenter
				padding: 0.5rem
				.skills-list-item
					@include flexCenter
					flex-direction: column
					min-width: 40%
					flex: 1
					margin: 0.25rem
					height: 8rem
					cursor: pointer
					text-decoration: none
					border-radius: 0.5rem
					background: rgba(white, 0.025)
					border: 0.1rem solid rgba(white, 0)
					@media (min-width: 37.5rem)
						min-width: 30%
						max-width: 30%
					@media (min-width: 48rem)
						min-width: 19%
					@media (min-width: 65rem)
						min-width: 15%
					&:hover
						background: rgba(white, 0.05)
						box-shadow: 0 0 0.5rem 0.25rem rgba(black, 0.1)
						.skills-list-item-image
							transform: scale(1.25)
							filter: drop-shadow(0 0 0.25rem rgba(black, 0.2))
					.skills-list-item-image
						box-sizing: content-box
						padding: 0.5rem
						height: 4rem
						min-width: 4rem
						max-width: 9rem
						animation: $pageFade
						transition: transform 0.15s
						filter: drop-shadow(0 0 0.25rem rgba(black, 0.1))
					.skills-list-item-text
						min-width: 100%
						padding: 0.25rem
						text-decoration: none
						color: white
						text-align: center
						font-size: 1.05rem
</style>
