import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css'
import TodoListUi from '../tpl/TodoListUi'
import {observable, action, computed, ObservableMap} from 'mobx'
import PropTypes from 'prop-types'
import {observer, PropTypes as observablePropTypes} from 'mobx-react'

class Todo{
    id = Math.random();
    @observable title = '';
    @observable finished = false;
    constructor(title){
        this.title = title;
    }
    @action.bound toggle(){
        this.finished = !this.finished;
    }
}
class Store{
    @observable list = [];
    @action.bound createItem(title){
        this.list.unshift(new Todo(title))
    }
    @computed get left(){
        return this.list.filter((todo)=>{
            return !todo.finished
        }).length;
    }
}
const store = new Store();

@observer
class TodoList2 extends Component{
    static propTypes = {
        store: PropTypes.shape({
            createItem: PropTypes.func,
            list: observablePropTypes.observableArrayOf(observablePropTypes.observableObject).isRequired
        }).isRequired
    }
    state = {
        inputValue: '',
    }
    handInputChange(e){
        var value = e.target.value;
        this.setState((prestate)=>{
            prestate.inputValue = value
            return prestate
        });
    }
    handSubmit(){
        store.createItem(this.state.inputValue)
        this.setState((prestate)=>{
            prestate.inputValue = ''
            return prestate
        });
    }
    render(){
        const store = this.props.store;
        return (
            <Fragment>
                <div><input type="text" value={this.state.inputValue} onChange={this.handInputChange.bind(this)}/>
                    <button onClick={this.handSubmit.bind(this)}>addSub</button></div>
                <div>
                    {
                        store.list.map((item,index)=>{
                            return(
                                <Fragment>
                                    <TodoItem key={index} item={item}/>
                                    <span>X</span>
                                </Fragment>
                            )

                        })
                    }
                </div>
                <div>{store.left}</div>
            </Fragment>
        )
    }
}

class TodoItem extends Component{
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            finished: PropTypes.bool.isRequired,
        })
    };
    handClick(){
        this.props.item.toggle();
    }
    render(){
        const item = this.props.item;
        return (
            <Fragment key={item.id}>
                <div style={{marginLeft: '10px'}}>
                    <input type="checkbox" onClick={this.handClick.bind(this)} checked={item.finished}/>
                    <span style={{marginLeft: '10px'}}>{item.title}</span>
                </div>
            </Fragment>
        )
    }
}


class TodoList extends Component{

    render(){
        return <TodoList2 store={store}/>
    }
}

export default TodoList;
