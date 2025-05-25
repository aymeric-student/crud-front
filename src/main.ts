import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import router from '@/router'
import { i18n } from '@/i18n'

const app = createApp(App)
app.use(createPinia())
app.use(createHead()) // 👈 ici
app.use(i18n)
app.use(router)
app.mount('#app')
