<template>
  <div class="luna-nova-paragraph">
      <div v-for="(paragraph, index) in paragraphs" :key="index" v-html="paragraph"/>
  </div>
</template>

<script>
export default {
    props: {
        paragraphs: Array
    }
}
</script>