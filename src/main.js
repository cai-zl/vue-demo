import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)
// element-plus
app.use(ElementPlus)
app.mount('#app')

app.config.errorHandler = (err) => {
    /* 处理错误 */
}

