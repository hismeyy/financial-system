import { createApp } from 'vue'
import App from './App.vue'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import router from "@/router/router-nav"

createApp(App).use(Layui).use(router).mount('#app')
