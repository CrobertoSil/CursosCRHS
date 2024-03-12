import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const API = "https://api.github.com/users/"

async function doSearch(params) {
    const response = await fetch(API + 'juanwmedia')
    console.log(response);
}


createApp(App).mount('#app')


