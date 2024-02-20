import { combineReducers } from "redux";
import Authreducer from "./auth/auth_reducer";
import getAllUsers from "./user/get_all_users";
import getUser from "./user/get_user";

const allReducers = combineReducers({
    Auth: Authreducer,
    Users: getAllUsers,
    User: getUser,
});
export default allReducers;