<template>
  <div class="home">
    <div>
      基座应用主页
    </div>
    <div style="display:flex;flex-flow:column nowrap">
      <router-link to="/study">vue3 study</router-link>
      <router-link to="/my-page/">进入子应用</router-link>
      <router-link to="/my-page/#/myPerson">进入子应用 myPerson</router-link>
      <router-link to="/my-page/#/myPlan">进入子应用 myPlan</router-link>
      <!-- 未加载子应用时控制跳转到对应页面 -->
      <a @click="jump('/myPerson')" data-v-fae5bece="">myPerson</a>
      <a @click="jump('/myPlan')" data-v-fae5bece="">myPlan</a>

      <router-link to="/mxq/qiankun/yuan365/myPlan">qiankun myPlan</router-link>

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
  methods:{
    jump(path:any){
      window.history.pushState(history.state, '', '/my-page/#'+path)
      window.dispatchEvent(new PopStateEvent('popstate', { state: history.state }))
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
