// reducer.tsx
import { HIDE_LOADING, SHOW_LOADING } from "../../action/action_const";

const initialState = {
    isLoading: false,
};

const loadingReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case HIDE_LOADING:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default loadingReducer;
