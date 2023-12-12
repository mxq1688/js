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
/*
    对于 .passive、.capture 和 .once 这些事件修饰符，Vue 提供了相应的前缀可以用于 on
        修饰符	        前缀
        .passive	    &
        .capture	    !
        .once	        ~
        .capture.once 或
        .once.capture	~!
    eg:
        on: {
            '!click': this.doThisInCapturingMode,
            '~keyup': this.doThisOnce,
            '~!mouseover': this.doThisOnceInCapturingMode
        }
*/
