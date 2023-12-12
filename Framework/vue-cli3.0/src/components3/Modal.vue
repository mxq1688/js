<template>
    <div style="position: relative;margin: 0 auto;border: 1px solid red;height: 100px;width: 80%" :style="{display: dis}">
        {{msg}}
        <div>
            <!--单个插槽-->
            <!--<slot>-->
                <!--我是备用内容-->
            <!--</slot>-->

            <!--多个插槽-->
            <header>
                <slot name="header">

                </slot>
            </header>
            <main>
                <slot v-bind:user_name="user_name">
                    <!--一个不带 name 的 <slot> 出口会带有隐含的名字“default”。-->
                    <!--绑定在 <slot> 元素上的特性被称为插槽 prop-->
                    我是备用内容 main-{{user_name}}
                </slot>
            </main>
            <footer>
                <slot name="footer">

                </slot>
            </footer>

        </div>
        <div style="position: absolute;bottom: 0px;">
            <button @click="$emit('update:show', false)">cancel</button>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['show'],
        name: 'modal',
        data(){
            return {
                msg: 'alert',
                user_name: 'mxq'
            }
        },
        computed:{
            dis(){
                return this.show? 'block': 'none'
            }
        },
        methods:{

        }

    }
</script>
<style scoped>

</style>
