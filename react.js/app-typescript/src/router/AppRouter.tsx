
import * as React from 'react'
import App from '../App'
import {Route, HashRouter, Switch, Link} from 'react-router-dom'



export default class AppRouter extends React.Component{
    public render(){
        return (
            <HashRouter>
                <Link to='/aa' >few</Link>
                <Switch>
                    <Route path="/aa" component={App} />
                </Switch>
            </HashRouter>
        )
    }
}
