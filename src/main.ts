import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
const pinia = createPinia()

import '@/assets/styles/main.scss'

createApp(App).use(router).use(pinia).mount('#app')
