// jsx写法
export default {
    name: 'renderJsx',
    data(){
        return {
            jsxMsg: 'this is jsx'
        }
    },
    props: {
    },
    methods: {
    },
    render(h){
        /* 插槽 作用域
            this.$slots.default
            this.$scopedSlots.default({text: 'jjj'})

            h('p', this.$slots.default）
        */
        return <div style={{background: 'gray',margin:'10px'}}>
            {this.jsxMsg}
            {h('p', this.$slots.default)}
            {h('p', this.$scopedSlots.default({text: 'slotProps'}))}
        </div>
    },
}
/*

*/