<template>
    <div>
        {{msg}}
        <router-view />
        <!--<router-view :name="name" />向子组件传递props-->
    </div>
</template>

<script>
    export default {
        name: 'hi',
        data(){
            return {
                msg: 'Hi Vue',
            }
        },
        watch: {
            // 复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
            // 复用组件时，想对路由参数的变化作出响应的话
            '$route'(to, from) {
                // 对路由变化作出响应...
                console.log(to);
            }
        }
    }
</script>
<style scoped>

</style>
