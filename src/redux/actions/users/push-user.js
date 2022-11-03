import {PUSH_USER} from './../actionTypes.js';
import {postUser} from '../../../serverServices/serverServices';
import {toast} from 'react-toastify';
import styles from './../../../components/edit-addUser/edit_addUser.module.css';
export const PUSH_USER_ACTION = (user)=>{
    return async(dispatch,getState)=>{
        //send user to server . if response.state is equal 201 , show toast.succes popup   
        try{
            const response = await postUser(user);
            const data = await response.json();
            if(response.status==201){
                toast.success(<p className={styles.toastStyle}><b>کاربر اضافه شد </b></p>,{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                // create deepcopy from users state and push new user to cloned users
                const users = [...getState().users];
                users.push(data);
                //dispatch cloned users into users reducer
                await dispatch({
                    type: PUSH_USER,
                    payload:users,
                })
            }
        }catch(error){
            console.log("ERROR (push user to users state) :",error.message);
        }
    }
}
