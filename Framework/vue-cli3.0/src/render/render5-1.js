

var child = {
  render: function(createElement) {
    return createElement('div', this.$scopedSlots.default({text:this.name})); //相当于 <div><slot :text="'我是子组件'"></slot></div>
  },
  props:{
    name: {
      type: String,
    }
  }
}
export default {
    name: 'render5-1',
    // 向子组件中传递作用域插槽
    render: function(createElement) {
      return createElement('div', [
          createElement(child, {
              props:{ //这里child是封装的组件，需要用props
                name: 'mxq'
              },
              scopedSlots: { 
                  // 相当于 <template slot="default" slot-scope="slotProps"></template>
                  default: function(slotProps) {
                      return [
                          createElement('span', '来自父组件'),
                          createElement('span', '来自父组件'),
                          createElement('span', 'slotProps:'+slotProps.text)
                      ];
                  }
              }
          })
      ]);
    },
  data(){
    return {
    }
  },
  methods: {

  }
}