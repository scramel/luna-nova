import { createApp } from 'vue'
import { createI18n } from 'vue-i18n/index'
import App from './App.vue'
import router from './router'
import messages from './i18n'

const i18n = createI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
  })

createApp(App).use(router).use(i18n).mount('#app')