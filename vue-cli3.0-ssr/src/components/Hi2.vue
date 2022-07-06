<template>
    <div>
        {{msg}}-{{$route.params.id}}
    </div>
</template>

<script>
    export default {
        name: 'hi',
        data(){
            return {
                msg: 'Hi 2',
            }
        }
    }
</script>
<style scoped>

</style>
