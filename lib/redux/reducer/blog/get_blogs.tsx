import { BlogModel } from "../../../model/blog_model";
import { UserModel } from "../../../model/user_model";
import { SET_BLOG, } from "../../action/action_const"

// const initialState: BlogModel[] = [];

interface InitialState {
    blog: BlogModel[];
    loading: boolean;
}
const initialState: InitialState = {
    blog: [],
    loading: false
};

const getBlogs = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_BLOG:
            return {
                ...state,
                blog: action.data,
                loading: action.loading
            };
        default:
            return state
    }
}

export default getBlogs
