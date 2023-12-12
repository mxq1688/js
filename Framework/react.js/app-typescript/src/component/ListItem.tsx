import * as React from 'react';

interface IProps {
    data: any;
}

class ListItem extends React.Component<IProps>{

    public render(){
        const {title} = this.props.data
        return (
            <div>
                {title}
            </div>
        )
    }
}

export default ListItem;
