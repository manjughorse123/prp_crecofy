import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Dropdown from 'primevue/dropdown'
import Slider from 'primevue/slider'
import Dialog from 'primevue/dialog'
import Checkbox from 'primevue/checkbox'
import Password from 'primevue/password'
import Sidebar from 'primevue/sidebar'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import 'primeflex/primeflex.css'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'

import Breadcrumb from 'primevue/breadcrumb'
import InputText from 'primevue/inputtext'
import TabMenu from 'primevue/tabmenu'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.use(store)
app.component('Sidebar', Sidebar)
app.component('Button', Button)
app.component('Card', Card)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Breadcrumb', Breadcrumb)
app.component('InputText', InputText)
app.component('TabMenu', TabMenu)
app.component('Dropdown', Dropdown)
app.component('Slider', Slider)
app.component('Dialog', Dialog)
app.component('Checkbox', Checkbox)
app.component('Password', Password)
app.mount('#app')
