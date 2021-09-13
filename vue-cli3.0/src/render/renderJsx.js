export default {
    name: 'FlexiableSlot',
    //   jsx写法
    render(){
        return <div>
        {this.jsxMsg}
        </div>
    },


    data(){
        return {
            jsxMsg: 'jsxMsg'
        }
    },
    props: {
        level: {
        type: Number,
        required: true,
        },
    },
    methods: {

    }
}