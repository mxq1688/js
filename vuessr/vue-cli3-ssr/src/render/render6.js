// 函数式组件 函数式组件是一个无状态、无实例的组件
// { render: h => h("router-view") } //render简写 h就是createElement
export default {
  functional: true,
  // 为了弥补缺少的实例，提供第二个参数作为上下文
  render: function (createElement, context) {
    window.console.log(context, 111);
          return createElement(
            'div',
            {
              domProps: {
                // innerHTML: '》'+context.props.name //会覆盖createElement的第三个参数
                }
            },
            // context.children //或者 context.slots().default
            context.scopedSlots.default({text: '666'})
          )
  },
  props: {
    name: String
  }
}
/*
context:{
  props：提供所有 prop 的对象
  children：VNode 子节点的数组
  slots：一个函数，返回了包含所有插槽的对象 context.slots().default
  scopedSlots：(2.6.0+) 一个暴露传入的作用域插槽的对象。也以函数形式暴露普通插槽。
  data：传递给组件的整个数据对象，作为 createElement 的第二个参数传入组件
  parent：对父组件的引用
  listeners：(2.3.0+) 一个包含了所有父组件为当前组件注册的事件监听器的对象。这是 data.on 的一个别名。
  injections：(2.3.0+) 如果使用了 inject 选项，则该对象包含了应当被注入的 property。
}

在添加 functional: true 之后，不能再使用this
为render函数增加 context 参数
并将 this.$slots.default 更新为 context.children
然后将 this.name 更新为 context.props.name

context.data可以把上面所有的 attribute 和事件监听器都传递到div中

*/


