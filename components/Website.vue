<template>
	<div class="website">
		<div class="website-image-wrapper">
			<img v-if="this.info.image" class="website-image lazy" src="/img/web_new/placeholder.jpg" :data-lazysrc="this.info.image" :alt="this.info.title">
		</div>
		<div class="website-info-wrapper">
			<p class="website-title" v-text="this.info.title"></p>
			<p class="website-description" v-text="this.info.description"></p>
			<div class="website-versions">
				<div class="website-version" v-for="(version, index) in this.info.versions" :key="index">
					<p class="website-version-title" v-text="version.title"></p>
					<div class="website-version-tech">
						<div v-for="(item, index) in version.tech" :key="index" class="website-version-tech-item">
							<div class="website-version-tech-item-icon-wrapper">
								<img class="website-version-tech-item-icon" :src="item.icon" alt="">
							</div>
							<p class="website-version-tech-item-title" v-text="item.title"></p>
						</div>
					</div>
					<div class="website-version-links">
						<a :href="version.link" class="website-version-link" target="_blank">
							<div class="website-version-link-icon-wrapper">
								<img src="/img/icons/link.svg" alt="link" class="website-version-link-icon">
							</div>
							<p class="website-version-link-text">Website</p>
						</a>
						<a :href="version.repo" class="website-version-link" target="_blank">
							<div class="website-version-link-icon-wrapper">
								<img src="/img/icons/github.svg" alt="github" class="website-version-link-icon">
							</div>
							<p class="website-version-link-text">GitHub</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Website',
	props: {info: {}}
}
</script>

<style lang="sass">
.website
	@include flexCenter
	cursor: pointer
	min-width: 100%
	flex: 1
	margin: 0.5rem
	border-radius: 0.5rem
	overflow: hidden
	background: rgba(white, 0.025)
	animation: $pageFade
	&:hover
		background: rgba(white, 0.05)
	.website-image-wrapper
		@include flexCenter
		min-width: 100%
		width: auto
		height: auto
		max-width: 100%
		@media (min-width: 59rem)
			min-width: auto
		.website-image
			width: auto
			height: auto
			padding: 1rem
			max-width: 100%
			min-width: 245px
			box-sizing: content-box
			border-radius: 0.25rem
	.website-info-wrapper
		@include flexCenter
		flex: 1
		.website-title
			padding: 1rem
			margin: 1rem auto
			min-width: 100%
			height: auto
			text-align: center
			font-size: 1.5rem
			line-height: 1.5rem
		.website-description
			flex: 1
			min-width: 100%
			max-width: 50rem
			padding: 2rem 1rem
			font-size: 1.1rem
			line-height: 1.25rem
			text-align: left
			text-indent: 0.5rem
			border-radius: 0.5rem
			@include flexCenter
		.website-versions
			width: 100%
			@include flexCenter
			align-items: stretch
			.website-version
				flex: 1
				display: flex
				flex-direction: column
				justify-content: space-between
				margin: 0.25rem
				min-width: 100%
				overflow: hidden
				border-radius: 0.25rem
				background: rgba(white, 0.025)
				@media (min-width: 68rem)
					min-width: 40%
				.website-version-title
					min-width: 100%
					padding: 0.5rem
					text-align: center
					@include flexCenter
				.website-version-tech
					width: 100%
					@include flexCenter
					align-self: flex-end
					height: auto
					flex: 1
					margin: 0.25rem auto
					.website-version-tech-item
						@include flexCenter
						flex-direction: column
						width: auto
						flex-grow: 1
						padding: 0.25rem
						.website-version-tech-item-icon-wrapper
							@include flexCenter
							.website-version-tech-item-icon
								height: 2rem
								min-width: 2rem
								box-sizing: content-box
								transition: transform 0.15s
						.website-version-tech-item-title
							margin-top: 0.5rem
							font-size: 0.9rem
				.website-version-links
					@include flexCenter
					width: 100%
					height: auto
					align-self: flex-end
					.website-version-link
						@include flexCenter
						min-width: 40%
						flex: 1
						cursor: pointer
						padding: 0.25rem
						text-decoration: none
						color: white
						text-align: center
						border-radius: 0.5rem
						border: 0.05rem solid rgba(black, 0.25)
						background: rgba(white, 0.025)
						&:hover
							background: rgba(white, 0.05)
						.website-version-link-icon-wrapper
							@include flexCenter
							width: auto
							.website-version-link-icon
								height: 1.5rem
								width: 1.5rem
								filter: invert(1)
								padding: 0.25rem
								box-sizing: content-box
						.website-version-link-text
							margin: 0 0.5rem
							@include flexCenter
</style>
