import { UserModel } from "../../../model/user_model";
import { SET_USER, UPDATE_USERPROFILE, } from "../../action/action_const"


interface InitialState {
    user: UserModel[];
    loading: boolean;
}

const initialState: InitialState = {
    user: [],
    loading: false
};


const getUser = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.data,
                loading: action.loading
            }
        case UPDATE_USERPROFILE:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state
    }
}

export default getUser;
