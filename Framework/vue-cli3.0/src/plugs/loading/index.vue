<template>
    <div class='wrapper' v-if="isshow">
        <div class='loading'>
            <img src="@/assets/logo.png" alt="" width="40" height="40">
        </div>
    </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: String,
      default: "1s" //默认1s
    },
    isshow: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>

</style>