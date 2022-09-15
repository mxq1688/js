//vue-leilei-toast
<template>
  <div>
    <transition name="fade">
      <div v-show="show" class="toast">{{message}}</div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "leilei-toast",
  components: {},
  data() {
    return {
      message: "hello world",
      show: false
    };
  },

  computed: {},

  watch: {},

  methods: {
  },

  created() {},

  mounted() {}
};
</script>
<style lang='scss'>
@import url("index.css");
</style>