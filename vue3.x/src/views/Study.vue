<template>
  <div class="study">
    111
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";

export default defineComponent({
  name: "study",
   data() {
    return {
      waresList: [
        // 1 热门单品 2 资源包 3 方案
        { value: '1', text: '热门单品' },
        { value: '2', text: '资源包' },
        { value: '3', text: '方案' }
      ],
      stateList: [
        { label: '全部', value: '' },
        { label: '启用', value: '0' },
        { label: '禁用', value: '1' }
      ],
    }
  },
  mounted(){
    console.log(111,this.waresList);
    
  },
  methods:{

  },
  setup() {
    onMounted(()=>{
      console.log(222,this);
    })
    
  }
})
</script>
