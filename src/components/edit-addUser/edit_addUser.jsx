import styles from './edit_addUser.module.css';
import {BsPersonPlusFill,BsPencilSquare,BsXLg} from "react-icons/bs";
import {useSelector,useDispatch} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { UNSHOW_ADD_EDIT_PAGE_ACTION } from './../../redux/actions/showEdit_AddPage';
import { PUSH_USER_ACTION} from '../../redux/actions/users/push-user';
import { UPDATE_USER_ACTION } from '../../redux/actions/users/update-users';
import {useFormik} from 'formik';
import { userSchema } from './../../validation-form/validation-form';
import { useState , useEffect } from 'react';

const EditAddUser = ()=>{
    const {users,usersIndex} = useSelector(store=>store);
    const [existInputValue,setExistInputValue] = useState(true);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues : {
            firstName: users[usersIndex]?.firstName || "",
            lastName : users[usersIndex]?.lastName || "",
            email : users[usersIndex]?.email || "",
            phoneNumber :users[usersIndex]?.phoneNumber || "",
        },
        validationSchema:userSchema,
        onSubmit :(values)=>{
            submitHandler(values);
        }
    });
    //The page of adding or updating an user will be closed if the close icon is clicked
    const CloseIcon = ()=>{
        dispatch(
            UNSHOW_ADD_EDIT_PAGE_ACTION()
        )
    }
    //the submitHandler function is executed if submit event is run
    function submitHandler(values){
        // The userId state specifies whether operation is done (add or update)
        // if it be -1 , add operation is performed otherwise update operation
        if(usersIndex==-1){
            dispatch(
                PUSH_USER_ACTION(values)
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
                    UPDATE_USER_ACTION(usersIndex,values)
                    )
                }
            })
        }
        setExistInputValue(false);
    }
    
    return(
        <div className={`${styles.editAddUser} m-h100vh w-100`}>
            <div className={`container m-h100vh row f-justify-content-center f-align-items-center `}>
                <div className={`${styles.formWrapper} col-11 col-sm-9 col-md-7 col-lg-5 p-0`}>
                    
                    <h1 className={`${styles.headerFormWrapper} bg-primary text-white d-flex f-justify-content-center f-align-items-center py-12`}>
                        <BsXLg className={`${styles.closeIcon} cursor-pointer`} onClick={CloseIcon}/>
                        {usersIndex==-1 ? <span>کاربر جدید</span> : <span>ویرایش کاربر</span>}
                    </h1>

                    <form className={`${styles.from}`} onSubmit={formik.handleSubmit}>
                        <fieldset className={`${styles.fieldsetForm} border-0`}>
                            
                            <div className={`${styles.inputFormWrapper} d-flex f-column`}>
                                <label htmlFor="firstName" className={`${styles.labelInputForm}`}>نام:</label>
                                <input type="text" id="firstName" name="firstName" className={`${styles.inputForm} f-family-vazir outline-0 rounded-3`}
                                value={existInputValue ? formik.values.firstName : ""}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{borderColor: `${formik.touched.firstName && formik.errors.firstName ? "red": "rgb(226, 226, 226)" }`}}/>
                                {(formik.touched.firstName && formik.errors.firstName) ? (<span style={{color:"red" , fontSize:"1rem"}}>{formik.errors.firstName}</span>) : null}
                                
                            </div>
                            <div className={`${styles.inputFormWrapper} d-flex f-column`}>
                                <label htmlFor="lastName" className={`${styles.labelInputForm}`}>نام خانوادگی:</label>
                                <input type="text" id="lastName" name="lastName" className={`${styles.inputForm} f-family-vazir outline-0 rounded-3`} 
                                value={existInputValue ? formik.values.lastName : ""}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{borderColor :`${formik.touched.lastName && formik.errors.lastName ?"red":"rgb(226, 226, 226)"}`}}/>
                                {(formik.touched.lastName && formik.errors.lastName) ? (<span style={{color:"red" , fontSize:"1rem"}}>{formik.errors.lastName}</span>) : null}
                            </div>
                            <div className={`${styles.inputFormWrapper} d-flex f-column`}>
                                <label htmlFor="email" className={`${styles.labelInputForm}`}>ایمیل:</label>
                                <input type="email" id="email" name="email" className={`${styles.inputForm} ${styles.emailInput} f-family-vazir outline-0 rounded-3`}
                                value={existInputValue ? formik.values.email : ""}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{borderColor :`${formik.touched.email && formik.errors.email ?"red":"rgb(226, 226, 226)"}`}}/>
                                {(formik.touched.email && formik.errors.email) ? (<span style={{color:"red" , fontSize:"1.2rem"}}>{formik.errors.email}</span>) : null}
                            </div>
                            <div className={`${styles.inputFormWrapper} d-flex f-column`}>
                                <label htmlFor="phoneNumber" className={`${styles.labelInputForm}`}>شماره موبایل:</label>
                                <input type="text" id="phoneNumber" name="phoneNumber" className={`${styles.inputForm} ${styles.phoneInput} f-family-vazir outline-0 rounded-3`}
                                value={existInputValue ? formik.values.phoneNumber : ""}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{borderColor :`${formik.touched.phoneNumber && formik.errors.phoneNumber ?"red": "rgb(226, 226, 226)"}`}}/>
                                {(formik.touched.phoneNumber && formik.errors.phoneNumber) ? (<span style={{color:"red" , fontSize:"1.2rem"}}>{formik.errors.phoneNumber}</span>) : null}
                            </div>
                            <div className={`${styles.formSubmitBtnWrapper} d-flex f-column`}>
                               {usersIndex==-1 ? <button type="submit" className={`${styles.formSubmitBtn} bg-secondary text-white f-family-vazir d-flex f-justify-content-center f-align-items-center gap-5 outline-0 border-0 p-5 rounded-3 cursor-pointer`}>
                                    افزودن <BsPersonPlusFill/>
                                </button> :
                                <button type="submit" className={`${styles.formSubmitBtn} bg-secondary text-white f-family-vazir d-flex f-justify-content-center f-align-items-center gap-5 outline-0 border-0 p-5 rounded-3 cursor-pointer`}>
                                        ویرایش <BsPencilSquare/>
                                </button>
                                }
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"/>
        </div>
    )
}
export default EditAddUser;