import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import css here
// working with pre-processors => need to install the relevant packages
import './assets/styles/style.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
