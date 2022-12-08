<template>
    <!-- <h1>子应用</h1> -->
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <div class='my-page'>
      <div @click="jump">
        跳转测试
      </div>
      <micro-app
        @mounted="loadEnd"
        name="diyFace"
        url="http://117.50.60.12/"
        baseroute="#/my-page"
        @datachange='handleDataChange'
        :shadowDOM='false'
      ></micro-app>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import microApp from '@micro-zoe/micro-app'
import { removeDomScope } from '@micro-zoe/micro-app'
const w:any = window
@Options({
  name: 'help',
  components: {},
  props: {},
  data() {
    return {
      dataForChild:{
        token: '',
      }
    }
  },
  mounted(){
    w.mem = '主'
    console.log('主 ', document, window, document.querySelector('head'));
    this.sendData()
    
    window.addEventListener("pushState", function(e){
      console.log("pushState触发", e);
      // 用于基座应用监听子应用路由变化，需要重写pushState方法
    });
    window.addEventListener("popstate", function(e){
      //监听历史记录点popstate，即浏览器前进返回时触发
      console.log("popstate触发", e);
    });
  },
  methods: {
    jump(){
      // microApp.setData('app1', {
      //   type: 'delPerson',
      //   id: '123'
      // })

      // history.back();
      // microApp.setData('app1', {
      //   type: 'push',
      //   path: '/myPlan'
      // })
      
      /*控制子路由跳转*/
      console.log(history.state, 1111111);
      window.history.pushState(history.state, '', '/my-page/myplan')
      console.log(history.state, 2222222, new PopStateEvent('popstate', { state: history.state }));
      window.dispatchEvent(new PopStateEvent('popstate', { state: history.state }))
    },
    handleDataChange(data:any){
      console.log(data, 111)
    },
    loadEnd(){
      console.log('加载完成');
      
    },
    sendData(){
      // 发送数据给子应用 my-app，setData第二个参数只接受对象类型
      microApp.setData('app1', {
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIiLCJwaG9uZSI6IjE4NyoqKio2MTY4IiwiaXNzIjoidXNlciIsImV4cCI6MTY3MTExNzE2MCwidXNlcklkIjoiOWNiOWU5M2ZmMDk1NGEyYWI4NjUxMGJhNWY0OWIwNTMiLCJzb3VyY2VzTm8iOjEsImlhdCI6MTY2ODU2ODM2MCwiY2hhbm5lbElkIjoiMTAwMSIsImp0aSI6IjE1OTI3MTcyNTc5NDE3MTY5OTMifQ.eg4Oj3YX8F7aOq9qstq8ETCinZLVc9yxkH1Xh8ITkbM'
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
