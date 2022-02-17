import { defineCustomElement, ref, h } from 'vue'
const MyVueElement = defineCustomElement({
    setup () {
      const count = ref(0)
      return () => h('div', {
        onClick: () => count.value++
      }, `点击${count.value}`)
    }
  })
  
  customElements.define('my-vue-element', MyVueElement)