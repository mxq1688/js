<template>
    <div>
        <render1 :level="1">
            【一级标题】level值为1，表示渲染的是h1标签
        </render1>
        <render2></render2>
        <render3></render3>

        <FlexiableSlot>
            【一级标题】level值为1，表示渲染的是h1标签
            <template slot="head" slot-scope="slotProps">1111111111-{{slotProps.text}}</template>
        </FlexiableSlot>

     

    </div>
</template>

<script>
import render1 from './render1.js'
import render2 from './render2.js'
import render3 from './render3.js'
import FlexiableSlot from './FlexiableSlot'

export default {
    components: {
      FlexiableSlot,render1,render2,render3
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
