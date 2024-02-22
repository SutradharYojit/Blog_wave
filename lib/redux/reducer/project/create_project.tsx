import { SET_PROJECT_ITEM } from "../../action/action_const"

const initialState = {
    message: "",
    success: false,

}

const addNewProject = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PROJECT_ITEM:
            return {
                ...state,
                message: action.data.message,
                success: action.data.success,
            }
        default:
            return state
    }
}

export default addNewProject
