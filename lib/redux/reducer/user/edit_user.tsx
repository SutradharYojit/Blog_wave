import { SET_BLOG_ITEM, SET_LOGIN_USER, SET_SIGNUP_USER, SET_USER_DATA } from "../../action/action_const"

const initialState = {
    message: "",
    success: false,

}

const updateUserDoc = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                message: action.data.message,
                success: true,
            }
        
        default:
            return state
    }
}

export default updateUserDoc
