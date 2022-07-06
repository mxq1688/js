<template>
    <div>
        {{msg}}<br/>
        <button @click="change">show</button>
        <div :style="{display: dis}">
            afjeofjpjfpejwpqjfp
            afjeofjpjfpejwpqjfp
            afjeofjpjfpejwpqjfp
            afjeofjpjfpejwpqjfp
            afjeofjpjfpejwpqjfp
        </div>
    </div>
</template>

<script>

    export default {
        name: 'aaa',
        data(){
            return {
                msg: 'aaa',
                show: 'none'
            }
        },
        computed:{
            dis(){
                return this.show? 'block': 'none';
            }
        },
        methods:{
            change(){
                this.show = !this.show;
            }
        }

    }
</script>
<style scoped>

</style>
