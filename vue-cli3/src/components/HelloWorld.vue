<template>
  <div class="hello">
    <h1>HelloWorld{{ msg }}-{{$route.params.id}}</h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    // 组件内的守卫
  beforeRouteEnter(to, from, next){
      // next()
      // next(false);//中断当前导航
      // next('/');
      // next({path: '/'});
      //路由钩子里不能使用this, 用下面方法
      next((vm)=>{
          console.log(vm);
      });

  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
