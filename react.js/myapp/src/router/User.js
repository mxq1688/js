import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, withRouter, Prompt} from "react-router-dom";
import Info from "./user/Info";
import Center from "./user/Center";
import queryString from 'query-string'

var Hello = (props)=>{
    return (
        <div>
            Hello <button onClick={()=>console.log(props)}>click</button>
        </div>
    )
}
var Hello = withRouter(Hello);

class User extends Component{
    constructor(props){
        super(props);
        console.log(props);
        // var url = new URLSearchParams(props.location.search);
        // console.log(url.get('name'));
        this.state = {
            query: queryString.parse(props.location.search),
            name: '',
        }
    }
    subMit(){
        this.props.history.push('/about');
    }
    render() {
        return (
        this.state.query.name == 111?
            <Redirect to={'/'}/>
            :
            <Fragment>
                <Prompt when={!!this.state.name} message={'确定放弃当前编辑'}/>
                <div>
                    <Hello/>
                    <input type="text" value={this.state.name} onChange={(e)=>{
                        this.setState({name: e.target.value})
                    }}/>
                    {/*默认使用 /  */}
                    <button onClick={this.subMit.bind(this)}>submit</button>
                    <NavLink to={`${'/user/'+this.props.match.params.id+'/'}`} replace>info</NavLink>
                    <NavLink to={`${'/user/'+this.props.match.params.id+'/center'}`} replace>center</NavLink>
                </div>
                <Route exact path={`${'/user/'+this.props.match.params.id+'/'}`} component={Info} />
                <Route path={`${'/user/'+this.props.match.params.id+'/center'}`} component={Center} />
            </Fragment>
        )
    }
}
export default User;
