<template>
    <div>
        <loading duration='2s' :isshow='show'></loading>
        <button @click="toastP">toast插件</button>

        <button @click="toast">toast</button>
        <test-panel ref='panel'></test-panel>
        <test-toast ref='toast'></test-toast>

        <div>批量引入</div>
        <com1></com1>
        <com2></com2>
        <com3></com3>

    </div>
</template>

<script>
import Vue from 'vue'
import Toasts from './toasts/index'
import Loading from './loading/index'
import ToastPanel from './test/index'
import Compon from './batch/index'
Vue.use(Toasts)
Vue.use(Loading)
Vue.use(ToastPanel)
Vue.use(Compon)
    export default {
        name: 'aaa',
        data(){
            return {
                show: true,
                list:[
                    111,222,333,
                ],
                testArr: [1,2, 6],
            }
        },
        created(){
            window.console.log(111, this.$myMethod(this.testArr))
        },
        methods:{
            toastP(){
                this.$toast('nb')
            },
            toast(){
                this.$refs.toast.toastPlugin('hello', 2000)
            }
        }

    }
</script>
<style scoped>

</style>
