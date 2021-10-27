<template>
  <div class="luna-nova"  @wheel="handlePage($event.deltaY >= 0)"   >
    <img class="bgimg" alt="Home image" src="@/assets/img/bg-luna-1.jpg">
    <!-- <component :is='component'/> -->
    <Title v-show="currentPage==-1" class="luna-nova-paragraph" :class="pageTurn"/>
    <Paragraphs v-if="currentPage>-1" class="luna-nova-paragraph" :class="pageTurn" :paragraphs="book[currentChapter][currentPage]"/>
    <Controls 
        @next="handlePage(true)"
        @prev="handlePage(false)"
        @home="$router.push('/')"
        @goTo="handlePage($event > currentPage, $event)"
        :is-title="currentPage==-1"
        :is-end="currentPage==book[currentChapter].length-1"
        :disabled="invisible"
        :pages="book[currentChapter].length+1"
        :currentPage="currentPage"/>
  </div>
</template>

<script>
import Controls from '@/components/LunaNova/Controls.vue'
import Paragraphs from '@/components/LunaNova/Paragraphs.vue'
import Title from '@/components/LunaNova/Title.vue'
export default {
    components: { Controls, Paragraphs, Title },
    data() {
        return {
            invisible: false, // toggles the enter/leave css classes
            direction: false, // if 'true' moves text up. if 'false' moves text down.
            currentPage: -1,
            currentChapter: 0,
            book: [[[
                `<p>${ this.$t('lunanova.ch1.1') }.</p>`,
                `<p>${ this.$t('lunanova.ch1.2') }.</p>`,
                `<p>${ this.$t('lunanova.ch1.3') }.</p>`,
            ], [
                `<p>${ this.$t('lunanova.ch1.4') }.</p>`,
                `<p><i>«${ this.$t('lunanova.ch1.5') }.»</i>, <i>«${ this.$t('lunanova.ch1.6') }.»</i>, <i>«${ this.$t('lunanova.ch1.7') }.»</i>, <i>«${ this.$t('lunanova.ch1.8') }.»</i>.</p>`
            ], [
                `<p>${ this.$t('lunanova.ch1.9') }.</p>`,
                `<p>${ this.$t('lunanova.ch1.10') }.</p>`,
            ], [
                `<p>${ this.$t('lunanova.ch1.11') }.</p>`,
                `<p>${ this.$t('lunanova.ch1.12') }.</p>`,
            ], [
                `<p>${ this.$t('lunanova.ch1.13') }.</p>`,
                `<p>${ this.$t('lunanova.ch1.14') }.</p>`,
                `<p>${ this.$t('lunanova.ch1.15') }.</p>`,
            ]]]
        }
    },
    methods: {
        handlePage(boo, page) {
            if (page === this.currentPage || this.invisible || (boo && this.currentPage == this.book[this.currentChapter].length-1) || (!boo && this.currentPage == -1)) return
            this.direction = boo
            this.invisible = true
            setTimeout(() => {
                if (page) this.currentPage = page
                else boo ? this.currentPage++ : this.currentPage--
                this.invisible = false
            }, 500)
        }
    },
    computed: {
        pageTurn() {
            return this.invisible ? `luna-nova-paragraph-leave-${this.direction}` : `luna-nova-paragraph-enter-${this.direction}`
        }
    },
	mounted() {
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
        &-paragraph {
            transition: .2s ease;
            z-index: 1;
            p {
                font-size: max(2vw, 20px);
                text-indent: 5vw;
                text-align: justify;
                margin: 5vw 10vw;
                text-shadow: -2px 2px 2px #000,
                    2px 2px 2px #000,
                    2px -2px 0 #000,
                    -2px -2px 0 #000,
                    -3px 3px 3px rgba(0,0,0,.5),
                    3px 3px 3px rgba(0,0,0,.5),
                    3px -3px 0 rgba(0,0,0,.5),
                    -3px -3px 0 rgba(0,0,0,.5);
            }
            h1 {
                font-family: ClickerScript;
                font-weight: normal;
                font-size: 10vw;
                text-align: center;
            }
            img {
                display: flex;
                max-height: 50vh;
                margin: auto;
            }
            &-enter-true { animation: luna-nova-slidein-next .4s forwards ease-out; }
            &-leave-true { animation: luna-nova-slideout-next .4s forwards ease-in; }
            &-enter-false { animation: luna-nova-slidein-prev .4s forwards ease-out; }
            &-leave-false { animation: luna-nova-slideout-prev .4s forwards ease-in; }
        }
    }
</style>