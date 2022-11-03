import {ADD_FORM,EDIT_FORM} from '../actions/actionTypes.js';
export default function usersIndex(state=-1 , action){
    switch(action.type){
        case EDIT_FORM:
            return action.payload;
        case ADD_FORM:
            return -1;
        default:
            return state;
    }
}