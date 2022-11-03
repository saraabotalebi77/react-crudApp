import {DELETE_USER} from './../actionTypes.js';
import { deleteUser } from '../../../serverServices/serverServices.js';
import Swal from 'sweetalert2';
export const DELETE_USER_ACTION = (index)=>{
    return async(dispatch,getState)=>{
        //create deepcopy from users state
        const users = [...getState().users];
        try{
            //deleteUser function deletes the user with specified Id from the server and gives the response object as a fullfielded result.
            const response = await deleteUser(users[index].id);
            //If respose.status is equal to 200, it will display a popUp etc...
            if(response.status){
                Swal.fire({title:'کاربر با موفقیت حذف شد!',
                icon:'success',
                showConfirmButton:true,
                confirmButtonText:'<span style="font-size:1.2rem;font-family:Vazir ">باشه</span>'});
                // specified user is deleted from users state
                users.splice(index,1);
                await dispatch({
                    type:DELETE_USER,
                    payload:users,
                })
            }
        }catch(error){
            console.log("ERROR (delete user from users state) :",error.message);
        }
        
    }
}
