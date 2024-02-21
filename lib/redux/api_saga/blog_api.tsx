import { put } from "redux-saga/effects";
import { APIConstants } from "../../services/api_constants";
import { UserPreference } from "../../services/user_preference";
import { SET_ALL_USERS, SET_BLOG, SET_BLOG_ITEM } from "../action/action_const";

export function* createBlog(action: any): any {
    const { title, description } = action.payload;
    const body = {
        "title": title,
        "description": description,
        "userId": UserPreference.userId
    }

    const uri = `${APIConstants.baseUrl}blog/createBlog`;
    try {
        let result: any = yield fetch(uri, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${UserPreference.token}`
            },
            body: JSON.stringify(body)
        }).then(res => {
            return res.json()
        });
        console.log(result);
        yield put({ type: SET_BLOG_ITEM, data: result });
    }
    catch (error) {
        console.error("Failed to Create Blog", error);
    }
}

export function* fetchBlogs(): any {

    console.log("Enter fetch Blogs API");

    const uri = `${APIConstants.baseUrl}blog/getBlogs`;
    try {
        let result: any = yield fetch(uri, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${UserPreference.token}`
            },
        }).then(res => {
            return res.json()
        });
        // console.log(result)
        yield put({ type: SET_BLOG, data: result, loading: true });
    }
    catch (error) {
        console.error("Failed to get user", error);
    }
}

