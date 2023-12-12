<template>
  <div>
    <div class="" v-html="html"></div>
  </div>
</template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  data() {
    return {
      html: ''
    }
  },
  components: {},
  mounted() {
    this.xxx()
    // this.$nextTick(() => {
    //   var script = document.createElement('script')
    //   script.type = 'text/javascript'
    //   script.src = 'http://10.1.203.36:8088/client'
    //   document.body.appendChild(script)
    // })
  },
  methods: {
    async xxx() {
      const res = await this.$api.userInfo.xxx({})
      this.html = res.html
      this.$nextTick(() => {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = res.js
        document.body.appendChild(script)
      })
    }
  }
})
export default class index extends Vue {}
</script>
  
<style lang="scss" scoped>
</style>
