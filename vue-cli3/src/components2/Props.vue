<template>
    <div>
        <button>propA: {{propA}}</button>
        <button>propB: {{propB}}</button>
        <button>propC: {{propC}}</button>
        <button>propD: {{propD}}</button>
        <button>propE: {{propE}}</button>
        <button @click="childMethod">子组件调用父子间方法</button>
    </div>
</template>

<script>
    /*
        注意在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身将会影响到父组件的状态。
        // 对象或数组默认值必须从一个工厂函数获取
    */
    export default {
        props: {
            propA: [Number, String],
            propB: {
                type: String,
                required: true,
            },
            propC: {
                type: Number,
                default: 168,
            },
            propD: {
                type: Object,
                // 对象或数组默认值必须从一个工厂函数获取
                default: ()=>{
                    return {
                        name: 'mxq'
                    }
                }
            },
            propE: {
                validator: value=>{
                    return ['success', 'warning', 'danger'].indexOf(value) !== -1
                }
            }
        },
        name: 'props',
        data(){
            return {
                msg: 'props',
            }
        },
        computed:{

        },
        methods:{
            handleParentClick(param) {
                console.log('父组件调用子组件方法');
            },
            childMethod() {
                console.log('请求父组件方法');
                this.$emit('parentMethod');  //使用$emit()引入父组件中的方法
            }
        }

    }
</script>
<style scoped>

</style>
