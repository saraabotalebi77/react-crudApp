import Users from "./reducers/usersReducer";
import UsersIndex from "./reducers/usersIndexReducer";
import showEdit_AddPage from "./reducers/showEdit_AddPageReducer";
import { combineReducers } from "redux";
const Reducers = combineReducers({
    users : Users,
    showEdit_AddPage: showEdit_AddPage,
    usersIndex : UsersIndex,
})

export default Reducers;