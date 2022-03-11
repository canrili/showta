import 'uno.css'
import type { App } from 'vue'

import StIcon from './StIcon.vue'

StIcon.install = (app: App) => {
  app.component('st-icon', StIcon)
}

export default StIcon
