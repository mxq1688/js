<template>
    <div>
        子应用
        <div id="yuan365"></div>
    </div>
</template>
<script>
import { start } from 'qiankun'
export default {
    name: 'qiankun',
    mounted() {
        console.log('window.qiankunStarted',window.qiankunStarted);
        if (!window.qiankunStarted) {
            window.qiankunStarted = true;
            start();
        }
    }
}
</script>