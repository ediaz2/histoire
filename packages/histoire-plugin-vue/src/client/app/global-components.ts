import { App } from 'vue'
import { registerVueComponents } from '@histoire/controls'
import Story from './Story.vue'
import Variant from './Variant.vue'

export function registerGlobalComponents (app: App) {
  // eslint-disable-next-line vue/multi-word-component-names
  app.component('Story', Story)
  // eslint-disable-next-line vue/multi-word-component-names
  app.component('Variant', Variant)

  registerVueComponents(app)
}
