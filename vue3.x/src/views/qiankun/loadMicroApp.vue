<template>
    <div>
        <div style="display:flex;flex-flow:column nowrap">
            memememememm
            <router-link to="/loadMicroApp/myPerson">qiankun myPerson</router-link>
            <router-link to="/loadMicroApp/myPlan">qiankun myPlan</router-link>

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
            entry: 'http://localhost:8080',
            container: this.$refs.containerRef,
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