import { SET_BLOG_ITEM, SET_LOGIN_USER, SET_SIGNUP_USER } from "../../action/action_const"

const initialState = {
    message: "",
    success: false,

}

const addNewBlog = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_BLOG_ITEM:
            return {
                ...state,
                message: action.data.message,
                success: true,
            }
        default:
            return state
    }
}

export default addNewBlog
