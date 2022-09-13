<script>
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

//对象写法
// export default {
//   functional: true,
//   props: {
//     row: Object,
//     render: Function
//   },
//   render: (h, ctx) => {
//     const params = {
//       row: ctx.props.row,
//       index: ctx.props.index
//     };
//     return ctx.props.render(h, params);
//   }
// };
</script>