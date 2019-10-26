<template>
    <div>
        <input type="text" :value="msg" v-on:input="$emit('vmodel', $event.target.value)">
    </div>
</template>

<script>
    export default {
        props:{
            inv: String,
        },
        model:{
            prop: 'inv',
            event: 'vmodel'
        },
        name: 'vmodel',
        data(){
            return {
                msg: this.inv,
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
