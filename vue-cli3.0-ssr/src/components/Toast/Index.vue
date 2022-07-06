
<template>
  <transition name="fade">
    <div v-show="visible">{{message}}</div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      message: ''
    }
  }
}
</script>

<style scoped>
div {
  position: fixed;
  top: 30%;
  left: 50%;
  padding: 5px 20px;
  color: #fff;
  background-color: #424242;
  border-radius: 5px;
  text-align: center;
  transform: translate(-50%, -50%);
}
/* vue动画过渡效果设置 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>