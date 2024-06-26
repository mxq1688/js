import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // isCustomElement: (tag: string) => tag.includes('-')
          isCustomElement: (tag) => tag.includes('-ce')
        }
      }
    }), 
    vueJsx()],
  build: {
    target: 'esnext',
    minify: 'terser',
    lib: {
      entry: 'src/CustomElement/index',
      formats: ['es', 'cjs', 'iife'],
      name: 'CustomElement'
    }
  }
})
