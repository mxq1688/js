<template>
<div>
  <div :class="$style.main">
    webpack
  </div>
  <div class="main2">
    webpack2
  </div>
  <div :class="index.main">
    webpack3
  </div>
  <router-view />
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import index from './index.module.scss';
console.log(index, 111);
export default defineComponent({
  name: "App",
  data(){
    return {
      index
    }
  }
});
</script>

<style module lang="scss">
.main{
  color: red;
}
</style>

<style scoped lang="scss">
.main2{
  color: blue;
}
</style>