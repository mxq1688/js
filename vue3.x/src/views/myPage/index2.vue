<template>
  <div>
    <div @click="toPath='/microApp/myPlan'">to myPlan</div>
    <div @click="toPath='/microApp/myPerson'">to myPerson</div>
  </div>
  <MicroCom
    @handleDataChange="handleDataChange"
    @loadEnd="loadEnd"
    :appName="appName"
    :url="url"
    :baseroute="baseroute"
    :toPath="toPath"
    :token="token"
  />

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import microApp from '@micro-zoe/micro-app'
import { removeDomScope } from '@micro-zoe/micro-app'
import MicroCom from '@/components/micro.vue'
const w:any = window
@Options({
  name: 'help',
  components: {MicroCom},
  props: {},
  data() {
    return {
      appName: 'app',
      token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIiLCJwaG9uZSI6IjE4NyoqKio2MTY4IiwiaXNzIjoidXNlciIsImV4cCI6MTY3OTA3Njk2MCwidXNlcklkIjoiOWNiOWU5M2ZmMDk1NGEyYWI4NjUxMGJhNWY0OWIwNTMiLCJzb3VyY2VzTm8iOjEsImlhdCI6MTY3NjUyODE2MCwiY2hhbm5lbElkIjoiMTAwMSIsImp0aSI6IjE2MjYxMDMwNzk5MzE3NDQyNTcifQ.nrPnvWCZxNYwSLSYN4At42L8VFWbFL5JNdkpUf-puI0',
      url: 'http://localhost:8080/',
      baseroute: '#/microApp',
      toPath: ''
    }
  },
  mounted(){
 
  },
  methods: {
    handleDataChange(data:any){
      console.log(data, 111)
    },
    loadEnd(){
      console.log('加载完成');
      
    },
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
