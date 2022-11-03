import { UPDATE_USERS } from "./../actionTypes.js";
import { updateUser } from "./../../../serverServices/serverServices.js";
import Swal from 'sweetalert2';
import { UNSHOW_ADD_EDIT_PAGE_ACTION } from "./../showEdit_AddPage";
import { ADD_FORM_ACTION } from "../usersIndex";

export const UPDATE_USER_ACTION = (index,user)=>{
    return async(dispatch,getState)=>{
        //create deepcopy from users state
        const users = [...getState().users];
        try{
            // updateUser function updates the data in the server and gives the response object as a fullfielded result.
            const response = await updateUser(users[index].id,user);
            // If respose.status is equal to 200, it will display a popUp etc...
            if(response.status==200){
                Swal.fire({title:'اطلاعات کاربر با موفقیت ویرایش شد',
                    icon:'success',
                    showConfirmButton:true,
                    confirmButtonText:'<span style="font-size:1.2rem;font-family:Vazir ">باشه</span>',}
                );
                //updated user is taked from response object with json method and users state is updated by splice method
                const data = await response.json();
                users.splice(index,1,data);
                //dispatch users to users reducer
                await dispatch({
                    type: UPDATE_USERS,
                    payload:users,
                });
                //adding or updating page should be closed 
                await dispatch(
                    UNSHOW_ADD_EDIT_PAGE_ACTION()
                );
                //change page from updating to adding  page
                await dispatch(
                    ADD_FORM_ACTION()
                );
            }
        }
        catch(error){
            console.log("ERROR (update user from users state) :",error.message);
        }
    }
}