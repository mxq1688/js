<template>
    <div>
        <input v-bind="$attrs" type="text" >
    </div>
</template>

<script>
    /*
        注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定。
        required, placeholder
    */
    export default {
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
