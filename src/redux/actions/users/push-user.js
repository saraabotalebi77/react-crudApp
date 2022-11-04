import {PUSH_USER, UNSHOW_ADD_EDIT_PAGE} from './../actionTypes.js';
import {postUser} from '../../../serverServices/serverServices';
import styles from './../../../components/edit-addUser/edit_addUser.module.css';
export const PUSH_USER_ACTION = (user)=>{
    return async(dispatch,getState)=>{
        //send user to server . if response.state is equal 201 , show toast.succes popup   
        try{
            const response = await postUser(user);
            const data = await response.json();
            if(response.status==201){
                // create deepcopy from users state and push new user to cloned users
                const users = [...getState().users];
                users.push(data);
                //dispatch cloned users into users reducer
                await dispatch({
                    type: PUSH_USER,
                    payload:users,
                })
                await dispatch({
                    type: UNSHOW_ADD_EDIT_PAGE,
                })
            }
        }catch(error){
            console.log("ERROR (push user to users state) :",error.message);
        }
    }
}
