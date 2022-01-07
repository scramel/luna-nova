<template>
  <div class="luna-nova"  @wheel="handlePage($event.deltaY >= 0)">
      <!-- background image -->
    <img class="bgimg" :class="`bgimg-${currentAct}`" alt="Home image" src="@/assets/img/bg-luna-1.jpg">
    <!-- title of the act and soundcloud embed -->
    <Title v-show="currentPage==-1" class="luna-nova-paragraph" :class="pageTurn" :pause="pause" :currentAct="currentAct"/>
    <!-- all of the text -->
    <Pages v-if="currentPage>-1" class="luna-nova-paragraph" :class="pageTurn" :paragraphs="book[currentAct][currentPage]"/>
    <!-- decision near the end -->
    <Decision v-if="currentAct==4 && currentPage==11" @choice="handleChoice($event)" class="luna-nova-paragraph" :class="pageTurn"/>
    <!-- arrow buttons and page selector -->
    <Controls 
        @next="handlePage(true)"
        @prev="handlePage(false)"
        @home="pause += 1; $router.push('/')"
        @end="handlePage(true)"
        @goTo="handlePage($event > currentPage, $event)"
        :is-title="currentPage==-1"
        :is-end="currentPage==book[currentAct].length-1"
        :disabled="invisible"
        :pages="book[currentAct].length+1"
        :currentPage="currentPage"
        :currentAct="currentAct"/>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Pages from '@/components/Pages.vue'
import Decision from '@/components/Decision.vue'
import Controls from '@/components/Controls.vue'
import text from '@/components/text.js'
import ending from '@/components/ending.js'
export default {
    components: { Title, Pages, Decision, Controls },
    data() {
        return {
            invisible: false, // toggles the enter/leave css classes
            direction: false, // if 'true' moves text up. if 'false' moves text down.
            pause: 0, // pauses music
            currentAct: this.isInvalidAct() ? 0 : parseInt(this.$route.query.act),
            currentPage: -1,
            book: [...text(this)]
        }
    },
    methods: {
        handlePage(boo, page, choice=parseInt(this.$cookies.get('choice'))) { // this handles the logic behind clicking the up and down arrows
            if (page === this.currentPage || this.invisible || (!boo && this.currentPage == -1) || (this.currentAct==4 && this.currentPage == this.book[this.currentAct].length-1 && boo && !choice)) return
            let end = (boo && this.currentPage == this.book[this.currentAct].length-1)
            if (end) this.pause += 1 // pauses music
            this.direction = boo
            this.invisible = true
            setTimeout(() => {
                if (page || page===0) this.currentPage = page
                else boo ? this.currentPage++ : this.currentPage--
                // move to next act if it was the end of the current act
                if (end) {
                    // go back to menu if the end of text was reached
                    if (parseInt(this.$route.query.act) === 2) return this.$router.push(`/`)
                    // go back to menu if the end of story was reached
                    let act = parseInt(this.$route.query.act)
                    if (act===5 || (act===4 && choice===1)) return this.$router.push(`/credits`)
                    // else move to the next act
                    this.currentPage = -1
                    this.currentAct += 1
                    this.$router.replace(`/story?act=${this.currentAct}`)
                }
                this.invisible = false
            }, 500)
        },
        handleChoice(num) {
            this.$cookies.set('choice', num)
            if (num==2) return this.handlePage(true, false, true)
            this.concatEnding()
            this.handlePage(true)
        },
        concatEnding() {
            if (this.book[4].length === 12) this.book[4] = this.book[4].concat(ending(this))
        },
        isInvalidAct() { // url validation
            let act = parseInt(this.$route.query.act)
            return isNaN(act) || 0 > act || act > 5
        }
    },
    computed: {
        pageTurn() { // dynamic transition class name
            return this.invisible ? `luna-nova-paragraph-leave-${this.direction}` : `luna-nova-paragraph-enter-${this.direction}`
        }
    },
	mounted() { // checks if the url is valid
        if (this.isInvalidAct()) this.$router.replace(`/story?act=0`)
        // automatically sets up things if reader made a choice before
        if (parseInt(this.$cookies.get('choice'))===1) this.concatEnding()
        // allows usage of the keyboard arrows to advance
		document.addEventListener('keydown', e => {
			switch (e.key) {
				case "ArrowUp":
				case "ArrowLeft":
					this.handlePage(false)
					break;
				case "ArrowDown":
				case "ArrowRight":
					this.handlePage(true)
					break;
			}
		})
	}
}
</script>

<style lang="scss" scoped>
    @keyframes luna-nova-slidein-next {
        0% { transform: translateY(2vw); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes luna-nova-slideout-next {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-2vw); opacity: 0; }
    }
    @keyframes luna-nova-slidein-prev {
        0% { transform: translateY(-2vw); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes luna-nova-slideout-prev {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(2vw); opacity: 0; }
    }
    .luna-nova {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        &-paragraph {
            transition: .2s ease;
            z-index: 1;
            img {
                display: flex;
                max-height: 60vh;
                margin: auto;
            }
            // maybe could use just one animation and adjust the parameters with variables
            &-enter-true { animation: luna-nova-slidein-next .4s forwards ease-out; }
            &-leave-true { animation: luna-nova-slideout-next .4s forwards ease-in; }
            &-enter-false { animation: luna-nova-slidein-prev .4s forwards ease-out; }
            &-leave-false { animation: luna-nova-slideout-prev .4s forwards ease-in; }
        }
    }
</style>