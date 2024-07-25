<script setup lang="ts">
import { register } from './CustomElement';
register('dart-element')
</script>

<template>
  <el-button size="small" round >编辑</el-button>
  <div>
    <dart-element></dart-element>
  </div>
</template>

<style>
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
