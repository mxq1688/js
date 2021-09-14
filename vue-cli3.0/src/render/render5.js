export default {
    name: 'render5',
    // 作用域插槽
    render: function(createElement) {
        // 相当于<div><slot :text="msg"></slot></div>
        return createElement('div', [
            // this.$slots.head
            this.$scopedSlots.head({
                text: this.msg
            }),
            // this.$slots.default
            this.$scopedSlots.default({
              text: this.msg
          })
        ]);
    },
  data(){
    return {
      msg: 'slotProps',
    }
  },
  methods: {

  }
}