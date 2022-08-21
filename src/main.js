import { createApp, inject  } from 'vue'
import App from './App.vue'
import router from './router'
import config from '../config'


import './assets/main.css'

const app = createApp(App)

app.use(router)

inject("config",config)

console.log(inject);
console.log(app);

app.mount('#app')
