import {SHOW_ADD_EDIT_PAGE,UNSHOW_ADD_EDIT_PAGE} from './actionTypes';

export const SHOW_ADD_EDIT_PAGE_ACTION = ()=>{
    return async dispatch=>{
        await dispatch({
            type:SHOW_ADD_EDIT_PAGE,
        })
    } 
}

export const UNSHOW_ADD_EDIT_PAGE_ACTION = ()=>{
    return async dispatch=>{
        await dispatch({
            type:UNSHOW_ADD_EDIT_PAGE
        })
    }
}