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
    // render: function (createElement) {
    //   return createElement(
    //     'h' + this.level,   // 标签名称
    //     this.$slots.default, // 子节点数组
    //   )
    // },

    // v-if 和 v-for
    /*
      render: function (createElement) {
        if (this.items.length) {
          return createElement('ul', this.items.map(function (item) {
            return createElement('li', item.name)
          }))
        } else {
          return createElement('p', 'No items found.')
        }
      },
    */

    // v-model render 函数中没有与 v-model 相应的 api - 你必须自己来实现相应的逻辑：
    /*
      render: function (createElement) {
        var self = this
        return createElement('input', {
          domProps: {
            value: self.value
          },
          on: {
            input: function (event) {
              self.value = event.target.value
              self.$emit('input', event.target.value)
            }
          },
        })
      },
    */

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
  

  //jsx写法
  // render(){
  //   return <div>
  //     {this.jsxMsg}
  //   </div>
  // },


    data(){
      return {
        value: '',
        items:[
          {name: '1111'},
          {name: '2222'},
          {name: '3333'},
        ],
        msg: 'slotProps',
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

// createElement参数讲解
/*
第一个参数(必须) - {String | Object | Function}
    return createElement('div');//一个HTML标签字符
    return createElement({
        template: '<div></div>'//组件选项对象
    });
    var func = function() {
        return {template: '<div></div>'}
    };
    return createElement(func());//一个返回HTML标签字符或组件选项对象的函数
第二个参数(可选) - {Object} 一个包含模板相关属性的数据对象
    {
      scopedSlots,
      domProps:{innerHTML: ''},
      props:{}, 组件props
      on: { //监听
          click: this.clickHandler
      },
      directives, 自定义指令
    }


第三个参数(可选) - {String | Array}  第二个参数不写，可在第二个参数位置设置第三个参数，通过参数类型判断

*/



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

            或者使用jsx语法
            return <div>
              {this.jsxMsg}
            </div>
    },
    props: {
    }
  }

  简写
  { render: h => h("router-view") },
*/

// 原始写法
// Vue.component('anchored-heading', {
//   template: '#anchored-heading-template',
//   props: {
//       level: {
//           type: Number,
//           required: true
//       }
//   }
// })


// render写法
// Vue.component('anchored-heading', {
//   render: function (createElement) {
//       return createElement(
//           'h' + this.level,   // tag name 标签名称
//           this.$slots.default // 子组件中的阵列
//       )
//   },
//   props: {
//       level: {
//           type: Number,
//           required: true
//       }
//   }
// })
