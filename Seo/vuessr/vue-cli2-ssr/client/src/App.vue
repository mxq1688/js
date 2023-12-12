<template>
  <div class="app_container">
    <router-view />
  </div>
</template>

<style lang="scss"></style>


<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'App',
  props: {},
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
  }
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
</style>