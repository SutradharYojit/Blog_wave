import { UserModel } from "../../../model/user_model";
import { SET_USER, } from "../../action/action_const"

const initialState: UserModel[] = [];

const getUser = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER:
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}

export default getUser;
