import { UserModel } from "../../../model/user_model";
import { SET_ALL_USERS, } from "../../action/action_const"



const initialState: UserModel[] = [];

const getUsers = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ALL_USERS:
            return [
                ...state,
                ...action.data
            ]
        default:
            return state
    }
}

export default getUsers
