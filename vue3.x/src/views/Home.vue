<template>
  <div class="home">
    <div>
      基座应用主页
    </div>
    <div style="display:flex;flex-flow:column nowrap">
      <router-link to="/study">vue3 study</router-link>

      <!-- micro-app -->
      <router-link to="/my-page/">进入子应用</router-link>
      <router-link to="/my-page/myPerson">进入子应用 myPerson</router-link>
      <router-link to="/my-page/myPlan">进入子应用 myPlan</router-link>
      <!-- 未加载子应用时控制跳转到对应页面 -->
      <a @click="jump('/myPerson')" data-v-fae5bece="">myPerson</a>
      <a @click="jump('/myPlan')" data-v-fae5bece="">myPlan</a>

      <!-- 对micro-app封装用法 -->
      <router-link to="/microApp/myPerson">进入子应用 myPerson</router-link>
      <router-link to="/microApp/myPlan">进入子应用 myPlan</router-link>

      <!-- 乾坤 -->
      <router-link to="/qiankun/yuan365/">qiankun 进入子应用</router-link>
      <router-link to="/qiankun/yuan365/myPerson">qiankun myPerson</router-link>
      <router-link to="/qiankun/yuan365/myPlan">qiankun myPlan</router-link>
      <a @click="jump2('/qiankun/yuan365/myPerson')" data-v-fae5bece="">myPerson</a>
      <a @click="jump2('/qiankun/yuan365/myPlan')" data-v-fae5bece="">myPlan</a>

      <router-link to="/loadMicroApp/myPlan">qiankun loadMicroApp myPlan</router-link>

      <!-- wujie -->
      <router-link to="/wujie/">wujie 进入子应用</router-link>
      <div @click="pushmyPerson">wujie myPerson</div>
      <a @click="jump3('/wujie/')" data-v-fae5bece="">wujie 进入子应用</a>

      <router-link to="/wujie2/">wujie2 进入子应用</router-link>
      <a @click="jump3('/wujie2/')" data-v-fae5bece="">wujie2 进入子应用</a>

    </div>
    <div class="child">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import microApp from '@micro-zoe/micro-app'
@Options({
  components: {
  },
  computed:{
  },
  mounted(){
  },
  methods:{
    jump(path:any){
      window.history.pushState(history.state, '', '#/my-page'+path)
      window.dispatchEvent(new PopStateEvent('popstate', { state: history.state }))
    },
    jump2(path:any){
      window.history.pushState(history.state, '', '#'+path)
      window.dispatchEvent(new PopStateEvent('popstate', { state: history.state }))
    },
    jump3(path:any){
      window.history.pushState(history.state, '', path)
      window.dispatchEvent(new PopStateEvent('popstate', { state: history.state }))
    },
    pushmyPerson(){
      let path = ''
      /*主history 子history*/
      // path = `/wujie?yuan365-A=/myPerson`
      // this.$router.push(path)

      /*主history 子hash*/
      // path = `/wujie?yuan365-A=${window.encodeURIComponent('/#/myPerson')}`
      // this.$router.push(path)

      /*主hash 子hash*/
      // const url = new URL(window.location.href);
      // url.search = `?yuan365-A=${window.encodeURIComponent("/#/myPerson")}`
      // // 手动的挂载url查询参数
      // window.history.replaceState(null, "", url.href +'wujie');
         
      /*主hash 子history*/
      const url = new URL(window.location.href);
      url.search = `?yuan365-A=/myPerson`
      // 手动的挂载url查询参数
      window.history.replaceState(null, "", url.href +'wujie');
         
    }
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.child{
  height: calc( 100vh - 100px );
  border: 1px solid red;
  overflow: auto;
}
</style>
