import React, { Component, Fragment } from 'react';
import {Button, Input, List} from "antd";

// 无状态组件 只有render函数的时候就可以这么写，无状态组件性能高。一般用于ui组件
const TodoListUi = (props)=>{
    return (
        <Fragment>
            <div>
                <Input placeholder='请输入' value={props.inputValue} onChange={(e)=>{props.handInputChange(e)}} style={{width: '300px'}}/>
                <Button type='primary' onClick={(e)=>{props.addList()}}>addList</Button>
            </div>
            <List style={{width: '500px'}}
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                  bordered
                  dataSource={props.list}
                  renderItem={(item, index) => (
                      <List.Item>
                          {item} <button onClick={(index)=>{props.deleteList(index)}}>X</button>
                      </List.Item>
                  )}
            />
        </Fragment>
    )
}
// class TodoListUi extends Component{
//     constructor(props){
//         super(props);
//         this.state = props;
//     }
//     render(){
//         return (
//             <Fragment>
//                 <div>
//                     <Input placeholder='请输入' value={this.props.inputValue} onChange={(e)=>{this.props.handInputChange(e)}} style={{width: '300px'}}/>
//                     <Button type='primary' onClick={(e)=>{this.props.addList()}}>addList</Button>
//                 </div>
//                 <List style={{width: '500px'}}
//                     // header={<div>Header</div>}
//                     // footer={<div>Footer</div>}
//                       bordered
//                       dataSource={this.props.list}
//                       renderItem={(item, index) => (
//                           <List.Item>
//                               {item} <button onClick={(index)=>{this.props.deleteList(index)}}>X</button>
//                           </List.Item>
//                       )}
//                 />
//             </Fragment>
//         )
//     }
// }
export default TodoListUi;
