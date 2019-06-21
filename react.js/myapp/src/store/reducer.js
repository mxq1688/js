import {CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE} from "../store/actionTypes";

const defaultState = {
    inputValue: '11',
    list: ['11111', '22222']
}

// reducer可以接受state，但绝对不能修改state
export default (state = defaultState, action)=>{
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState;
    }
    if(action.type === CHANGE_LIST_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.value;
        newState.inputValue = ''
        return newState
    }
    return state
}
