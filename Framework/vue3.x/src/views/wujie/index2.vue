<template>
    <div class="wujie">
      wujie2
      <WujieVue
        width="100%"
        height="768px"
        name="yuan365-B"
        url="http://localhost:8080/help"
        :sync="false"
        :props="{

        }"
      ></WujieVue>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
const w:any = window
@Options({
  name: 'wujie2',
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
    w.mem = '主'
    console.log('主', window);
    
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
