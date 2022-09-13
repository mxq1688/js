<template>
  <div class="home">
    <div>
      基座应用主页
    </div>
    <div style="display:flex;flex-flow:column nowrap">
      <router-link to="/about">about</router-link>
      <router-link to="/my-page/">进入子应用</router-link>
      <router-link to="/my-page/myPerson">进入子应用 myPerson</router-link>
      <router-link to="/my-page/myPlan">进入子应用 myPlan</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Home extends Vue {}
</script>
