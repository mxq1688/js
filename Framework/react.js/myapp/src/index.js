import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// promise测试
// import './Promise/index.js'

// 动画
// import TodoList from './component/TodoList';
// import Transition from './component/Transition'

// redux两种写法
// import TodoList from './redux/TodoListRedux1'
// import TodoList from './redux/TodoListRedux2'

// redux-saga
// import TodoList from './redux-saga/index'

//mobx用法
// import TodoList from './mobx/index'
// import TodoList from './mobx/TodoList'
// import TodoList from './mobx/TodoList2'

// hooks & recoil
    // import TodoList from './recoil/TodoList'

// 路由fen'pian
// import TodoList from './router/Index'
// import Scroll from './antd-compontent/Scroll'

// 分片上传 断点续传
import TodoList from './upload/index'

// axios
import http from "./server/http"
const data = {_token: 'VovAK8pyKOIySMYYCLdgDXjeUbCSrJnSFQyhd8nj', type: 123}
const params = 'name=mem&age=30'
http('', '/neobp', JSON.stringify(data), 'post', false, 0)


ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
