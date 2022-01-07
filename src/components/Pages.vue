<template>
  <div class="luna-nova-paragraph">
      <div v-for="(paragraph, index) in paragraphs" :key="index" v-html="paragraph"/>
      <!-- yes this above is blasphemous, if I ever do another project I promise I'll remake this component religiously. -->
  </div>
</template>

<script>
export default {
    props: {
        paragraphs: Array
    }
}
</script>