<template>
	<div class="f-row">
		<div class="title">
			<h2>{{ $t(`act${currentAct}`) }}</h2>
			<!-- <p>A short story about the slow process of overcoming fear.</p> -->
			<br>
			<iframe
				:id="`sc-widget`"
				:src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${tracks[currentAct]}
					&color=%2324232a
					&auto_play=false
					&hide_related=false
					&show_comments=false
					&show_user=true
					&show_reposts=false
					&show_teaser=true
					&visual=true
					&play=repeat`"
				scrolling="no"
				frameborder="no">
			</iframe>
			<!-- <iframe v-for="(track, index) in tracks" :key="index"
				v-show="index==currentAct"
				:id="`sc-widget-${index}`"
				:src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track}
					&color=%2324232a
					&auto_play=false
					&hide_related=false
					&show_comments=false
					&show_user=true
					&show_reposts=false
					&show_teaser=true
					&visual=true
					&play=repeat`"
				scrolling="no"
				frameborder="no">
			</iframe> -->
			<!-- <br>
			<p>Click the moon (☽︎) to return to the main screen.</p>
			<p>Click the arrow (▼) to advance.</p>
			<br>
			<label>Music by Scramel & SCAR.</label> -->
			<br>
		</div>
		<!-- <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1147804189%3Fsecret_token%3Ds-7MpzzpkjGj7&color=%2324232a&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> -->
	</div>
</template>

<script>
import SC from "@/scripts/sc-widget.js"
export default {
	props: { 
		currentAct: Number,
		pause: Number
	},
	data() {
		return {
			widget: null,
			tracks: [
				'1181754493%3Fsecret_token%3Ds-uqZwIYIIzy1', // Luna Nova
				'1181754463%3Fsecret_token%3Ds-HO7N6oetm9j', // Stellar Fields
				'1181754415%3Fsecret_token%3Ds-Oe5Fp8lR9bk', // Pathway to Ataraxia
				'1181754355%3Fsecret_token%3Ds-VWNhgM3dtOE', // A Note For You
				'1181754316%3Fsecret_token%3Ds-dS50IWeFgpH', // White Moon
				'1181754253%3Fsecret_token%3Ds-0rL4BKCQU38', // Weissmond
			]
		}
	},
	watch: {
		pause() { 
			let widget = document.getElementById(`sc-widget`)
			widget = SC.Widget(widget)
			widget.pause()
		}
	},
	mounted() {
		let widget = document.getElementById(`sc-widget`)
		// let widgets = []
		// for(let i=0; i<6; i++) { widgets.push(document.getElementById(`sc-widget-${i}`)) }
		// widgets.forEach(widget => {
			widget = SC.Widget(widget)
			widget.bind(SC.Widget.Events.READY, () => {
				widget.bind(SC.Widget.Events.FINISH, () => {
					widget.play() // replays the current track once finished
				});
			})
		// })
		this.widget = widget
	}
}
</script>

<style lang="scss" scoped>
	.title {
		// margin-right: 4vw;
		p { margin: 0 10vw; padding: 0; text-indent: 0; }
	}
	iframe {
		left: 0 !important;
		width: 40vh !important;
		height: 40vh !important;
		position: initial !important;
	}
</style>