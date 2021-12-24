<template>
  <div class="luna-nova"  @wheel="handlePage($event.deltaY >= 0)">
    <img class="bgimg" alt="Home image" src="@/assets/img/bg-luna-1.jpg">
    <!-- <component :is='component'/> -->
    <Title v-show="currentPage==-1" class="luna-nova-paragraph" :class="pageTurn" :pause="pause" :currentAct="currentAct"/>
    <Pages v-if="currentPage>-1" class="luna-nova-paragraph" :class="pageTurn" :paragraphs="book[currentAct][currentPage]"/>
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
        :currentPage="currentPage"/>
  </div>
</template>

<script>
import Controls from '@/components/Controls.vue'
import Pages from '@/components/Pages.vue'
import Title from '@/components/Title.vue'
import text from '@/components/text.js'
export default {
    components: { Controls, Pages, Title },
    data() {
        return {
            invisible: false, // toggles the enter/leave css classes
            direction: false, // if 'true' moves text up. if 'false' moves text down.
            pause: 0, // pauses music
            currentAct: this.isInvalidAct() ? 0 : parseInt(this.$route.query.act),
            currentPage: -1,
            book: text(this)
        }
    },
    methods: {
        handlePage(boo, page) {
            if (page === this.currentPage || this.invisible || (!boo && this.currentPage == -1)) return
            let end = (boo && this.currentPage == this.book[this.currentAct].length-1)
            if (end) this.pause += 1
            this.direction = boo
            this.invisible = true
            setTimeout(() => {
                if (page || page===0) this.currentPage = page
                else boo ? this.currentPage++ : this.currentPage--
                // Move to next act if it was the end of the current act
                if (end) {
                    // Go back to menu if the end of text was reached
                    return this.$router.push(`/`)
                    // eslint-disable-next-line
                    if (parseInt(this.$route.query.act) === this.book.length-1) return this.$router.push(`/`)
                    // Else move to the next act
                    this.currentPage = -1
                    this.currentAct += 1
                    this.$router.push(`/story?act=${this.currentAct}`)
                }
                this.invisible = false
            }, 500)
        },
        isInvalidAct() {
            let act = parseInt(this.$route.query.act)
            return isNaN(act) || 0 > act || act > 4
        }
    },
    computed: {
        pageTurn() {
            return this.invisible ? `luna-nova-paragraph-leave-${this.direction}` : `luna-nova-paragraph-enter-${this.direction}`
        }
    },
	mounted() {
        if (this.isInvalidAct()) this.$router.push(`/story?act=0`)
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

<style lang="scss">
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
        background-size: auto;
        background-position: top;
        background-repeat: repeat;
        background-image: url("../assets/img/bg-luna-1.jpg");
        &-paragraph {
            transition: .2s ease;
            z-index: 1;
            img {
                display: flex;
                max-height: 60vh;
                margin: auto;
            }
            &-enter-true { animation: luna-nova-slidein-next .4s forwards ease-out; }
            &-leave-true { animation: luna-nova-slideout-next .4s forwards ease-in; }
            &-enter-false { animation: luna-nova-slidein-prev .4s forwards ease-out; }
            &-leave-false { animation: luna-nova-slideout-prev .4s forwards ease-in; }
        }
    }
</style>