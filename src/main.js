import { createApp } from 'vue'
import App from './App.vue'
import store from '@/vuex/store';
import router from '@/router/router';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/main.scss'

const app = createApp(App)

app.use(router)
app.use(store)


app.mount('#app')
