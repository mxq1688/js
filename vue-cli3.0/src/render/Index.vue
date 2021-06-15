<template>
    <div>
         <FlexiableSlot :level="1">
            【一级标题】level值为1，表示渲染的是h1标签
            <template slot="head" slot-scope="slotProps">1111111111-{{slotProps.text}}</template>
        </FlexiableSlot>

        <br>
        <FlexiableSlot :level="2">
            【二级标题】level值为2，表示渲染的是h2标签
            <template slot="head" slot-scope="slotProps">2222222222-{{slotProps.text}}</template>
        </FlexiableSlot>

    </div>
</template>

<script>
import FlexiableSlot from './FlexiableSlot'

export default {
    components: {
      FlexiableSlot,
    },
    name: 'render',
    data(){
        return {
            
        }
    },
    created(){
        
    },
    methods:{
    
    }
}
</script>
