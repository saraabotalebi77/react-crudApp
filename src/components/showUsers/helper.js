import { SHOW_ADD_EDIT_PAGE_ACTION } from './../../redux/actions/showEdit_AddPage';
import { EDIT_FORM_ACTION } from '../../redux/actions/usersIndex';
import { DELETE_USER_ACTION } from './../../redux/actions/users/delete-user';
import Swal from 'sweetalert2';

// adding or editing page is opened if addUserBtn is clicked
export const addUserBtn = (dispatch)=>{
    dispatch(
        SHOW_ADD_EDIT_PAGE_ACTION()
    )
}

//delete specified user from users state and server if deleteUserBtn is clicked
export const deleteUserBtn = (index,dispatch)=>{
    //show popup for deleting user. delete user if confirmButton is clicked 
    Swal.fire({
        title: "<p>اطلاعات کاربر حذف شود ؟ </p>",
        showCancelButton: true,
        confirmButtonText: '<span style="font-size:1.2rem;font-family:Vazir ">بله</span>',
        cancelButtonText : '<span style="font-size:1.2rem;font-family:Vazir ">خیر</span>',
    }).then((result) => {
        if (result.isConfirmed){
          dispatch(
            DELETE_USER_ACTION(index)
          )
        }
    })
}
//edit specified user from users state and server if editUserBtn is clicked
export const editUserBtn = (index,dispatch)=>{
    //open editing od adding page for editing user
    dispatch(
        SHOW_ADD_EDIT_PAGE_ACTION()
    )
    //changing form for editing user
    dispatch(
        EDIT_FORM_ACTION(index)
    )
}