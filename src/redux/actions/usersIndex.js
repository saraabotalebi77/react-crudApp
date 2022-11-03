import {EDIT_FORM ,ADD_FORM} from './actionTypes';
export const ADD_FORM_ACTION = ()=>{
    return async dispatch=>{
        await dispatch({
            type:ADD_FORM,
        })
    }
}

export const EDIT_FORM_ACTION = (usersIndex)=>{
    return async dispatch=>{
        await dispatch({
            type:EDIT_FORM,
            payload:usersIndex,
        })
    }
}