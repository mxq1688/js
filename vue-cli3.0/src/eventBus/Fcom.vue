<template>
    <div>
        <div v-for="(vo, index) in list" :key="index">
            <Click :title='vo' />
        </div>
        <Show />
    </div>
</template>

<script>
    import Click from './Click'
    import Show from './Show'
    export default {
        name: 'aaa',
        components: {Click, Show},
        data(){
            return {
                list:[
                    111,222,333,
                ]
            }
        },
        methods:{
     
        }

    }
</script>
<style scoped>

</style>
