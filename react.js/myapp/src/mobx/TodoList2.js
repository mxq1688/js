import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css'
import {trace, toJS, spy, observable, action, reaction, computed, ObservableMap, observe} from 'mobx'
import PropTypes from 'prop-types'
import {observer, PropTypes as observablePropTypes} from 'mobx-react'
import {AppStateProvider} from './parts/app-state-provider'
import {AppState, withAppState} from './common/app-state'
import { inject } from 'mobx-react';

@inject('rootState')
@observer
class TodoItem extends Component{
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            finished: PropTypes.bool.isRequired,
        } ),
        index: PropTypes.number.isRequired,
        rootState: PropTypes.shape(typeof rootState).isRequired,
    };
    @action handClick(){
        this.props.rootState.AppState2.toggle(this.props.index)
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

@inject('rootState')
@observer
class TodoList2 extends Component{
    static propTypes = {
        rootState: PropTypes.shape(typeof rootState).isRequired
    }
    @observable inputValue= '';
    @action handInputChange(e){
        this.inputValue = e.target.value;
    }
    @action handSubmit(){
        if(!this.inputValue) return false
        this.props.rootState.AppState2.createItem(this.inputValue)
        this.inputValue = ''
    }
    render(){
        const {list , count} = this.props.rootState.AppState2;
        return (
            <Fragment>
                <div><input type="text" value={this.inputValue} onChange={this.handInputChange.bind(this)}/>
                    <button onClick={this.handSubmit.bind(this)}>addSub</button></div>
                <div>
                    {
                        list && list.map((item,index)=>{
                            return(
                                <Fragment>
                                    <TodoItem key={index} index={index} item={item}/>
                                    {/* <span>X</span> */}
                                </Fragment>
                            )

                        })
                    }
                </div>
                <div>已选中{count}</div>
            </Fragment>
        )
    }
}


function run(){
    return (
        <AppStateProvider>
            <TodoList2 />
        </AppStateProvider>
    )
}

export default run;
