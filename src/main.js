import { createApp } from 'vue'
import App from './App.vue'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import router from "@/router/router-nav"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(Layui).use(ElementPlus).use(router).mount('#app')
