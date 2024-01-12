<template>
    <div>
        子应用
        <div id="yuan365"></div>
    </div>
</template>
<script lang="ts">
import { start } from 'qiankun'
const w:any = window
export default {
    name: 'qiankun',
    mounted() {
        w.mem = '主'
        console.log('主', window);
        console.log('window.qiankunStarted',w.qiankunStarted);
        if (!w.qiankunStarted) {
            w.qiankunStarted = true;
            start();
        }
    }
}
</script>