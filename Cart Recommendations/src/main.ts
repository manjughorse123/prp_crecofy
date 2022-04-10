import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue from './BootstrapVue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'

const app = createApp(App)
app.use(BootstrapVue)
app.use(router)
app.mount('#app')
