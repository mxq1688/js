<template>
  <div id="app">
    <div>
      <!--<router-link :to="..." replace>-->
      <button><router-link to="/compon">组件学习 </router-link></button>
      <button><router-link to="/dynamicc">动态组件 </router-link></button>
      <button><router-link to="/slot">组件插槽 </router-link></button>
      <button><router-link to="/">Hello </router-link></button>
      <button><router-link to="/Hi/11">Hi </router-link></button>
      <button><router-link to="/HiAlias/11">HiAlias </router-link></button>

      <button><router-link :to="{name: 'Hi1', params: {username: 'mxq',id:'218'}}">Hi1命名路由</router-link><!--命名路由 // 如果提供了 path，params 会被忽略--></button>
      <button><router-link to="/Hi1/218">Hi1</router-link></button>

      <button><router-link to="/Hi2/123">Hi2 </router-link></button>
      <button><router-link to="/gohome">gohome </router-link></button>




      <button @click="mem">编程式导航</button>
      <button><router-link to="/fawoej">404 </router-link></button>

      <button><router-link to="/count">count计数器 </router-link></button>
      <button><router-link to="/eventbus">EventBus </router-link></button>
      <button><router-link to="/customInstruction">自定义指令 </router-link></button>
      <button><router-link to="/plugs">插件 </router-link></button>
      <button><router-link to="/render">render&jsx </router-link></button>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <router-view name="left" style="float: left;background: red;"/>
    <router-view name="right" style="float:right;background: blue;"/>
  </div>
</template>

<script>

export default {
  name: 'app',
    methods: {
      mem(){
          //字符串
          // this.$router.push('/');
          //对象
          // this.$router.push({ path: '/' })
          // 命名路由
          // this.$router.push({name: 'hello'})
          // 带查询参数，变成 /?order=desc
          // 如果提供了 path，params 会被忽略
          this.$router.push({name: 'hello', query:{order: 'desc'}, params:{id: 123}})
      }

    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .fade-enter{
    opacity: 0;
    margin-top: 100px;
  }
  .fade-leave{
    opacity: 1;
    margin-top: 0px;
  }
  .fade-enter-active{
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
  }
  /*.fade-leave-active{*/
    /*-webkit-transition: all 1s;*/
    /*-moz-transition: all 1s;*/
    /*-ms-transition: all 1s;*/
    /*-o-transition: all 1s;*/
    /*transition: all 1s;*/
  /*}*/
</style>
