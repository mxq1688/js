<template>
    <div>
        <div>
            memememememm
        </div>
        <div ref="containerRef" />
    </div>
</template>
  
<script>
import { loadMicroApp } from 'qiankun'

export default {
    mounted() {
        this.microApp = loadMicroApp({
            name: 'yuan365',
            entry: 'http://localhost:8080/',
            container: this.$refs.containerRef,
            activeRule: '/help',
            props: {
                baseApp: 'wetaman365'
            }
        },{
            sandbox: { experimentalStyleIsolation: true },
        }
      );
    },
    beforeDestroy() {
        this.microApp.unmount();
    }
}
</script>