import React, { Component, Fragment } from 'react';

import TodoItem from './TodoItem'
import TodoShow from './TodoShow'
class TodoList extends Component{
    constructor(props){
        // 当组件的props state改变时，render就会重新执行
        // 当父组件render运行时，子组件的render都会运行
        super(props);
        this.state = {
            inputValue: '111',
            list: ['hello'],
        }
    }
    handInputChange(e){
        // this.setState(parma1, param2) param1是对象或者函数（函数必须返回对象）， parma2是会回调函数
        // this.setState({inputValue: e.target.value})
        this.setState({inputValue: this.refs.myinput.value})
    }
    addList(){
        //方法1
        // var list = this.state.list;
        // list.push(this.state.inputValue)
        // this.setState({
        //     list: list
        // })
        //方法2
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
        //方法3
        this.setState((m)=>{
            // console.log(m);
            // m.list.push(m.inputValue)
            m.list = [...m.list, m.inputValue]
            m.inputValue = '';
            return m
        })
        //箭头函数返回对象简写
        // this.setState((m)=>({
        //     list: [...m.list, m.inputValue],
        //     inputValue: ''
        // }))
    }
    deleteList(index){
        var list = this.state.list;
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
    //代码拆分
    getTodoItem(){
        return this.state.list.map((item, index)=>{
            return (
                <Fragment key={index}>
                    {/*<li dangerouslySetInnerHTML={{__html: item}}>*/}

                    {/*</li>*/}
                    {/*<button onClick={this.deleteList.bind(this, index)}>X</button>*/}
                    <TodoItem item={item} index={index} deleteItem={this.deleteList.bind(this, index)} />
                </Fragment>
            )
        })
    }
    render() {
        return (
            <Fragment>
                <div><input type="text"
                            value={this.state.inputValue}
                            onChange={this.handInputChange.bind(this)}
                            ref='myinput'
                            // ref={ (input) => { this.input = input} }
                />
                    <button onClick={this.addList.bind(this)}>submit</button></div>
                <TodoShow content={this.state.inputValue} />
                <ul>
                    { this.getTodoItem() }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;
