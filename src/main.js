import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import dayjs from 'dayjs'

//put here your local domain of server
let baseURL = "http://localhost:8000"

axios.defaults.baseURL = baseURL;

const app = createApp(App);
app.config.globalProperties.$dayjs = dayjs;
//save the global url for the server
app.config.globalProperties.baseURL = baseURL;

import routes from './routes';
import { createRouter, createWebHistory } from 'vue-router'

const rts = createRouter({
    history: createWebHistory('/'),
    routes
});

app.use(rts);
app.mount('#app');
