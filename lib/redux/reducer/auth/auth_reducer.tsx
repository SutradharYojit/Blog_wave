import { SET_LOGIN_USER, SET_SIGNUP_USER } from "../../action/action_const"

const initialState = {
    message: "",
    success: false,
    userId: "",
    token: "",
    loading: false
}

const Authreducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LOGIN_USER:
            return {
                ...state,
                message: action.data.message,
                success: true,
                userId: action.data.userId,
                token: action.data.token,
                loading: action.loading
            }
        case SET_SIGNUP_USER:
            return {
                ...state,
                message: action.data.message,
                success: true,
                userId: action.data.userId,
                token: action.data.token
            }
        default:
            return state
    }
}

export default Authreducer
