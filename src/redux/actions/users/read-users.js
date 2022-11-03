import { READ_USERS } from "./../actionTypes";
import { getUsers } from "../../../serverServices/serverServices";
export const READ_USERS_ACTION = ()=>{
    return async dispatch=>{
        try{
            const response = await getUsers();
            if(response.state==200){
                const data = await response.json();
                await dispatch({
                    type:READ_USERS,
                    payload:data,
                })
            }
        }catch(error){
            console.log("ERROR (Transfer data from server to users state) :",error.message);
        }
    }
}