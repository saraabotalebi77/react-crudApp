import styles from './edit_addUser.module.css';
import {BsPersonPlusFill,BsPencilSquare,BsXLg} from "react-icons/bs";
import {useSelector,useDispatch} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useFormik} from 'formik';
import { useState} from 'react';
import { formikFunction , CloseIcon } from './helper';

const EditAddUser = ()=>{
    const {users,usersIndex} = useSelector(store=>store);
    const dispatch = useDispatch();
    const formik = useFormik(formikFunction(dispatch,users,usersIndex));
    return(
        <div className={`${styles.editAddUser} m-h100vh w-100`}>
            <div className={`container m-h100vh row f-justify-content-center f-align-items-center `}>
                <div className={`${styles.formWrapper} col-11 col-sm-9 col-md-7 col-lg-5 p-0`}>
                    
                    <h1 className={`${styles.headerFormWrapper} bg-primary text-white d-flex f-justify-content-center f-align-items-center py-12`}>
                        <BsXLg className={`${styles.closeIcon} cursor-pointer`} onClick={()=>{CloseIcon(dispatch)}}/>
                        {usersIndex==-1 ? <span>کاربر جدید</span> : <span>ویرایش کاربر</span>}
                    </h1>

                    <form className={`${styles.from}`} onSubmit={formik.handleSubmit}>
                        <fieldset className={`${styles.fieldsetForm} border-0`}>
                            
                            <div className={`${styles.inputFormWrapper} d-flex f-column`}>
                                <label htmlFor="firstName" className={`${styles.labelInputForm}`}>نام:</label>
                                <input type="text" id="firstName" name="firstName" className={`${styles.inputForm} f-family-vazir outline-0 rounded-3`}
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{borderColor: `${formik.touched.firstName && formik.errors.firstName ? "red": "rgb(226, 226, 226)" }`}}/>
                                {(formik.touched.firstName && formik.errors.firstName) ? (<span style={{color:"red" , fontSize:"1rem"}}>{formik.errors.firstName}</span>) : null}
                                
                            </div>
                            <div className={`${styles.inputFormWrapper} d-flex f-column`}>
                                <label htmlFor="lastName" className={`${styles.labelInputForm}`}>نام خانوادگی:</label>
                                <input type="text" id="lastName" name="lastName" className={`${styles.inputForm} f-family-vazir outline-0 rounded-3`} 
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{borderColor :`${formik.touched.lastName && formik.errors.lastName ?"red":"rgb(226, 226, 226)"}`}}/>
                                {(formik.touched.lastName && formik.errors.lastName) ? (<span style={{color:"red" , fontSize:"1rem"}}>{formik.errors.lastName}</span>) : null}
                            </div>
                            <div className={`${styles.inputFormWrapper} d-flex f-column`}>
                                <label htmlFor="email" className={`${styles.labelInputForm}`}>ایمیل:</label>
                                <input type="email" id="email" name="email" className={`${styles.inputForm} ${styles.emailInput} f-family-vazir outline-0 rounded-3`}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{borderColor :`${formik.touched.email && formik.errors.email ?"red":"rgb(226, 226, 226)"}`}}/>
                                {(formik.touched.email && formik.errors.email) ? (<span style={{color:"red" , fontSize:"1.2rem"}}>{formik.errors.email}</span>) : null}
                            </div>
                            <div className={`${styles.inputFormWrapper} d-flex f-column`}>
                                <label htmlFor="phoneNumber" className={`${styles.labelInputForm}`}>شماره موبایل:</label>
                                <input type="text" id="phoneNumber" name="phoneNumber" className={`${styles.inputForm} ${styles.phoneInput} f-family-vazir outline-0 rounded-3`}
                                value={formik.values.phoneNumber}
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
        </div>
    )
}
export default EditAddUser;