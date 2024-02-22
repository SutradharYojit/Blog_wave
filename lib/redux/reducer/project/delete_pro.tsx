import { SET_PROJECT_DELETE, SET_PROJECT_ITEM } from "../../action/action_const"

const initialState = {
    message: "",
    loading: false
}

const deleteProject = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PROJECT_DELETE:
            return {
                ...state,
                message: action.data.message,
                loading: action.data.loading
            }
        default:
            return state
    }
}

export default deleteProject
