import { UserModel } from "../../../model/user_model";
import { SET_ALL_USERS, } from "../../action/action_const"


interface InitialState {
    user: UserModel[];
    loading: boolean;
}

const initialState: InitialState = {
    user: [],
    loading: false
};

const getUsers = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ALL_USERS:
            return {
                ...state,
                user: action.data,
                loading: action.loading

            }
        default:
            return state
    }
}

export default getUsers
