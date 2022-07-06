<template>
    <div>
        <render1 :level="1">
            level值为1，表示渲染的是h1标签
        </render1>
        <render2></render2>
        <render3></render3>
        <render4></render4>

        <render5>
            这里是默认内容
            <template slot="head" slot-scope="slotProps">{{slotProps.text}}</template>
        </render5>

        <render51></render51>
        <render6 :name="'mxq'" v-slot="slotProps">
            这里是默认内容 {{slotProps.text}}
        </render6>

        <renderJsx >jsx-插槽</renderJsx>
        <renderJsx v-slot="slotProps">jsx-插槽作用域 {{slotProps.text}}</renderJsx>
     

    </div>
</template>

<script>
import render1 from './render1'
import render2 from './render2'
import render3 from './render3'
import render4 from './render4'
import render5 from './render5'
import render51 from './render5-1'
import render6 from './render6'
import renderJsx from './renderJsx'

export default {
    components: {
      render1,render2,render3,render4,render5,render51,render6,
      renderJsx
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
