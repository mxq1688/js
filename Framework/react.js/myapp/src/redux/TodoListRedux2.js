import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css'
import {Provider, connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import  store  from '../store/index'
import actions from '../store/common/actionCreator'
import {getInputChangeAction, getListChangeAction} from "../store/common/actionCreator";
import TodoListUi from '../tpl/TodoListUi'

@reductDecorator
class TodoList extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.handInputChange = this.handInputChange.bind(this)
        this.addList = this.addList.bind(this)
        this.deleteList = this.deleteList.bind(this)
    }
    handStoreChange(){
        this.setState(store.getState())
    }
    handInputChange(e){
        const value = e.target.value
        this.props.actions.getInputChangeAction(value)
    }
    addList(){
        this.props.actions.getListChangeAction([...this.props.list, this.props.inputValue])
    }
    deleteList(index){
        console.log(index);
        var list = this.props.list;
        list.splice(index, 1)
        this.props.actions.getListChangeAction([...list])
    }
    render() {
        return <TodoListUi
            inputValue={this.props.inputValue}
            list={this.props.list}
            handInputChange={this.handInputChange}
            addList={this.addList}
            deleteList={this.deleteList}
        />

    }
}


// 方法1
const TodoList2 = connect(
    (state)=>{
        return{
           inputValue: state.inputValue,
           list: state.list,
        }
    },
    dispatch=>{
        return{
            actions:bindActionCreators(actions,dispatch),
        }
    }
)(TodoList)

// 方法2 Decorator装饰器
function reductDecorator(target){
    return connect(
        (state)=>{
            return{
               inputValue: state.inputValue,
               list: state.list,
            }
        },
        dispatch=>{
            return{
                actions:bindActionCreators(actions,dispatch),
            }
        }
    )(target)
}

function TodoList3() {
    return (
        <Provider store={store}>
            <TodoList />
            {/* <TodoList2 /> */}
        </Provider>
    )
}

export default TodoList3;
