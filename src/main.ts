import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { formatCurrency } from './common/directives/format'

import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass'
import './styles/quasar.scss'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
    config: {
        dark: true
    },
    plugins: {} // import Quasar plugins and add here
})

app.use(createPinia())
app.directive('balance', formatCurrency)

app.mount('#app')
