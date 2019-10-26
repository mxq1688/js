import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import TodoList from './component/TodoList';
// import Transition from './component/Transition'

// import TodoList from './antd/TodoList'

// import TodoList from './mobx/TodoList'

// import Index from './router/Index'

import Scroll from './antd-compontent/Scroll'

import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Scroll />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
