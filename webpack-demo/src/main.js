import _ from 'lodash';
import '../assert/css/style.css';

import Icon from '../assert/img/m.jpg'
import data from '../assert/m.json'//加载.json文件

import printMe from './print.js'

const greeter  =require('./Greeter.js');

document.querySelector("body").appendChild(greeter(Icon, printMe));

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        document.querySelector("body").appendChild(greeter(Icon, printMe));

    })
}
