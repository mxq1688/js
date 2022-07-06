<template>
    <div>
        <input v-bind="$attrs" type="text" >
        {{$attrs}}
    </div>
</template>

<script>
    /*
        inheritAttrs: 默认值 true
        继承所有的父组件属性（除 props 的特定绑定）作为普通的HTML特性应用在子组件的根元素上，如果你不希望组件的根元素继承特性设置 inheritAttrs: false ,但是 class 属性会继承

        inheritAttrs:true
            vue 会把父作用域的不被认作 props 的特性绑定且作为普通的 HTML 特性应用在子组件的根元素上
        inheritAttrs:false    
            组件的根元素不会继承特性设置，但是 class 属性会继承
                
        作用：
            1、可以传递一些input属性给子组件中的 input元素
                子组件：
                    <div>
                        <input v-bind="$attrs" type="text" >
                    </div>
                    {
                        inheritAttrs: false,
                        name: 'inherit',
                    }
            2、多层嵌套组件 父组件传递数据给孙组件
                
                子组件<ChildView :is-show="isOpen" :row="row"></ChildView>
                        <div class='child-view'>
                            <GrandChild v-bind="$attrs"></GrandChild>
                        </div>
                孙组件<GrandChild v-bind="$attrs"></GrandChild>
                        可以使用$attrs接收属性来使用
                        或者props接收属性使用

    */
    export default {
        props:['type'],
        inheritAttrs: false,
        name: 'inherit',
        data(){
            return {
                msg: '禁用特性继承',
            }
        },
        computed:{

        },
        methods:{

        }

    }
</script>
<style scoped>

</style>
