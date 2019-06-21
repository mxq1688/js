

import React, {Component, Fragment} from "react";
import { observable, action} from 'mobx'
// import {} from 'mobx-react'
import PropTypes from 'prop-types'

class Store {
    @observable cache = {queue: []}
}
const store = new Store();

class Bar extends Component{
    static propTypes = {
        queue: PropTypes.array
    }
    render(){
        const queue = this.props.queue;
        return (
            <span>{queue.length}</span>
        )
    }
}

class Foo extends Component{
    static propTypes = {
        cache: PropTypes.object
    }
    render(){
        const cache = this.props.cache;
        return (
            <Fragment>
                <Bar queue={cache.queue} />
            </Fragment>
        )
    }
}

class TodoList extends Component{

    render(){
        return (
            <Foo cache={store.cache}/>
        )
    }
}



export default TodoList;











