import React, { Component, Fragment } from 'react';

import {HashRouter, BrowserRouter as Router, Switch,  Route, Link, NavLink, Redirect} from 'react-router-dom'

import Home from './Home'
import About from './About'
import News from './News'
import User from './User'
import Merror from './Merror'

// var MenuLink = ({children, exact, to})=>{
//     const match = window.location.pathname == to;
//     console.log(to);
//     return (
//             <NavLink  exact={exact} activeStyle={match ? {
//                 fontWeight: "bold",
//                 color: "green"
//             }: {}} to={to}>{match? '>': ''}{children}</NavLink>
//     )
// }
var MenuLink = ({children, exact, to})=>{

    return (
        <Route children={({match})=>{
            return (
                <NavLink  exact={exact} activeStyle={match ? {
                    fontWeight: "bold",
                    color: "green"
                }: {}} to={to}>{match? '>': ''}{children}</NavLink>
                )
        }}/>

    )
}
class Index extends Component{
    constructor(props){
        super(props);

    }
    render() {
        return (
                <Router>

                    <Fragment>
                        <div>
                            <MenuLink exact={true} to={'/'}>主页</MenuLink>
                            {/*<NavLink exact to={'/'} activeStyle={{*/}
                                {/*fontWeight: "bold",*/}
                                {/*color: "red"*/}
                            {/*}}>主页</NavLink>*/}
                            <MenuLink exact={false} to={'/about'}>about</MenuLink>
                            {/*<NavLink to={'/about'} activeStyle={{*/}
                                {/*fontWeight: "bold",*/}
                                {/*color: "red"*/}
                            {/*}}>About</NavLink>*/}
                            <NavLink to={'/news'} activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>News</NavLink>
                            {/*<NavLink to={'/user/1?name=123'} replace activeStyle={{*/}
                                {/*fontWeight: "bold",*/}
                                {/*color: "red"*/}
                            {/*}}>User</NavLink>*/}
                            {/*to使用对象*/}
                            <NavLink to={{
                                pathname: '/user/1',
                                search: '?name=123',
                                state: {age: 12},
                                hash: '#top'
                            }} replace activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>User2</NavLink>
                            <NavLink to={'/mmm'} replace activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Redirect</NavLink>
                        </div>
                        <Switch>
                            <Route exact path={'/'} component={Home} />
                            <Route path={'/about'} component={About} />
                            {/*向子路由组件传递数据*/}
                            <Route path={'/news'} render={ (props)=> <News {...props} sex={'1'} /> } />
                            <Route path={'/user/:id'} component={User} />
                            {/*Redirect第一种用法  push同replace*/}
                            <Redirect push from={'/mmm'} to={'/'} />
                            {/*匹配不到显示404*/}
                            {/*<Route component={Merror} />*/}
                            {/*匹配不到跳转到主页*/}
                            <Redirect to={'/'}/>
                        </Switch>

                    </Fragment>
                </Router>
        )
    }
}
export default Index;
