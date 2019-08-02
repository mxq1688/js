import React, { Component, Fragment } from 'react';

class News extends Component{
    constructor(props){
        super(props);
        // console.log(props);
    }
    render() {
        console.log(this.props);
        return (
            <Fragment>
                <div>news</div>
            </Fragment>
        )
    }
}
export default News;
