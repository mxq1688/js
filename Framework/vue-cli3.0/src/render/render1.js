export default {
    name: 'render1',
    props: {
        level: {
            type: Number,
            required: true,
        },
    },
    render: function (createElement) {
        return createElement(
            'h' + this.level,   // 标签名称
            this.$slots.default, // slot
        )
    },
}
/* createElement参数讲解
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
      domProps:{innerHTML: ''}, //原生标签的props值
      props:{},                 // 子组件props
      on: { //监听
          click: this.clickHandler
      },
      directives, 自定义指令
    }

第三个参数(可选) - {String | Array}  第二个参数不写，可在第二个参数位置设置第三个参数，通过参数类型判断
    render: function(createElement) {
        // var self = this;
        // return createElement('div', '文本');//使用字符串生成文本节点
        return createElement('div', [//由createElement函数构建而成的数组
            createElement('h1', '主标'),//createElement函数返回VNode对象
            createElement('h2', '副标')
        ]);
    },
*/