import styles from './showUsers.module.css';
import {BsTrash,BsPersonPlusFill,BsPencilSquare} from "react-icons/bs";
import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from 'react';
import {READ_USERS_ACTION} from '../../redux/actions/users/read-users';
import {addUserBtn,deleteUserBtn,editUserBtn} from './helper.js'

const ShowUsers =()=>{
    const {users} = useSelector(store=>store);
    const dispatch = useDispatch();
    
    //get all users from server
    useEffect(() => {
        dispatch(
            READ_USERS_ACTION()
        )
    },[]);
    return(
        <div className={`container m-h100vh row f-align-items-center f-justify-content-center`}>
            <div className={`${styles.showUsersWrapper} col col-lg-8 p-0 rounded-15`}>
                <div className={`${styles.showUsersTableContainer} w-100`}>
                    <table className={`w-100`}>
                        <thead className={`bg-primary text-white`}>
                            <tr>
                                <th className={`col-1 py-12 px-5 text-center`}>نام</th>
                                <th className={`col-2 py-12 px-5 text-center`}>نام خانوادگی</th>
                                <th className={`col-3 py-12 px-5 text-center`}>موبایل</th>
                                <th className={`col-3 py-12 px-5 text-center`}>ایمیل</th>
                                <th className={`col-2 py-12 px-5 text-center`}>عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user,index)=>(
                                <tr key={index}>
                                    <td className={`col-1 py-12 px-5 text-center`}>{user.firstName}</td>
                                    <td className={`col-2 py-12 px-5 text-center`}>{user.lastName}</td>
                                    <td className={`col-3 py-12 px-5 text-center`}>{user.phoneNumber}</td>
                                    <td className={`col-3 py-12 px-5 text-center`}>{user.email}</td>
                                    <td className={`col-2 py-12 px-5 text-center w-100 d-flex f-justify-content-center f-align-items-center gap-5`}>
                                        <button className={`${styles.deleteUserBtn} p-5 cursor-pointer bg-secondary text-white d-flex f-justify-content-center f-align-items-center outline-0 border-0 rounded-3`}
                                        onClick={()=>deleteUserBtn(index,dispatch)}>
                                            <BsTrash/>
                                        </button>
                                        <button className={`${styles.editUserBtn} p-5 cursor-pointer bg-secondary text-white d-flex f-justify-content-center f-align-items-center outline-0 border-0 rounded-3`}
                                        onClick={()=>editUserBtn(index,dispatch)}>
                                         <BsPencilSquare/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
                <div>
                    <button className={`${styles.addUserBtn} cursor-pointer py-12 bg-tertiary w-100 outline-0 border-0 text-white f-family-vazir d-flex f-justify-content-center f-align-items-center gap-5`}
                    onClick={()=>addUserBtn(dispatch)}>
                    برای اضافه کردن کاربر جدید کلیک کنید <BsPersonPlusFill style={{fontSize:"2rem"}} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShowUsers;