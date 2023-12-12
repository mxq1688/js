import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import '../style/transition.css'

class Transition extends Component{

    constructor(props){
        super(props);
        this.state = {
            show: true,
            list: []
        }
    }
    showD(){
        this.setState({
            show: !this.state.show
        })
    }
    addItem(){
        this.setState((prestate)=>{
            return {
                list: [...prestate.list, 'item']
            }
        })
    }
    getItem(){
        return this.state.list.map((item, index)=>{
            return (
                <CSSTransition key={index}
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit //整体去除
                    onEntered={(el)=>{
                        el.style.color = 'red'
                    }}
                    appear={true}//第一次也要现实颜色
                >
                <div>{item}</div>
                </CSSTransition>
            )
        })
    }

    render() {
        //JSX->createElement->虚拟Dom(js对象)->真是dom
        return (
            <Fragment>
                {/*<div className={this.state.show? 'show': 'hide'}>hello</div>*/}
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit //整体去除
                    onEntered={(el)=>{
                        el.style.color = 'red'
                    }}
                    appear={true}//第一次也要现实颜色
                >
                    <div>hello</div>
                </CSSTransition>
                <button onClick={this.showD.bind(this)}>toogle</button>
                <hr/>
                <TransitionGroup>
                    {
                        this.getItem()
                    }
                </TransitionGroup>

                <button onClick={this.addItem.bind(this)}>addItem</button>
            </Fragment>
        )
    }
}
export default Transition;
