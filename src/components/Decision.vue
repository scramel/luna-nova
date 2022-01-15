<template>
    <div class="decision">
        <p>{{ $t('choice.1') }}</p>
        <button :disabled="choice" @click="($emit('choice', 1))">{{ $t('choice.2') }}</button>
        <br>
        <button :disabled="choice" @click="($emit('choice', 2))">{{ $t('choice.3') }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            choice: this.$cookies.get('choice')
        }
    }
}
</script>

<style lang="scss" scoped>
    .decision {
        p { margin-bottom: 5vw !important; }
        button {
            cursor: pointer;
            color: white;
            font-family: Spectral-Regular;
            font-size: max(1.8vw, 20px);
            text-align: center;
            margin-bottom: 5vw;
            background: transparent;
            border: rgba(255, 255, 255, 0.6) solid 1px;
            padding: .5vw 3vw;
            border-radius: 100px;
            transition: .2s;
            max-width: 70vw;
            text-shadow: -2px 2px 2px #000,
              2px 2px 2px #000,
              2px -2px 0 #000,
              -2px -2px 0 #000,
              -3px 3px 3px rgba(0,0,0,.5),
              3px 3px 3px rgba(0,0,0,.5),
              3px -3px 0 rgba(0,0,0,.5),
              -3px -3px 0 rgba(0,0,0,.5);
            &:hover { transform: scale(1.05); }
            &:active { transform: scale(1); }
            &:disabled {
                transform: scale(1);
                cursor: not-allowed;
                opacity: .5;
            }
        }
    }
</style>