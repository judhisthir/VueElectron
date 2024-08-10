import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


//primevue & tailwind
import Aura from '@primevue/themes/aura';
import PrimeVue  from "primevue/config";

const app =createApp(App);


//using api
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});



createApp(App).mount('#app')
