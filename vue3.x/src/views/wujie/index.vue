<template>
    <div class="wujie">
      wujie
      <WujieVue
        width="100%"
        height="768px"
        name="yuan365"
        url="http://localhost:8080/"
        :props="{
          bangToken: bangToken,
        }"
      ></WujieVue>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
const w:any = window
@Options({
  name: 'wujie',
  components: {},
  props: {},
  data() {
    return {
      dataForChild:{
        token: '',
      }
    }
  },
  mounted(){
 
  },
  methods: {
    jump(){
      /*控制子路由跳转*/
      console.log(history.state, 1111111);
      window.history.pushState(history.state, '', '/my-page/myplan')
      console.log(history.state, 2222222, new PopStateEvent('popstate', { state: history.state }));
      window.dispatchEvent(new PopStateEvent('popstate', { state: history.state }))
    },

  }
})
export default class Help extends Vue {}
</script>

<style lang="scss" scoped>
.wujie{
 width: 100%;
 height: 100%;
}
    
</style>
