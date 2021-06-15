import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css'
import  store  from '../store/index'
import {getInputChangeAction, getListChangeAction} from "../store/common/actionCreator";
import TodoListUi from '../tpl/TodoListUi'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = store.getState();
        store.subscribe(this.handStoreChange.bind(this));//监听到store变化然后修改state
        this.handInputChange = this.handInputChange.bind(this)
        this.addList = this.addList.bind(this)
        this.deleteList = this.deleteList.bind(this)
    }
    handStoreChange(){
        this.setState(store.getState())
    }
    handInputChange(e){
        const value = e.target.value
        const action = getInputChangeAction(value);
        store.dispatch(action)
    }
    addList(){
        const action = getListChangeAction([...this.state.list, this.state.inputValue])
        store.dispatch(action);
    }
    deleteList(index){
        console.log(index);
        var list = this.state.list;
        list.splice(index, 1)
        const action = getListChangeAction(list)

        store.dispatch(action)
    }
    render() {
        return <TodoListUi
            inputValue={this.state.inputValue}
            list={this.state.list}
            handInputChange={this.handInputChange}
            addList={this.addList}
            deleteList={this.deleteList}
        />

    }
}

export default TodoList;
