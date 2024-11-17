import { createApp } from 'vue';
import App from './App.vue';
import { plugin, defaultConfig } from '@formkit/vue';

// Crear la aplicación Vue
const app = createApp(App);

// Configurar FormKit
app.use(plugin, defaultConfig);

// Montar la aplicación
app.mount('#app');
