import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { formatCurrency } from './common/directives/format'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

app.directive('balance', formatCurrency)
