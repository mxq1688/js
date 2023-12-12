<template>
  <div class="foo">
    <p>底部</p>
  </div>
</template>
<style>
.foo {
  background: yellow;
}
</style>
<script>
export default {
  asyncData: function ({ store }) {
    // return store.dispatch("GET_ARTICLE"); // 返回promise
    return "123";
  },
  created() {
    console.log("foo created");
  },
  computed: {
    article() {
      return { title: "title" };
    },
  },
};
</script>