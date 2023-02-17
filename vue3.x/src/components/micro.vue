<template>
      <micro-app
        @mounted="loadEnd"
        :name="appName"
        :url="url"
        :baseroute="baseroute"
        :data="data"
        @datachange='handleDataChange'
        :shadowDOM='false' 
      ></micro-app>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import microApp from '@micro-zoe/micro-app'
import { removeDomScope } from '@micro-zoe/micro-app'
const w:any = window
@Options({
  name: 'help',
  components: {},
  props:{
    appName:{
      type: String,
      default: 'app',
    },
    url:{
      type: String,
      default: '',
    },
    token:{
      type: String,
      default: '',
    },
    baseroute:{
      type: String,
      default: '',
    },
    toPath:{
      type: String,
      default: '',
    },
    data:{
      type: Object,
      default: {},
    }
  }, 
  data() {
    return {

    }
  },
  mounted(){
    this.sendData()
  },
  watch:{
    token:{
      handler(){
        this.sendData()
      },
      immediate: true
    },
    toPath:{
      handler() {
        if(this.toPath){         
          console.log(123, this.toPath)
          // 主应用路由直接跳转 主应用vue-cli可以，vite不行
            this.$router.push(this.toPath)
  
          // 主应用发送数据，子应用判断跳转
          // microApp.setData(this.appName, {
          //   type:'push',
          //   path: this.toPath
          // })
        }
      },
      immediate: true
    }
  },
  methods: {
    handleDataChange(data:any){
      this.$emit('handleDataChange', data)
    },
    loadEnd(){
      this.$emit('loadEnd')
    },
    sendData(){
      microApp.setData(this.appName, {
        token: this.token
      }) 
    }
  }
})
export default class Help extends Vue {}
</script>

<style lang="scss" scoped>
    
</style>
