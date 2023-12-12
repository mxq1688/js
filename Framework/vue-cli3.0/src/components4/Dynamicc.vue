<template>
    <div>
        <div>{{msg}}</div>
        <button @click="changeComponent('aaa')">aaa</button>
        <button @click="changeComponent('bbb')">bbb</button>
        <button @click="changeComponent('ccc')">ccc</button>

        <!-- 失活的组件将会被缓存！-->
        <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
    </div>
</template>

<script>

    import Aaa from './Aaa'
    import Bbb from './Bbb'
    import Ccc from './Ccc'
    export default {
        components: {Aaa, Bbb, Ccc},
        name: 'dynamic',
        data(){
            return {
                msg: '动态组件',
                currentTabComponent: 'aaa'
            }
        },
        computed:{

        },
        methods:{
            changeComponent(ponent){
                this.currentTabComponent = ponent;
            }
        }

    }
</script>
<style scoped>

</style>
