import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import config from '../package.json'


import './assets/main.css'

const app = createApp(App)

app.use(router)


console.log(' %c version %c ' + config.version + ' %c https://github.com/MiaoMint/Navigation',
    'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:unset ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff')

app.mount('#app')
