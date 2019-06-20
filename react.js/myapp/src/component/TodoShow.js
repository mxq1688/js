import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types'

class TodoShow extends Component{

    constructor(props){
        super(props);

    }
    render() {
        const { content } = this.props;
        //JSX->createElement->虚拟Dom(js对象)->真是dom
        // return (
        //     <div>
        //         {content}
        //     </div>
        // )
        return React.createElement('div', {}, content)
    }
}
export default TodoShow;
