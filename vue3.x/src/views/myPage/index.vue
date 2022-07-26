<template>
    <!-- <h1>子应用</h1> -->
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <div class='my-page'>
      <micro-app
        name="app1"
        url="http://117.50.60.12/"
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
  watch: {
  },
  mounted(){
    this.sendData()
  },
  methods: {
    sendData(){
      // this.dataForChild.isOpenPerson = true
      // 发送数据给子应用 my-app，setData第二个参数只接受对象类型
      console.log({isOpenPerson: this.dataForChild.isOpenPerson, showUser: false})
      microApp.setData('app1', {
        isOpenPerson: this.dataForChild.isOpenPerson,
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIiLCJwaG9uZSI6IjE4NyoqKio2MTY4IiwiaXNzIjoidXNlciIsImV4cCI6MTY2MDMxMjk4NiwidXNlcklkIjoiOWNiOWU5M2ZmMDk1NGEyYWI4NjUxMGJhNWY0OWIwNTMiLCJzb3VyY2VzTm8iOjEsImlhdCI6MTY1Nzc2NDE4NiwiY2hhbm5lbElkIjoiMTAwMSIsImp0aSI6IjE1NDc0MDEyNzA3NTM1MzM5NTMifQ.4BP9Nt-5lM5qi3bh7_86s_oVJgd-teiWKD7KanrMqvo'})
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
  }
}
    
</style>
