import { ProjectModel } from "../../../model/project_model";
import { SET_PROJECT, } from "../../action/action_const"

interface InitialState {
    project: ProjectModel[];
    loading: boolean;
}
const initialState: InitialState = {
    project: [],
    loading: false
};

const getProjects = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PROJECT:
            return {
                ...state,
                project: action.data,
                loading: action.loading
            };
        default:
            return state
    }
}

export default getProjects
