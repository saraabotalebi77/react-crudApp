import Swal from 'sweetalert2';
import { UNSHOW_ADD_EDIT_PAGE_ACTION } from './../../redux/actions/showEdit_AddPage';
import { PUSH_USER_ACTION} from '../../redux/actions/users/push-user';
import { UPDATE_USER_ACTION } from '../../redux/actions/users/update-users';
import { userSchema } from './../../validation-form/validation-form';

//The page of adding or updating an user will be closed if the close icon is clicked
export const CloseIcon = (dispatch)=>{
    dispatch(
        UNSHOW_ADD_EDIT_PAGE_ACTION()
    )
}
//the submitHandler function is executed if submit event is run
function submitHandler(values,dispatch,usersIndex){
    // The userId state specifies whether operation is done (add or update)
    // if it be -1 , add operation is performed otherwise update operation
    if(usersIndex==-1){
        dispatch(
            PUSH_USER_ACTION(values)
        );
    }else{
        //show popup for editing user. edit user if confirmButton is clicked 
        Swal.fire({
            title: "<p>اطلاعات کاربر ویرایش شود ؟</p>",
            showCancelButton: true,
            confirmButtonText: '<span style="font-size:1.2rem;font-family:Vazir ">بله</span>',
            cancelButtonText : '<span style="font-size:1.2rem;font-family:Vazir ">خیر</span>',
        }).then((result) => {
            if (result.isConfirmed){
                dispatch(
                    UPDATE_USER_ACTION(usersIndex,values)
                    )
                }
            })
        }
    
}


export const formikFunction = (dispatch,users,usersIndex)=>{
    return(
        {
            initialValues : {
                firstName: users[usersIndex]?.firstName || "",
                lastName : users[usersIndex]?.lastName || "",
                email : users[usersIndex]?.email || "",
                phoneNumber :users[usersIndex]?.phoneNumber || "",
            },
            validationSchema:userSchema,
            onSubmit :(values)=>{
                submitHandler(values,dispatch,usersIndex);
                values = {};
            }
        }
    )
}