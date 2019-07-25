
define(require => {
    require('babel');
    const $ = require('jquery');
    const React = require('react');
    const ReactDom = require('reactDom');
    const ReactRouter = require('reactRouter');

    class MyComponent extends React.Component {
        handleClick() {
            // 使用原生的 DOM API 获取焦点
            this.refs.myInput.focus();
        }
        render() {
            //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
            return (
                <div>
                    <input type="text" ref="myInput" />
                    <input
                        type="button"
                        value="点我输入框获取焦点"
                        onClick={this.handleClick.bind(this)}
                    />
                </div>
            );
        }
    }

    ReactDom.render(
        <MyComponent />,
        document.getElementById('app')
    );

})
