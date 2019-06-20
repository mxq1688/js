import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List, Typography} from 'antd'
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
class TodoList extends Component{

    render() {
        return (
            <Fragment>
                <div>
                    <Input placeholder='请输入' style={{width: '300px'}}/> <Button type='primary'>submit</Button>
                </div>
                <List style={{width: '500px'}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
}

export default TodoList;
