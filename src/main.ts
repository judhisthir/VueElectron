import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'


//primevue & tailwind
import Aura from '@primevue/themes/aura';
import theme from './assets/theme'
import { definePreset } from '@primevue/themes';
import PrimeVue  from "primevue/config";

const SiddsPreset = definePreset(Aura,theme);


const app = createApp(App);


//using api
app.use(PrimeVue, {
    theme: {
        preset: SiddsPreset,
    }
});



createApp(App).mount('#app')
