import {SHOW_ADD_EDIT_PAGE ,UNSHOW_ADD_EDIT_PAGE} from '../actions/actionTypes'
export default function showEdit_AddPage(state=false , action){
    switch(action.type){
        case SHOW_ADD_EDIT_PAGE:
            return true;
        case UNSHOW_ADD_EDIT_PAGE:
            return false;
        default:
            return state;
    }

}