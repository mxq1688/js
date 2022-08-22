<template>
    <!-- <h1>子应用</h1> -->
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <div class='my-page'>
      <micro-app
        @mounted="loadEnd"
        name="app1"
        url="http://localhost:8080/"
        baseroute="/my-page"
      ></micro-app>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import microApp from '@micro-zoe/micro-app'
@Options({
  name: 'help',
  components: {},
  props: {},
  data() {
    return {
      dataForChild:{
        token: '',
        isOpenPerson: false,
      }
    }
  },
  mounted(){
    this.sendData()
    
    // window.history.pushState = ()=>{
    //   console.log('change');
      
    // }
    window.addEventListener("pushState", function(e){
      console.log("pushState触发", e);
    });
  },
  methods: {
    loadEnd(){
      console.log('加载完成');
      
    },
    sendData(){
      // this.dataForChild.isOpenPerson = true
      // 发送数据给子应用 my-app，setData第二个参数只接受对象类型
      console.log({isOpenPerson: this.dataForChild.isOpenPerson, showUser: false})
      microApp.setData('app1', {
        isOpenPerson: this.dataForChild.isOpenPerson,
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIiLCJwaG9uZSI6IjE4NyoqKio2MTY4IiwiaXNzIjoidXNlciIsImV4cCI6MTY2Mjc1MjM5MiwidXNlcklkIjoiOWNiOWU5M2ZmMDk1NGEyYWI4NjUxMGJhNWY0OWIwNTMiLCJzb3VyY2VzTm8iOjEsImlhdCI6MTY2MDIwMzU5MiwiY2hhbm5lbElkIjoiMTAwMSIsImp0aSI6IjE1NTc2MzI4NzgxMDIxODgwMzMifQ.XETrxhWf-MLYuTSqMGdGrZZ9HVfySETaQpy1bmGNlp8'})
                
    }
  }
})
export default class Help extends Vue {}
</script>

<style lang="scss" scoped>
.my-page{
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
}
    
</style>
