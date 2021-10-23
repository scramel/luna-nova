<template>
  <div class="luna-nova">
    <img class="bgimg" alt="Home image" src="@/assets/img/bg-luna-1.jpg">
    <Buttons @next="handlePage(true)" @prev="handlePage(false)" @home="$router.push('/')" :is-title="page==0" :is-end="page==book.length-1" :disabled="invisible"/>
    <Paragraphs class="luna-nova-paragraph" :class="invisible ? `luna-nova-paragraph-leave-${direction}` : `luna-nova-paragraph-enter-${direction}`" :paragraphs="book[page]"/>
  </div>
</template>

<script>
import Buttons from '@/components/LunaNova/Buttons.vue'
import Paragraphs from '@/components/LunaNova/Paragraphs.vue'
export default {
    components: { Buttons, Paragraphs },
    data() {
        return {
            invisible: false, // toggles the enter/leave css classes
            direction: false, // if 'true' moves text up. if 'false' moves text down.
            page: 0,
            book: [[
                '<h1>Luna Nova</h1>'
            ],[
                '<p>Mis sueños son despertados por la oscuridad en vez de la luz.</p>',
                '<p>En tiempos pasados solía apreciar muchísimo el esplendor de la segunda; el destino, sin embargo, me obligó a convivir con la primera. Así, el calor de la mañana fue reemplazado por el frío del anochecer, y el saludo del sol fue suplantado por la visita tuya.</p>',
                '<p>Sí, al inicio fui dura contigo, pero pronto te volviste mi mejor amiga.</p>'
            ], [
                '<p>Eres mi única compañía dentro de cuatro paredes vacías, desde literal hasta espiritualmente, solamente exceptuados mi lecho, mi ser, y regularmente... mi madre, quien trae las comidas cada noche, medianoche y madrugada.</p>',
                '<p>Mamá toca la puerta siempre antes de entrar a pesar de comprender que yo nunca respondería, y una vez dentro, me dice sin falta palabras dulces</p>',
                '<p><i>«Toma el tiempo que necesites»</i>, <i>«No olvides hacer tus tareas. Descansarás más si terminas pronto.»</i>, <i>«Estaré para ti toda mi vida si es necesario»</i>, <i>«Te amo»</i>.</p>'
            ], [
                `<img alt="A test" src="${require('@/assets/img/logo.png')}">`
            ]]
        }
    },
    methods: {
        handlePage(boo) {
            this.direction = boo
            this.invisible = true
            setTimeout(() => {
                boo ? this.page++ : this.page--
                this.invisible = false
            }, 500)
        },
        handleScroll(e) {
            console.log(e)
        }
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