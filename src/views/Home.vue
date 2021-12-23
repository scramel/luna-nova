<template>
  <div class="home">
    <div class="chapters f-col">
      <h1>Luna Nova</h1>
      <!-- <router-link to="/story?act=1">Continuar</router-link> -->
      <router-link to="/story?act=0" class="available">{{ $t('act0') }}</router-link>
      <router-link to="">{{ $t('act1') }}</router-link>
      <router-link to="">{{ $t('act2') }}</router-link>
      <router-link to="">{{ $t('act3') }}</router-link>
      <router-link to="">{{ $t('act4') }}</router-link>
      <br>
      <router-link to="">{{ $t('extras') }}</router-link>
      <router-link to="" class="available" @click="toggleLocale">{{ $t('language') }}</router-link>
      <router-link to="" class="">{{ $t('credits') }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLocale() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'es' : 'en'
      this.$cookies.set('locale', this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    .chapters {
      transition: .2s;
      margin: auto;
      a {
        filter: brightness(.5);
        text-decoration: none;
        transition: .2s;
        cursor: not-allowed;
        &:hover {
          transform: scale(1.1);
        }
        &:active {
          transform: scale(1);
        }
        &.available {
          cursor: pointer;
          filter: brightness(1)
        }
      }
    }
  }
</style>