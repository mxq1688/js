import { Button } from 'antd';
import * as React from 'react';


interface IProps {
    title: string;
    content: string;
    detail?: string;
    onMyClick:any;
}

interface IState {
    count:number;

}

class Hello extends React.Component<IProps, IState>{
    public constructor(props:IProps) {
        super(props);
        this.state = {
            count: 1
        }
        this.handChange = this.handChange.bind(this)
        this.clickSend = this.clickSend.bind(this)
    }
    public handChange(){
        this.setState({
            count: this.state.count+1
        })
    }
    public clickSend(){
        this.props.onMyClick('youhoo')
    }
    public render(){
        const {title, content} = this.props;
        return (
            <div>
                <div>title:{title}</div>
                <div>content:{content}</div>
                <div>{this.state.count} <Button type="primary" onClick={this.handChange}>change</Button></div>
                <div><Button type="primary" onClick={this.clickSend} >send</Button></div>
            </div>
        )
    }
}

export default Hello;
