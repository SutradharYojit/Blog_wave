import { SET_CONTACT_BLOGGER } from "../../action/action_const"

const initialState = {
    message: "",
    loading: false,
}

const contactUser = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CONTACT_BLOGGER:
            return {
                ...state,
                message: action.data.message,
                loading: true,
            }

        default:
            return state
    }
}

export default contactUser
