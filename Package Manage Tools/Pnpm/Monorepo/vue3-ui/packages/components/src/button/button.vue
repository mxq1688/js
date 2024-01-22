<template>
  <button class="ea-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';
/*
defineOptions
  vetur插件会报红线
    解决
      defineOptions上添加 // @ts-ignore
  使用volar没有报红
*/
defineOptions({ name: 'EaButton' });

type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
