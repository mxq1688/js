<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/my-page/newPerson">my-page</router-link> |
    <!-- <button @click="sendData">开始设计</button> -->
  </div>
  <router-view/>
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  padding: 30px;
  top: 100px;
  left: 100px;
  z-index: 10000;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
