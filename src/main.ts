import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 引入element-puls
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入element-icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



import App from './App.vue'
import router from './router'

const app = createApp(App)

import store from './store'

app.use(createPinia())
app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')

for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key, component)
}
