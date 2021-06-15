import React, {Fragment, useState, useEffect } from 'react';
import 'antd/dist/antd.css'
import PropTypes from 'prop-types'
import { RecoilRoot, useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { Spin } from 'antd';
import { stat } from 'fs-extra';
import { listState, countState } from "./store";


const TodoItem = (props)=> {
    const {item, index} = props
    const setList = useSetRecoilState(listState)
    const selected = ()=>{
        setList((oldList)=>{
            const list = JSON.parse(JSON.stringify(oldList))
            list[index].finished = !list[index].finished
            return list
        })
    }
    return (
        <Fragment key={item.id}>
            <div style={{marginLeft: '10px'}}>
                <input type="checkbox" checked={item.finished} onClick={(index)=>{selected()}}/>
                <span style={{marginLeft: '10px'}}>{item.title}</span>
            </div>
        </Fragment>
    )
}


const TodoList = ()=>{
    const [state, setState] = useState({
        inputValue: '',
    })
    const [list, setList] = useRecoilState(listState);
    const count = useRecoilValue(countState)

    const addSub = ()=>{
        setList([
            ...list,
            {
                title: state.inputValue,
                finished: false
            }
        ])
        setState({...state, inputValue: ''})
       
         // setList((oldList)=>[
        //     ...oldList,
        //     {
        //         title: state.inputValue,
        //         finished: false
        //     }
        // ])
    }
    const setValue = (value)=>{
        setState({...state, inputValue: value})
    }
    return (
        <Fragment>
            <div><input type="text" value={state.inputValue} onChange={(e)=>{setValue(e.target.value)}}/>
                <button onClick={addSub}>addSub</button></div>
            <div>
                {
                    list && list.map((item,index)=>{
                        return(
                            <Fragment>
                                <TodoItem key={index} index={index} item={item}/>
                            </Fragment>
                        )

                    })
                }
            </div>
            <div>已选中{count}</div>
        </Fragment>
    )
}
    

function run(){
    return (
        <RecoilRoot>
            <TodoList />
        </RecoilRoot>
    )
}

export default run;
