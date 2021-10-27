<template>
	<div class="f-row">
		<div class="title">
			<h1>Luna Nova</h1>
			<p>A short story about the slow process of overcoming fear.</p>
			<br>
			<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1147804189%3Fsecret_token%3Ds-7MpzzpkjGj7&color=%2324232a&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true&play=repeat"
				id="sc-widget"
				scrolling="no"
				frameborder="no">
			</iframe>
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
		mounted() {
				let widget = document.getElementById('sc-widget')
				widget = SC.Widget(widget)
				widget.bind(SC.Widget.Events.READY, () => {
						widget.bind(SC.Widget.Events.FINISH, () => {
								widget.play() // replays the current track once finished
						});
				})
		}
}
</script>

<style lang="scss" scoped>
	.title {
		// margin-right: 4vw;
		h1 {
			margin-bottom: -2vw;
			text-shadow: -3px 3px 3px #000,
				3px 3px 3px #000,
				3px -3px 0 #000,
				-3px -3px 0 #000,
				-5px 5px 5px rgba(0,0,0,.5),
				5px 5px 5px rgba(0,0,0,.5),
				5px -5px 0 rgba(0,0,0,.5),
				-5px -5px 0 rgba(0,0,0,.5);
		}
		p { margin: 0 10vw; padding: 0; text-indent: 0; }
	}
	iframe {
		left: 0 !important;
		width: 40vh !important;
		height: 40vh !important;
		position: initial !important;
	}
</style>