import { combineReducers } from "redux";
import Authreducer from "./auth/auth_reducer";

const allReducers = combineReducers({
    Auth: Authreducer,
});
export default allReducers;