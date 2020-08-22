<template>
	<div id="code-wrapper">
		<div id="website-gallery">
			<Website v-for="(website, index) in this.websites" :key="index" :info="website" />
		</div>
	</div>
</template>

<script>
import websites from '@/assets/websites'
import Website from '@/components/Website'
export default {
	components: {Website},
	head() {
		return {
			title: 'Matthew McCutcheon - Code'
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
	data() {
		return {
			websites
		}
	}
}
</script>

<style lang="sass">
#code-wrapper
	@include pageWrapper
	padding: 0.5rem
	#website-gallery
		@include flexCenter
		align-items: stretch
		animation: $pageFade
</style>
