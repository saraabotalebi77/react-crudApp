import Swal from 'sweetalert2';
import { PUSH_USER_ACTION} from '../../redux/actions/users/push-user';
import { UPDATE_USER_ACTION } from '../../redux/actions/users/update-users';


//initialValues function return initialValues for formik object
// const initialValues = (users,userId) =>{
//     if(userId){
//         return({
//             firstName: users[userId].firstName,
//             lastName : users[userId].lastName,
//             email : users[userId].email,
//             phoneNumber : users[userId].phoneNumber,
//         })
//     }
//     return({
//         firstName: "",
//         lastName : "",
//         email : "",
//         phoneNumber : "",
//     })
// } 

//the submitHandler function is executed if submit event is run
const submitHandler = (userId,dispatch,values)=>{
    // The userId state specifies whether operation is done (add or update)
    // if it be 0 , add operation is performed otherwise update operation
    if(userId==0){
        dispatch(
            PUSH_USER_ACTION()
        )
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
                    UPDATE_USER_ACTION(userId,values)
                )
            }
        })
    }
}

export const formikObject = (dispatch,users,userId)=>({
    initialValues : userId ? {
        firstName: users[userId].firstName,
        lastName : users[userId].lastName,
        email : users[userId].email,
        phoneNumber : users[userId].phoneNumber,
    }:
    {
        firstName: "",
        lastName : "",
        email : "",
        phoneNumber : "",
    },
    validationSchema:userSchema,
    onSubmit :submitHandler(userId,dispatch),
})