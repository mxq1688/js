<template>
    <div>
        <button>原生事件</button>
        <!--<input type="text" v-on="inputListeners" :value="msg">-->
        <input type="text" v-bind:value="msg" v-on="inputListeners">
    </div>
</template>

<script>
    export default {
        props:['inv1'],
        name: 'native',
        model:{
            prop: 'inv1',
            event: 'vmodel'
        },
        data(){
            return {
                // msg: this.inv1,
            }
        },
        created(){
        },
        computed:{
            msg(){
                return this.inv1
            },
            inputListeners: function () {
                window.console.log(this.$listeners, 'listeners')
                var vm = this
                // `Object.assign` 将所有的对象合并为一个新对象
                return Object.assign({},
                    // 我们从父级添加所有的监听器
                    this.$listeners,
                    // 然后我们添加自定义监听器，
                    // 或覆写一些监听器的行为
                    {
                        // 这里确保组件配合 `v-model` 的工作
                        input: function (event) {
                            vm.$emit('vmodel', event.target.value)
                        }
                    }
                )
            }
        },
        methods:{

        }

    }
</script>
<style scoped>

</style>
