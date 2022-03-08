<template>
  <div>
    <foo></foo>
    <div class="ww_button" @click="trigger">你好 点击一下，试一下</div>
  </div>
</template>
<script>
import Foo from "./components/Foo.vue";
export default {
  beforeCreate() {
    console.log("App beforeCreate"); // 客户端和服务端都执行
  },
  created() {
    console.log("App created"); // 客户端和服务端都执行
  },
  beforeMount() {
    console.log("App beforeMount"); // 只有客户端执行
  },
  mounted() {
    console.log("App mounted");
  },
  methods: {
    trigger() {
      console.log("触发点击事件");
    },
  },
  components: {
    foo: Foo,
  },
};
</script>
<style>
.ww_button {
  border: 1px solid red;
  color: red;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}
.ww_button:hover {
  opacity: 0.5;
  color: blue;
  background: pink;
  cursor: pointer;
}
</style>