import * as React from 'react';

import ListItem from '../component/ListItem'

interface IState {
    dataInfo: {
        artgallery: []
    }
}
class List extends React.Component<{}, IState>{
    public constructor(props:any) {
        super(props);
        this.state = {
            dataInfo: {
                artgallery:[]
            }
        }
    }
    public componentDidMount(): void {
        fetch("https://tuhuaxinyu.dofo.cn/njs/public/thxy_api/course/getCourse?uid=24&pid=-1&page=1&count=5")
            .then(res=>res.json())
            .then(data=>{
                console.log(data.data.info);
                this.setState({
                    dataInfo: data.data.info
                })
            })
    }
    public render(){
        return (
            <div>List:
                {
                    this.state.dataInfo.artgallery.map((value, index)=>{
                        return (
                           <ListItem key={index} data={value}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default List;
