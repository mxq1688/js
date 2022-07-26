<template>
  <div class="home">
    <div>
      基座应用主页
    </div>
    <div>
      <router-link to="/my-page/newPerson">进入子应用</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Home extends Vue {}
</script>
