<template>
    <div>
        {{msg}}-{{$route.params.username}}-{{$route.params.m}}
    </div>
</template>

<script>
    export default {
        name: 'hi',
        data(){
            return {
                msg: 'Hi 1',
            }
        }
    }
</script>
<style scoped>

</style>
