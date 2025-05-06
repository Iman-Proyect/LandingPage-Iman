import '../main.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import router from "../router/index.js";
import './assets/tailwind.css';
import {Button} from "primevue";


const app = createApp(App)

app
    .use(PrimeVue, { ripple: true, theme: { preset: Aura }})
    .component('pv-button', Button)
    .use(router)
    .mount('#app')


