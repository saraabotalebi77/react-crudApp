import {DELETE_USER,READ_USERS,UPDATE_USERS,PUSH_USER} from '../actions/actionTypes'
export default function Users(users=[],action){
    switch(action.type){
        case PUSH_USER:{
            return action.payload;
        }
        case DELETE_USER:{
            return action.payload;
        }
        case UPDATE_USERS:{
            return action.payload;
        }
        case READ_USERS:{
            return action.payload;
        }
        default:
            return users;
    }
}