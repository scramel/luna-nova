<template>
	<div class="controls">
		<div class="f-row">
			<button class="btn btn-top" :disabled="disabled" @click="isTitle ? $emit('home') : $emit('prev')">{{ isTitle ? '☽︎' : '▲' }}</button>
		</div>
		<div class="carousel">
			<button v-for="page in pages" :key="page" :class="currentPage == page-2 ? 'active' : ''" :disabled="disabled" @click="$emit('goTo', page-2)"/>
		</div>
		<div class="f-row">
			<button class="btn btn-bottom" :disabled="disabled" @click="isEnd ? $emit('end') : $emit('next')">{{ isEnd ? '☽︎' : '▼' }}</button>
		</div>
	</div>
	<!-- <div class="luna-nova-controls">
		<div class="luna-nova-buttons">
			<button :disabled="disabled" @click="$emit('home')" v-if="isTitle">☽︎</button>
			<button :disabled="disabled" @click="$emit('prev')" v-else>▲</button>
			<div/>
			<button :disabled="disabled" @click="$emit('home')" v-if="isEnd">☽︎</button>
			<button :disabled="disabled" @click="$emit('next')" v-else>▼</button>
		</div>
		<div class="luna-nova-carousel">
			<button v-for="page in pages" :key="page" :class="currentPage == page ? 'active' : ''"/>
		</div>
	</div> -->
</template>

<script>
export default {
	props: {
		isTitle: Boolean,
		isEnd: Boolean,
		disabled: Boolean,
		pages: Number,
		currentPage: Number
	}
}
</script>

<style lang="scss" scoped>
	.controls {
		z-index: 1;
		.btn {
			position: absolute;
			border-radius: 100%;
			height: max(2.5vw, 40px);
			width: max(2.5vw, 40px);
			background: transparent;
			color: white;
			border-color: white;
			box-shadow: 2px 2px 4px black;
			transition: .2s;
			font-size: max(1vw, 15px);
			cursor: pointer;
			&-top { top: 5vh }
			&-bottom { bottom: 5vh }
			&:disabled { pointer-events: none; }
			&:hover { transform: scale(1.1); }
		}
		.carousel {
			position: absolute;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			right: 0;
			top: 0;
			z-index: 1;
			margin-right: 3vw;
			height: 100%;
			button {
				transition: .2s;
				cursor: pointer;
				background-color: rgba(255,255,255,.4);
				width: 1.5vh;
				height: 1.5vh;
				border-radius: 100%;
				border: none;
				&:not(:last-child) { margin-bottom: 2vh; }
				&:hover { background-color: rgba(255,255,255,.7); }
				&:active { background-color: rgba(255,255,255,.4); }
				&.active { background-color: white; }
			}
		}	
	}
</style>