<template>
    <div>
        <div>{{msg}}</div>
        <inherit placeholder="Enter your username" type="1"></inherit>

        <prop :fun="macSelect" @parentMethod="macSelect($event)" ref="child" propA="123" propB="hello" propE="success"></prop>

        v-model: {{inv}}
        <vmodel v-model="inv"></vmodel><!--这里的 inv 的值将会传入这个名为 inv 的 prop   默认value-->

        <!--
            在一个组件的根元素上直接监听一个原生事件
                方法一： 使用 v-on 的 .native 修饰符，缺点：如果想要绑定的元素不是根元素不起作用
                方法二：$listeners 不用加.native
        -->
        <!-- <native @click.native="mm" @focus.native="onFocus"></native> -->
        <!-- 原生事件: {{inv1}} -->
        <native @click="mm" @focus="onFocus" v-model="inv1"></native>

        <!--.sync 实现数据双向绑定-->
            <!--第一种用法-->
        doc: {{doc}}, user_name: {{user_name}}
        <sync v-bind.sync="doc"></sync>
            <!--第二种用法-->
        <sync v-bind:user_name.sync="user_name"></sync>

        <button @click="clickParent">父组件调用子组件</button>


        <br>
        <button @click="$toast('this is toast')">Toast</button>



    </div>
</template>

<script>
    import Inherit from '../components2/Inherit'
    import Prop from '../components2/Props'
    import Vmodel from '../components2/Vmodel'
    import Native from '../components2/Native'
    import Sync from '../components2/Sync'

    // Vue.component(Vmodel)
    export default {
        components: { Vmodel, Inherit, Prop, Native, Sync},
        name: 'compon',
        data(){
            return {
                msg: '组件学习',
                inv: 'hah',
                inv1: 'hah',
                doc: {
                    title: 'hello',
                    content: 'world',
                },
                user_name: 'mxq',
            }
        },
        computed:{

        },
        methods:{
            mm(){
                window.console.log('click');
            },
            onFocus(){
                window.console.log('focus');
            },
            clickParent(){
                this.$refs.child.handleParentClick("ssss");
            },
            macSelect(id){
                // 方法一：
                //     :fun="macSelect"
                // 方法二：
                //     @parentMethod="macSelect($event)"
                alert('我是父组件方法', id);
            }
        }

    }
</script>
<style scoped>

</style>
