<template>
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import microApp from '@micro-zoe/micro-app'
@Options({
  name: 'help',
  components: {},
  props: {},
  data() {
    return {
      dataForChild:{
        token: '',
        isOpenPerson: false,
      }
    }
  },
  watch: {
  },
  methods: {
  }
})
export default class Help extends Vue {}
</script>

<style lang="scss">
body{
  margin:0;
  padding: 0;
}
</style>
