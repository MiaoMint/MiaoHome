import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import packageConfig from '../package.json'

console.log(' %c MiaoHome %c ' + packageConfig.version + ' %c https://github.com/MiaoMint/MiaoHome',
    'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#ff9a9a ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:unset ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff')

import './assets/main.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
