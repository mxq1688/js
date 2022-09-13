<template>
  <div class="app_container">
    <router-view />
  </div>
</template>

<style lang="scss"></style>


<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'App',
  props: {},
  data() {
    return {}
  },
  mounted() {
    this.oncontextmenu()
  },
  methods: {
    /**
     * 取消默认的浏览器自带右键
     */
    oncontextmenu () {
      window.oncontextmenu = (e) => {
        e.preventDefault()
      }
    }
  }
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
</style>