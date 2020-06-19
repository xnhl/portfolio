<template>
	<div id="code-wrapper">
		<div id="website-gallery">
			<div v-for="(website, index) in this.websites" :key="index" class="website">
				<p class="website-title">{{website.title}}</p>
				<div class="website-image-wrapper">
					<img v-if="website.image" class="website-image lazy" src="" :data-lazysrc="website.image" alt="">
				</div>
				<p class="website-description">{{website.description}}</p>
				<div class="website-tech">
					<div v-for="(item, index) in website.tech" :key="index" class="website-tech-item">
						<div class="website-tech-item-icon-wrapper">
							<img class="website-tech-item-icon" :src="item.icon" alt="">
						</div>
						<p class="website-tech-item-title">{{item.title}}</p>
					</div>
				</div>
				<div class="website-links">
					<a :href="website.link" class="website-link" target="_blank">Website</a>
					<a :href="website.repo" class="website-link" target="_blank">GitHub</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'dev',
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
			websites: [
				{
					title: 'cata-list',
					description: 'A knowledge base of useful information, news articles, media, tools, and quotes. It is intended as a catalyst for creating a better world. 156 pages (server-side rendered), ~3.5k wikipedia & news articles, 1k+ tools & useful websites, ... ',
					link: 'http://https://cata-list.github.io',
					repo: 'https://github.com/cata-list/cata-list.github.io',
					image: '/img/web_new/catalist.jpg',
					tech: [
						{
							title: 'HTML5',
							icon: '/img/web-icons/html5.svg'
						},
						{
							title: 'CSS3',
							icon: '/img/web-icons/css3.svg'
						},
						{
							title: 'Sass',
							icon: '/img/web-icons/sass.svg'
						},
						{
							title: 'Javascript',
							icon: '/img/web-icons/javascript.svg'
						},
						{
							title: 'Vue.js',
							icon: '/img/web-icons/vuejs.svg'
						},
						{
							title: 'Nuxt.js',
							icon: '/img/web-icons/nuxt.svg'
						}
					]
				},
				{
					title: 'IMDb Top 250 TV Shows',
					description: 'A detailed list of 250 top-rated TV shows on IMDb. The individual page for each series (rendered server-side) contains charts which visualize the ratings for every season of the show. I wrote custom scripts to scrape the data as there is no official IMDb API.',
					link: 'http://oval-hospital.surge.sh',
					repo: 'https://github.com/xnhl/imdb-top-250',
					image: '/img/web_new/imdbdark.jpg',
					tech: [
						{
							title: 'HTML5',
							icon: '/img/web-icons/html5.svg'
						},
						{
							title: 'CSS3',
							icon: '/img/web-icons/css3.svg'
						},
						{
							title: 'Sass',
							icon: '/img/web-icons/sass.svg'
						},
						{
							title: 'Javascript',
							icon: '/img/web-icons/javascript.svg'
						},
						{
							title: 'Vue.js',
							icon: '/img/web-icons/vuejs.svg'
						},
						{
							title: 'Nuxt.js',
							icon: '/img/web-icons/nuxt.svg'
						}
					]
				},
				{
					title: 'Time Tracker',
					description: 'A unique way to visualize time passing. Dynamic progress bars show the progress of each minute, hour, day, week, month, and year.',
					link: 'http://modern-receipt.surge.sh',
					repo: 'https://github.com/xnhl/time-tracker',
					image: '/img/web_new/timedark.jpg',
					tech: [
						{
							title: 'HTML5',
							icon: '/img/web-icons/html5.svg'
						},
						{
							title: 'CSS3',
							icon: '/img/web-icons/css3.svg'
						},
						{
							title: 'Sass',
							icon: '/img/web-icons/sass.svg'
						},
						{
							title: 'Javascript',
							icon: '/img/web-icons/javascript.svg'
						},
						{
							title: 'Vue.js',
							icon: '/img/web-icons/vuejs.svg'
						},
						{
							title: 'Nuxt.js',
							icon: '/img/web-icons/nuxt.svg'
						}
					]
				},
				{
					title: 'The Periodic Table',
					description: 'The Periodic Table of the Elements. A useful guide showing detailed information on each element (via Wikipedia\'s API).',
					link: 'http://past-statement.surge.sh',
					repo: 'https://github.com/xnhl/periodic-table',
					image: '/img/web_new/periodic.jpg',
					tech: [
						{
							title: 'HTML5',
							icon: '/img/web-icons/html5.svg'
						},
						{
							title: 'CSS3',
							icon: '/img/web-icons/css3.svg'
						},
						{
							title: 'Sass',
							icon: '/img/web-icons/sass.svg'
						},
						{
							title: 'Javascript',
							icon: '/img/web-icons/javascript.svg'
						},
						{
							title: 'Vue.js',
							icon: '/img/web-icons/vuejs.svg'
						},
						{
							title: 'Nuxt.js',
							icon: '/img/web-icons/nuxt.svg'
						}
					]
				},
				{
					title: 'Contact Congress',
					description: 'A sortable list of U.S. Congress members with detailed information such as voting statistics and contact information, as well as a page of charts illustrating various interesting statistics about members of Congress.',
					link: 'http://sparkling-boats.surge.sh',
					repo: 'https://github.com/xnhl/contact-congress',
					image: '/img/web_new/congress.jpg',
					tech: [
						{
							title: 'HTML5',
							icon: '/img/web-icons/html5.svg'
						},
						{
							title: 'CSS3',
							icon: '/img/web-icons/css3.svg'
						},
						{
							title: 'Sass',
							icon: '/img/web-icons/sass.svg'
						},
						{
							title: 'Javascript',
							icon: '/img/web-icons/javascript.svg'
						},
						{
							title: 'Vue.js',
							icon: '/img/web-icons/vuejs.svg'
						},
						{
							title: 'Nuxt.js',
							icon: '/img/web-icons/nuxt.svg'
						}
					]
				},
				{
					title: 'TED Top Videos',
					description: 'Lists of TED YouTube videos sorted by date, highest rating, and most views. There is detailed information for each video including ratings and keywords.',
					link: 'http://smoggy-insurance.surge.sh',
					repo: 'https://github.com/xnhl/ted-videos',
					image: '/img/web_new/teddark.jpg',
					tech: [
						{
							title: 'HTML5',
							icon: '/img/web-icons/html5.svg'
						},
						{
							title: 'CSS3',
							icon: '/img/web-icons/css3.svg'
						},
						{
							title: 'Sass',
							icon: '/img/web-icons/sass.svg'
						},
						{
							title: 'Javascript',
							icon: '/img/web-icons/javascript.svg'
						},
						{
							title: 'Vue.js',
							icon: '/img/web-icons/vuejs.svg'
						},
						{
							title: 'Nuxt.js',
							icon: '/img/web-icons/nuxt.svg'
						}
					]
				},
				{
					title: 'Notes App',
					description: 'A simple notes app using Local Storage and lowdb. Allows saving files as text or JSON as well as loading previous JSON files.',
					link: 'http://flimsy-sense.surge.sh',
					repo: 'https://github.com/xnhl/notes-app',
					image: '/img/web_new/notesdark.jpg',
					tech: [
						{
							title: 'HTML5',
							icon: '/img/web-icons/html5.svg'
						},
						{
							title: 'CSS3',
							icon: '/img/web-icons/css3.svg'
						},
						{
							title: 'Sass',
							icon: '/img/web-icons/sass.svg'
						},
						{
							title: 'Javascript',
							icon: '/img/web-icons/javascript.svg'
						},
						{
							title: 'Vue.js',
							icon: '/img/web-icons/vuejs.svg'
						},
						{
							title: 'Nuxt.js',
							icon: '/img/web-icons/nuxt.svg'
						}
					]
				},
				{
					title: 'Deli News Pizza',
					description: 'A re-design of the website for a local business. I converted their menu into JSON format and cleaned up the home banner image in Photoshop. Original website at: delinewspizza.com.',
					link: 'http://pleasant-history.surge.sh',
					repo: 'https://github.com/xnhl/deli-news',
					image: '/img/web_new/delinews.jpg',
					tech: [
						{
							title: 'HTML5',
							icon: '/img/web-icons/html5.svg'
						},
						{
							title: 'CSS3',
							icon: '/img/web-icons/css3.svg'
						},
						{
							title: 'Sass',
							icon: '/img/web-icons/sass.svg'
						},
						{
							title: 'Javascript',
							icon: '/img/web-icons/javascript.svg'
						},
						{
							title: 'Vue.js',
							icon: '/img/web-icons/vuejs.svg'
						},
						{
							title: 'Nuxt.js',
							icon: '/img/web-icons/nuxt.svg'
						},
						{
							title: 'Photoshop',
							icon: '/img/web-icons/photoshop.svg'
						}
					]
				},
				{
					title: 'Pet Finder',
					description: 'Use the petfinder API to browse the inventories of local animal shelters and use options to narrow your search.',
					link: 'http://thick-goldfish.surge.sh',
					repo: 'https://github.com/xnhl/pet-finder',
					image: '/img/web_new/petfinder.jpg',
					tech: [
						{
							title: 'HTML5',
							icon: '/img/web-icons/html5.svg'
						},
						{
							title: 'CSS3',
							icon: '/img/web-icons/css3.svg'
						},
						{
							title: 'Sass',
							icon: '/img/web-icons/sass.svg'
						},
						{
							title: 'Javascript',
							icon: '/img/web-icons/javascript.svg'
						},
						{
							title: 'Vue.js',
							icon: '/img/web-icons/vuejs.svg'
						},
						{
							title: 'Nuxt.js',
							icon: '/img/web-icons/nuxt.svg'
						}
					]
				},
				{
					title: 'Portfolio',
					description: 'My portfolio. You are here.',
					link: 'https://xnhl.github.io',
					repo: 'https://github.com/xnhl/portfolio',
					image: '/img/web_new/portfolio2.jpg',
					tech: [
						{
							title: 'HTML5',
							icon: '/img/web-icons/html5.svg'
						},
						{
							title: 'CSS3',
							icon: '/img/web-icons/css3.svg'
						},
						{
							title: 'Sass',
							icon: '/img/web-icons/sass.svg'
						},
						{
							title: 'Javascript',
							icon: '/img/web-icons/javascript.svg'
						},
						{
							title: 'Vue.js',
							icon: '/img/web-icons/vuejs.svg'
						},
						{
							title: 'Nuxt.js',
							icon: '/img/web-icons/nuxt.svg'
						}
					]
				}
			]
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
		.website
			@include flexCenter
			min-width: 100%
			flex: 1
			margin: 0.5rem
			border-radius: 0.5rem
			overflow: hidden
			background: rgba(white, 0.025)
			animation: $pageFade
			@media (min-width: 62rem)
				min-width: 40%
				max-width: 55%
			&:hover
				background: rgba(white, 0.05)
			.website-title
				padding: 1rem
				min-width: 100%
				height: auto
				align-self: flex-start
				text-align: center
				font-size: 1.5rem
			.website-image-wrapper
				@include flexCenter
				min-width: 100%
				flex: 1
				max-width: 100%
				height: auto
				.website-image
					width: auto
					height: auto
					padding: 1rem
					max-width: 100%
					box-sizing: content-box
					border-radius: 0.25rem
			.website-description
				flex: 1
				max-width: 50rem
				padding: 1rem
				text-align: left
				text-indent: 0.5rem
				border-radius: 0.5rem
				@include flexCenter
			.website-tech
				min-width: 100%
				@include flexCenter
				align-self: flex-end
				height: auto
				flex: auto
				margin: 0.5rem
				.website-tech-item
					@include flexCenter
					flex-direction: column
					width: auto
					margin: auto 0.5rem
					padding: 0.25rem
					&:hover
						.website-tech-item-icon-wrapper
							.website-tech-item-icon
								transform: scale(1.25)
					.website-tech-item-icon-wrapper
						@include flexCenter
						.website-tech-item-icon
							height: 2.5rem
							min-width: 2.5rem
							box-sizing: content-box
							transition: transform 0.15s
					.website-tech-item-title
						margin-top: 0.5rem
			.website-links
				@include flexCenter
				width: 100%
				height: auto
				align-self: flex-end
				.website-link
					min-width: 40%
					flex: 1
					padding: 0.5rem
					text-decoration: none
					color: white
					text-align: center
					border: 0.05rem solid rgba(black, 0.25)
					background: rgba(white, 0.05)
					&:hover
						background: rgba(white, 0.1)
</style>
