<template>
    <div>
        <div>插槽学习</div>
        <button @click="show = !show">modal</button>
        <modal v-bind:show.sync="show">
            <!--单个插槽使用-->
            <!--body-{{content}}&lt;!&ndash;该插槽跟模板的其它地方一样可以访问相同的实例属性 (也就是相同的“作用域”)，而不能访问 <navigation-link> 的作用域&ndash;&gt;-->
            <span slot="header">
                我是header
            </span>

            <!--slot-scope="slotProps" 已废弃-->
            <!--v-slot:default="slotProps"-->
            <span slot-scope="slotProps">
                {{content}} - {{slotProps.user_name}}
            </span>
            <span slot="footer">
                我是footer
            </span>
        </modal>

    </div>
</template>

<script>
    import Modal from './Modal'
    export default {
        components: { Modal },
        name: 'fe',
        data(){
            return {
                msg: '',
                show: true,
                content: 'tip'
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
