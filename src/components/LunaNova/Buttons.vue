<template>
  <div class="luna-nova-buttons">
      <button :disabled="disabled" @click="$emit('home')" v-if="isTitle">☽︎</button>
      <button :disabled="disabled" @click="$emit('prev')" v-else>▲</button>
      <div/>
      <button :disabled="disabled" @click="$emit('home')" v-if="isEnd">☽︎</button>
      <button :disabled="disabled" @click="$emit('next')" v-else>▼</button>
  </div>
</template>

<script>
export default {
    props: {
        isTitle: Boolean,
        isEnd: Boolean,
        disabled: Boolean
    }
}
</script>

<style lang="scss" scoped>
    .luna-nova-buttons {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 0;
        z-index: 1;
        width: 100%;
        button {
            margin: 0 auto;
            border-radius: 100%;
            height: 2.5vw;
            width: 2.5vw;
            background: transparent;
            color: white;
            border-color: white;
            box-shadow: 2px 2px 4px black;
            transition: .2s;
            font-size: 1vw;
            cursor: pointer;
            &:disabled {
                pointer-events: none;
            }
            &:hover {
                transform: scale(1.1);
            }
        }
        div {
            margin: 19vw 0;
        }
    }
</style>