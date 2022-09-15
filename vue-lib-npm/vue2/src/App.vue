<template>
  <div id="app">
    <button @click="opentoast()">我是个按钮</button>
  </div>
</template>
<script>
export default {
  methods:{
    opentoast(){
       this.$toast("hello world",1000)
    }
  }
}
</script>