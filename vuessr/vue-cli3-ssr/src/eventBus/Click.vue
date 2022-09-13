<template>
    <div>
        <div class="click" @click.stop.prevent="addCart($event)"> 
            <button> {{title}}</button>
        </div>
    </div>
</template>

<script>
    import Bus from './bus'
    export default {
        name: 'aaa',
        props:{
            title: String
        },
        data(){
            return {
      
            }
        },
        methods:{
            addCart(event){
                Bus.$emit('getTarget', event);   
            }
        }
    }
</script>
<style scoped>

</style>
