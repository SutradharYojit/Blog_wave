import { put } from "redux-saga/effects";
import { APIConstants } from "../../services/api_constants";
import { UserPreference } from "../../services/user_preference";
import { DELETE_BLOG_ITEM, SET_ALL_USERS, SET_BLOG, SET_BLOG_ITEM, UPDATE_BLOG_ITEM } from "../action/action_const";
import { ToastAndroid } from "react-native";

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
        yield put({ type: SET_BLOG_ITEM, data: result });
        ToastAndroid.show('Blog Create Successfully', ToastAndroid.SHORT);

    }
    catch (error) {
        console.error("Failed to Create Blog", error);
    }
}

export function* fetchBlogs(): any {

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

export function* removeBlog(action: any): any {

    const { blogId } = action.payload;

    const uri = `${APIConstants.baseUrl}blog/deleteBlog/${blogId}`;
    try {
        let result: any = yield fetch(uri, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${UserPreference.token}`
            },
        }).then(res => {
            return res.json()
        });
        yield put({ type: DELETE_BLOG_ITEM, data: result, loading: true });
        ToastAndroid.show('Blog deleted Successfully', ToastAndroid.SHORT);
    }
    catch (error) {
        console.error("Failed to delete project", error);
    }
}

export function* updateBlogInfo(action: any): any {
    const { title, description, id } = action.payload;
    const body = {
        "title": title,
        "description": description,
        "id": id
    }

    const uri = `${APIConstants.baseUrl}blog/updateBlog`;
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
        yield put({ type: UPDATE_BLOG_ITEM, data: result });
        ToastAndroid.show('Blog Updated Successfully', ToastAndroid.SHORT);
    }
    catch (error) {
        console.error("Failed to Blog Project", error);
    }
}
