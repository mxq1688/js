import {CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE} from "./actionTypes";

export const getInputChangeAction = (value)=>({
    type: CHANGE_INPUT_VALUE,
        value
})
export const getListChangeAction = (value)=>({
    type: CHANGE_LIST_VALUE,
        value
})
