import { takeEvery } from "redux-saga/effects";
import {
    CREATE_BLOG,
    GET_ALL_USERS,
    GET_BLOG,
    GET_LOGIN_USER,
    GET_SIGNUP_USER,
    GET_USER,
    UPDATE_USER
} from "../action/action_const";
import { LoginAPI, SignUpAPI } from "./auth_api";
import { editUser, fetchAllUsers, fetchUser, } from "./users_api";
import { createBlog, fetchBlogs } from "./blog_api";

function* sagaData(): any {
    yield takeEvery(GET_LOGIN_USER, LoginAPI);
    yield takeEvery(GET_SIGNUP_USER, SignUpAPI);
    yield takeEvery(GET_ALL_USERS, fetchAllUsers);
    yield takeEvery(GET_USER, fetchUser);
    yield takeEvery(CREATE_BLOG, createBlog);
    yield takeEvery(UPDATE_USER, editUser);
    yield takeEvery(GET_BLOG, fetchBlogs);
}

export default sagaData;