<template>
    <div>
        
    </div>
</template>

<script>
    import Bus from './bus'
    export default {
        name: 'aaa',
        data(){
            return {
                msg: 'aaa',
                show: 'none'
            }
        },
        created() {  
            Bus.$on('getTarget', target => {  
                window.console.log(target);  
            });  
        },
        methods:{
        
        }

    }
</script>
<style scoped>

</style>
