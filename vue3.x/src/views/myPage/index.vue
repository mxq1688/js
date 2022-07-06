<template>
  <div class="mypage">
    <!-- <h1>子应用</h1> -->
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <button style="position: fixed;top: 150px;left: 130px;z-index: 10000" @click="sendData">开始设计</button>
    <micro-app
      name="app1"
      url="http://10.1.196.2:8086/"
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
  methods: {
    sendData(){
      this.dataForChild.isOpenPerson = true
      // 发送数据给子应用 my-app，setData第二个参数只接受对象类型
      console.log({isOpenPerson: this.dataForChild.isOpenPerson})
      microApp.setData('app1', {isOpenPerson: this.dataForChild.isOpenPerson})
    }
  }
})
export default class Help extends Vue {}
</script>

<style lang="scss" scoped>
  .mypage{
    :deep(micro-app[name=app1]){
      .download_container .download_box .content .right h3{
        font-size: 12px!important;
      }
    }
    
  }
</style>
