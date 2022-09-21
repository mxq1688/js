// element-plus.ts
import type { App } from 'vue'

import {
  ElButton,
  ElSelect,
} from 'element-plus'

const components = [
  ElButton,
  ElSelect,
]

const option = {
  size: 'medium',
}

export default function introduceElement(app: App): void {
  components.forEach((component) => {
    app.use(component)
  })
  app.config.globalProperties.$ELEMENT = option
}