<template>
	<div class="controls">
		<div class="f-row">
			<button class="btn btn-top" :disabled="disabled" @click="isTitle ? $emit('home') : $emit('prev')">
				<transition name="fade">
					<img v-show="showInstructions" class="arrow arrow-1" alt="Instruction 1" :src="require(`@/assets/img/arrow-1-${locale}.png`)">
				</transition>
				{{ isTitle ? '☽︎' : '▲' }}
			</button>
		</div>
		<div class="carousel">
			<button v-for="page in pages" :key="page" :class="currentPage == page-2 ? 'active' : ''" :disabled="disabled" @click="$emit('goTo', page-2)"/>
		</div>
		<div class="f-row">
			<button class="btn btn-bottom" :disabled="disabled" @click="isEnd ? $emit('end') : $emit('next')">
				<transition name="fade">
					<img v-show="showInstructions" class="arrow arrow-2" alt="Instruction 2" :src="require(`@/assets/img/arrow-2-${locale}.png`)">
				</transition>
				{{ isEnd ? '☽︎' : '▼' }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isTitle: Boolean,
		isEnd: Boolean,
		disabled: Boolean,
		pages: Number,
		currentPage: Number,
		currentAct: Number
	},
	data() {
		return {
			locale: this.$cookies.get('locale') || 'en'
		}
	},
	computed: {
		showInstructions() {
			return this.isTitle && !this.disabled && this.currentAct===0
		}
	}
}
</script>

<style lang="scss" scoped>
	.controls {
		z-index: 1;
		.arrow {
			position: absolute;
			width: clamp(200px, 17vw, 300px);
			transition: .2s;
			pointer-events: none;
			@media (max-width: 1200px) { display: none; }
			&-1 {
				top: -3.5vh;
				right: 3vw;
			}
			&-2 {
				bottom: -4vh;
				left: 2vw;
			}
		}
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
			&-bottom { 
				bottom: 5vh;
				@media (max-width: 768px) {
					bottom: unset;
					top: 90vh;
				}
			}
			&:disabled { 
				transform: scale(1) !important;
				pointer-events: none;
				.arrow {
					transform: scale(1);
				}
			}
			&:hover { 
				transform: scale(1.1);
				.arrow {
					transform: scale(.9);
				}
			}
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
			height: 100vh;
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
	// Transitions
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s !important;
	}
	.fade-enter-from,
	.fade-leave-to {
		opacity: 0 !important;
	}
</style>