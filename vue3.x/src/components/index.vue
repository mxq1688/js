<template>
      <micro-app
        @mounted="loadEnd"
        name="diyFace"
        url="http://localhost:8080/"
        :baseroute="baseroute"
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
  props: ['token','baseroute', 'jumpPath'],
  data() {
    return {

    }
  },
  mounted(){
    this.sendData()
  },
  watch:{
    token(){
      this.sendData()
    }
    jumpPath(){
      this.$router.push(this.baseroute+'/'+this.jumpPath)
    }
  },
  methods: {
    handleDataChange(data:any){

    },
    loadEnd(){
      
    },
    sendData(){
      // 发送数据给子应用 my-app，setData第二个参数只接受对象类型
      microApp.setData('app1', {
        token: this.token
      })
                
    }
  }
})
export default class Help extends Vue {}
</script>

<style lang="scss" scoped>
.my-page{
  // position: relative;
  :deep(micro-app[name=app1]){
    .download_container .download_box .content .right h3{
      font-size: 12px!important;
      color: red!important;
    }
    .el-overlay .el-dialog .el-dialog__header .el-dialog__title{
       color: red!important;
    }
    .el-loading-mask.is-fullscreen{
      display: none;
    }
  }
  :deep( .blue){
    color: red!important;
  }
}
    
</style>
