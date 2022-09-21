<template>
    <!-- <h1>子应用</h1> -->
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <div class='my-page'>
      <div style="position: fixed;z-index:10000;top:100px">
        <router-link to="/about">about</router-link>
        <div @click="jump">
          跳转测试
        </div>
      </div>
      <micro-app
        @mounted="loadEnd"
        name="app1"
        url="http://117.50.60.12/"
        baseroute="/my-page"
        @datachange='handleDataChange'
      ></micro-app>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import microApp from '@micro-zoe/micro-app'
import { removeDomScope } from '@micro-zoe/micro-app'
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
    this.sendData()
    
    window.addEventListener("pushState", function(e){
      console.log("pushState触发", e);
    });
    window.addEventListener("popstate", function(e){
      console.log("popstate触发", e);
    });
  },
  methods: {
    jump(){
      microApp.setData('app1', {
        type: 'delPerson',
        id: '123'
      })

      // history.back();
      // microApp.setData('app1', {
      //   type: 'push',
      //   path: '/myPlan'
      // })
      console.log(history.state, 1111111);
      window.history.pushState(history.state, '', '/my-page/myplan')
      console.log(history.state, 2222222, new PopStateEvent('popstate', { state: history.state }));
      // window.dispatchEvent(new PopStateEvent('popstate', { state: history.state }))
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
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIiLCJpc3MiOiJ1c2VyIiwiZXhwIjoxNjY1Nzc2MzI3LCJ1c2VySWQiOiIxYzVmMmNiYzk5N2Q0MzJiOWRlOTkzNGRjMTk0NzBhMSIsInNvdXJjZXNObyI6NCwiaWF0IjoxNjYzMjI3NTI3LCJjaGFubmVsSWQiOiIxMDA2IiwiZW1haWwiOiIyMDIyMDcxMjEwMTY0MzAwMjk5QDEzOS5jb20iLCJqdGkiOiIxNTcwMzE2MTc5ODc1MDQxMjgxIn0.5Iyh2PcCJXcR8c6qrMQ1_OGXTpSwwsI0ENW6jJTaaXY'
      })
                
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
