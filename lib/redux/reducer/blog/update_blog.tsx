import { SET_PROJECT_DELETE, SET_PROJECT_ITEM, UPDATE_PROJECT_ITEM } from "../../action/action_const"

const initialState = {
    staus: "",
    message: false
}

const updateProject = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_PROJECT_ITEM:
            return {
                ...state,
                staus: action.data.message,
                message: action.data.loading
            }
        default:
            return state
    }
}

export default updateProject
