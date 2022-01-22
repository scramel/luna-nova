<template>
  <div class="home">
    <link rel="prefetch" :href="require('@/assets/img/bg-luna-1.jpg')">
    <link rel="prefetch" :href="require(`@/assets/img/arrow-1-${locale}.png`)">
    <link rel="prefetch" :href="require(`@/assets/img/arrow-2-${locale}.png`)">
    <link rel="prefetch" :href="require(`@/assets/img/arrow-3-${locale}.png`)">
    <div class="chapters f-col">
      <h1>Luna Nova</h1>
      <router-link to="/story?act=0">{{ $t('act0') }}</router-link>
      <router-link to="/story?act=1">{{ $t('act1') }}</router-link>
      <router-link to="/story?act=2">{{ $t('act2') }}</router-link>
      <router-link to="/story?act=3">{{ $t('act3') }}</router-link>
      <router-link to="/story?act=4">{{ $t('act4') }}</router-link>
      <br>
      <router-link to="/extras">{{ $t('extras') }}</router-link>
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
    }
  }
}
</script>