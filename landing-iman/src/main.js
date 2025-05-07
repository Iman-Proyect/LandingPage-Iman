import '../main.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import router from "../router/index.js";
import {Button, Card} from "primevue";


const app = createApp(App)

app
    .use(PrimeVue, { ripple: true, theme: { preset: Aura }})
    .component('pv-button', Button)
    .component('pv-card', Card)
    .use(router)
    .mount('#app')


