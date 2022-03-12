import { createApp } from 'vue'
import App from '~/App.vue'
import { MotionPlugin } from '@vueuse/motion'
import 'uno.css'
import '~/style/showta.scss'

createApp(App).use(MotionPlugin).mount('#app')
