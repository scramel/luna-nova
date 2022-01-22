<template>
  <div class="home">
    <link rel="prefetch" :href="require('@/assets/img/bg-luna-1.jpg')">
    <link rel="prefetch" :href="require(`@/assets/img/arrow-1-${locale}.png`)">
    <link rel="prefetch" :href="require(`@/assets/img/arrow-2-${locale}.png`)">
    <link rel="prefetch" :href="require(`@/assets/img/arrow-3-${locale}.png`)">
    <div class="chapters f-col">
      <h1>Luna Nova</h1>
      <router-link to="/story?act=0">{{ $t('act0') }}</router-link>
      <router-link v-for="item in 4" :key="item" :to="checkProgress(item) ? `/story?act=${item}` : '/'" :class="checkProgress(item) ? '' : 'unavailable'">{{ $t(`act${item}`) }}</router-link>
      <br>
      <router-link :to="$cookies.get('choice') ? '/extras' : ''" :class="$cookies.get('choice') ? '' : 'unavailable'" >{{ $t('extras') }}</router-link>
      <router-link to="" @click="toggleLocale">{{ $t('language') }}</router-link>
      <router-link to="/credits">{{ $t('credits') }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locale: this.$i18n.locale || 'en'
    }
  },
  methods: {
    toggleLocale() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'es' : 'en'
      this.$cookies.set('locale', this.$i18n.locale)
      this.locale = this.$cookies.get('locale')
    },
    checkProgress(int) {
      return parseInt(this.$cookies.get('progress')) >= int
    }
  }
}
</script>