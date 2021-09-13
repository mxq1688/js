// var child = {
//   render: function(createElement) {
//       return createElement('p', 'vnodes');
//   }
// };

var child = {
  render: function(createElement) {
    return createElement('b', this.$scopedSlots.default({text: '我是子组件'+this.name}));
  },
  props:{
    name: {
      type: String,
    }
  }
}
export default {
    name: 'FlexiableSlot',



    // 第三个参数
    /*
      render: function(createElement) {
          // var self = this;
          // return createElement('div', '文本');//使用字符串生成文本节点
          return createElement('div', [//由createElement函数构建而成的数组
              createElement('h1', '主标'),//createElement函数返回VNode对象
              createElement('h2', '副标')
          ]);
      },
    */

    // VNodes必须唯一
    /*
      render: function(createElement) {
        return createElement('div', 
            Array.apply(null, {
                length: 2
            }).map(function() {
                return createElement(child)//正确写法
            })
        );
        
      },
    */
    // VNodes必须唯一 
    /*
      render: function(createElement) {
        var childNode = createElement(child);
        return createElement('div', [
            childNode, childNode//VNodes必须唯一，渲染失败
        ]);
      },
    */

    // 作用域插槽
    /*
      render: function(createElement) {
          // 相当于<div><slot :text="msg"></slot></div>
          return createElement('div', [
              this.$scopedSlots.head({
                  text: this.msg
              }),
              this.$scopedSlots.default({
                text: this.msg
            })
          ]);
      },
    */

    // 向子组件中传递作用域插槽
    
    render: function(createElement) {
      return createElement('div', [
          createElement(child, {
              props:{
                name: 'mxq'
              },
              scopedSlots: { // 相当于 <template slot="default" slot-scope="slotProps"></template>
                  default: function(slotProps) {
                      return [
                          createElement('span', '来自父组件'),
                          createElement('span', slotProps.text)
                      ];
                  }
              }
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




// 函数式组件 函数式组件是一个无状态、无实例的组件
/*
  export default {
    functional: true,
    // 为了弥补缺少的实例
    // 提供第二个参数作为上下文
    render: function (createElement, context) {
            return createElement(
              'div',
              {
                  props: {
                      data: context.props.data
                  }
              },
              context.children
            )
    },
    props: {
    }
  }

  简写
  { render: h => h("router-view") },
*/
