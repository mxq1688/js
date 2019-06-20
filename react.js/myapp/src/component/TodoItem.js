import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types'

class TodoItem extends Component{

    constructor(props){
        super(props);

    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.item !== this.props.item){
            return true;
        }
        return false
    }

    deleteList(index){
        const { deleteItem } = this.props;
        deleteItem();
    }
    render() {
        const { item } = this.props;
        return (
            <Fragment>
                <li >

                    {item}
                </li>
                <button onClick={this.deleteList.bind(this)}>X</button>
            </Fragment>
        )
    }
}
TodoItem.propTypes = {
    item: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    deleteItem: PropTypes.func,
    index: PropTypes.number
};
TodoItem.defaultProps = {
    item: '123'
};

export default TodoItem;
