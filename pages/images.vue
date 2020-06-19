<template>
	<div id="images-wrapper">
		<div @click="closeModal" @contextmenu.prevent="closeModal" id="image-modal" class="hide">
			<p id="image-modal-close">X</p>
			<div id="image-modal-inner-wrapper">
				<img src="" alt="" id="image-modal-image">
			</div>
		</div>
		<div id="image-gallery-menu">
			<div v-for="(series, index) in this.images" :key="`menu-${index}`" class="image-gallery-menu-item">
				<p @click="showSeries" class="image-gallery-menu-item-text">{{series.title}}</p>
			</div>
		</div>
		<div id="image-gallery">
			<div v-for="(series, index) in this.images" :key="index" :id="series.title" class="series hide">
				<div class="series-image-wrapper">
					<div v-for="(image, index) in series.list" :key="index" class="series-image">
						<img @click="showModal" src="" :data-srclg="image.image" :data-lazysrc="image.imageThumb" alt="" class="series-image-actual lazy">
						<p class="series-image-caption">{{image.caption}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'images',
	methods: {
		showModal: function (e) {
			var modal = document.getElementById('image-modal');
			var imageToShow = e.target.dataset.srclg;
			modal.children[1].children[0].src = imageToShow;
			modal.classList.remove('hide')
		},
		closeModal: function () {
			var modal = document.getElementById('image-modal');
			modal.classList.add('hide')
		},
		showSeries: function(e) {
			var seriesArr = [...document.getElementsByClassName('series')];
			var seriesToShow = e.target.textContent.toLowerCase();
			var seriesMenuItems = [...e.target.parentNode.parentNode.children];
			seriesMenuItems.forEach(item => {
				item.classList.remove('active')
			});
			e.target.parentNode.classList.add('active');
			seriesArr.forEach(series => {
				series.classList.add('hide');
				var seriesTitle = series.id.toLowerCase();
				if (seriesTitle === seriesToShow) {
					series.classList.remove('hide');
				}
			});
			window.scrollTo(0, 0);
		}
	},
	mounted() {
		var firstSeries = document.getElementsByClassName('series')[0];
		var firstMenuItem = document.getElementsByClassName('image-gallery-menu-item')[0];
		firstSeries.classList.remove('hide');
		firstMenuItem.classList.add('active');
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
	head() {
		return {
			title: 'Matthew McCutcheon - Images'
		}
	},
	data() {
		return {
			images: [
				{
					title: 'Studio',
					list: [
						{
							image: '/img/galleries/studio/1.jpg',
							imageThumb: '/img/galleries/studio/1-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/studio/3.jpg',
							imageThumb: '/img/galleries/studio/3-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/studio/2.jpg',
							imageThumb: '/img/galleries/studio/2-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/studio/4.jpg',
							imageThumb: '/img/galleries/studio/4-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/studio/5.jpg',
							imageThumb: '/img/galleries/studio/5-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/studio/6.jpg',
							imageThumb: '/img/galleries/studio/6-thumb.jpg',
							caption: ''
						}
					]
				},
				{
					title: 'Noir',
					list: [
						{
							image: '/img/galleries/noir/1.jpg',
							imageThumb: '/img/galleries/noir/1-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/noir/2.jpg',
							imageThumb: '/img/galleries/noir/2-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/noir/3.jpg',
							imageThumb: '/img/galleries/noir/3-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/noir/4.jpg',
							imageThumb: '/img/galleries/noir/4-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/noir/5.jpg',
							imageThumb: '/img/galleries/noir/5-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/noir/6.jpg',
							imageThumb: '/img/galleries/noir/6-thumb.jpg',
							caption: ''
						}
					]
				},
				{
					title: 'Skate',
					list: [
						{
							image: '/img/galleries/skate/1.jpg',
							imageThumb: '/img/galleries/skate/1-thumb.jpg',
							caption: 'Kevin Romar - Kickflip'
						},
						{
							image: '/img/galleries/skate/2.jpg',
							imageThumb: '/img/galleries/skate/2-thumb.jpg',
							caption: 'Julian Davidson - Backside Smith Grind'
						},
						{
							image: '/img/galleries/skate/3.jpg',
							imageThumb: '/img/galleries/skate/3-thumb.jpg',
							caption: 'Nick Garcia - Tuckknee'
						},
						{
							image: '/img/galleries/skate/4.jpg',
							imageThumb: '/img/galleries/skate/4-thumb.jpg',
							caption: 'Geralle Estes - Wallride'
						},
						{
							image: '/img/galleries/skate/5.jpg',
							imageThumb: '/img/galleries/skate/5-thumb.jpg',
							caption: 'Alec Jamir - Backside Salad Grind'
						},
						{
							image: '/img/galleries/skate/6.jpg',
							imageThumb: '/img/galleries/skate/6-thumb.jpg',
							caption: 'Nick Garcia - Wallride'
						},
						{
							image: '/img/galleries/skate/7.jpg',
							imageThumb: '/img/galleries/skate/7-thumb.jpg',
							caption: 'Nick Garcia - Frontside 180 (the wrong way)'
						},
						{
							image: '/img/galleries/skate/8.jpg',
							imageThumb: '/img/galleries/skate/8-thumb.jpg',
							caption: 'Ben Fisher - Backside Flip'
						},
						{
							image: '/img/galleries/skate/9.jpg',
							imageThumb: '/img/galleries/skate/9-thumb.jpg',
							caption: 'Julian Davidson - Frontside flip'
						},
						{
							image: '/img/galleries/skate/10.jpg',
							imageThumb: '/img/galleries/skate/10-thumb.jpg',
							caption: 'Bucky from AZ - Frontside Smith Grind'
						}
					]
				},
				{
					title: 'People',
					list: [
						{
							image: '/img/galleries/portraiture/1.jpg',
							imageThumb: '/img/galleries/portraiture/1-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/portraiture/2.jpg',
							imageThumb: '/img/galleries/portraiture/2-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/portraiture/5.jpg',
							imageThumb: '/img/galleries/portraiture/5-thumb.jpg',
							caption: 'Re-creation of Magritte\'s "The Pleasure Principle"'
						},
						{
							image: '/img/galleries/portraiture/6.jpg',
							imageThumb: '/img/galleries/portraiture/6-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/portraiture/7.jpg',
							imageThumb: '/img/galleries/portraiture/7-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/portraiture/4.jpg',
							imageThumb: '/img/galleries/portraiture/4-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/portraiture/3.jpg',
							imageThumb: '/img/galleries/portraiture/3-thumb.jpg',
							caption: ''
						}
					]
				},
				{
					title: 'Misc.',
					list: [
						{
							image: '/img/galleries/misc/1.jpg',
							imageThumb: '/img/galleries/misc/1-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/misc/2.jpg',
							imageThumb: '/img/galleries/misc/2-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/misc/3.jpg',
							imageThumb: '/img/galleries/misc/3-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/misc/4.jpg',
							imageThumb: '/img/galleries/misc/4-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/misc/5.jpg',
							imageThumb: '/img/galleries/misc/5-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/misc/6.jpg',
							imageThumb: '/img/galleries/misc/6-thumb.jpg',
							caption: ''
						},
						{
							image: '/img/galleries/misc/7.jpg',
							imageThumb: '/img/galleries/misc/7-thumb.jpg',
							caption: ''
						}
					]
				}
			]
		}
	}
}
</script>

<style lang="sass">
#images-wrapper
	@include pageWrapper
	padding: 0.5rem
	position: relative
	#image-modal
		@include flexCenter
		position: fixed
		top: 0
		left: 0
		padding: 0.5rem
		z-index: 10
		height: 100vh
		width: 100%
		margin: 0 auto
		animation: $pageFade
		background: rgba(black, 0.85)
		#image-modal-close
			text-align: right
			position: absolute
			top: 1rem
			right: 1rem
			cursor: pointer
			margin: 0 0.5rem 3rem 0
		#image-modal-inner-wrapper
			@include flexCenter
			#image-modal-back
				padding: 0.5rem 1rem
				font-size: 1.5rem
			#image-modal-next
				padding: 0.5rem 1rem
				font-size: 1.5rem
			#image-modal-image
				height: auto
				min-width: 100%
				max-width: 100%
				animation: $pageFade
				border-radius: 0.5rem
				border: 0.5rem solid rgba(white, 0.95)
				box-shadow: 0 0 1rem 0.25rem rgba(black, 0.25)
	#image-gallery-menu
		@include flexCenter
		width: 100%
		margin: 0 auto
		border-radius: 0.25rem
		position: sticky
		top: 1.9rem
		.image-gallery-menu-item
			min-width: 10%
			flex: 1
			background: #222
			cursor: pointer
			border-bottom: 0.2rem solid rgba(#222, 0)
			text-decoration: none
			@include flexCenter
			background: lighten(black, 15)
			&:hover
				border-bottom: 0.2rem solid lighten(rgba(#222, 0.5), 25)
			&.active
				border-bottom: 0.2rem solid lighten(rgba(#222, 0.5), 35)
			.image-gallery-menu-item-text
				padding: 0.5rem 0.5rem 0.3rem 0.5rem
				font-size: 0.9rem
				flex: 1
				text-align: center
				text-transform: uppercase
	#image-gallery
		animation: $pageFade
		margin: 0 auto
		width: 100%
		border-radius: 0.25rem
		background: rgba(white, 0.025)
		.series
			@include flexCenter
			align-items: stretch
			flex-direction: column
			margin: 0.5rem
			border-radius: 0.5rem
			overflow: hidden
			animation: $pageFade
			.series-header
				background: rgba(white, 0.05)
				min-width: 100%
				font-size: 1.25rem
				padding: 0.5rem
			.series-image-wrapper
				padding: 0.5rem
				min-height: 91vh
				@include flexCenter
				.series-image
					@include flexCenter
					min-width: 100%
					max-width: 100%
					flex: 1
					cursor: pointer
					margin: 1rem
					box-sizing: content-box
					@media (min-width: 42rem)
						min-width: 40%
					@media (min-width: 60rem)
						min-width: 30%
					.series-image-actual
						height: auto
						width: auto
						max-width: 100%
						border-radius: 0.25rem
						border: 0.25rem solid rgba(white, 0.8)
						box-shadow: 0 0 1rem 0.25rem rgba(black, 0.5)
					.series-image-caption
						padding: 0.5rem
						min-width: 100%
						text-align: center
</style>
