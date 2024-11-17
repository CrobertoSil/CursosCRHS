import { createApp } from 'vue';
import App from './App.vue';
import { plugin, defaultConfig } from '@formkit/vue';
import config from '../formkit.config'

// Crear la aplicación Vue
const app = createApp(App);

// Configurar FormKit
app.use(plugin, defaultConfig(config));

// Montar la aplicación
app.mount('#app');
