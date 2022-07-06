<template>
    <div>
        <button @click="changeDoc">change</button>
    </div>
</template>

<script>
    export default {
        props: [ 'title', 'content', 'user_name'],
        name: 'sync',
        data(){
            return {
                msg: '',
            }
        },
        computed:{

        },
        methods:{
            changeDoc(){
                this.$emit('update:title', 'hello_change');
                this.$emit('update:content', 'world_change');

                this.$emit('update:user_name', 'user_name_change');
            },
        }

    }
</script>
<style scoped>

</style>
