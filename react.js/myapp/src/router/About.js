import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'


class _aba extends Component{

    render(){
        console.log('aba',this.props);
        return (
            <div>
                hahah
            </div>
        )
    }
}
const Aba = withRouter(_aba);
class About extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <Fragment>
                <div>about</div>
                <Aba/>
            </Fragment>
        )
    }
}
export default About;
