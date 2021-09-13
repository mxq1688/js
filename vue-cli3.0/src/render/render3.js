// v-model render 函数中没有与 v-model 相应的 api - 你必须自己来实现相应的逻辑：
export default {
    name: 'render3',
    props: {
    },
    data(){
        return {
            value: '',
        }
    },
    render: function (createElement) {
        var self = this
        return createElement('div',
            [
                createElement('input', {
                    domProps: { //这里就是设置input的props: value
                        value: self.value
                    },
                    on: {
                        input: function (event) {
                            self.value = event.target.value
                            self.$emit('input', event.target.value)
                        }
                    },
                }),
                'value值：'+ self.value
            ]
        )
    },
}
