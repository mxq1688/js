// VNodes必须唯一: 渲染没问题的，后续的操作会有问题
var child = {
  render: function(createElement) {
      return createElement('p', 'vnodes');
  }
};
export default {
    name: 'render4',
    props: {
    },
    data(){
        return {
        }
    },
    render: function(createElement) {
        var childNode = createElement(child);
        return createElement('div', [
            childNode, childNode//VNodes必须唯一，渲染没问题的，后续的操作会有问题
        ]);
    },

    // 正确的渲染方法：
    // render: function(createElement) {
    //     return createElement('div', 
    //         Array.apply(null, {
    //             length: 2
    //         }).map(function() {
    //             return createElement(child)//正确写法
    //         })
    // )},
    
}
