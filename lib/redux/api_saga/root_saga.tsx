import { takeEvery } from "redux-saga/effects";
import {
    CREATE_BLOG,
    CREATE_PROJECT,
    DELETE_BLOG,
    DELETE_PROJECTS,
    GET_ALL_USERS,
    GET_BLOG,
    GET_LOGIN_USER,
    GET_PROJECTS,
    GET_SIGNUP_USER,
    GET_USER,
    UPDATE_BLOG,
    UPDATE_PROJECT,
    UPDATE_USER
} from "../action/action_const";
import { LoginAPI, SignUpAPI } from "./auth_api";
import { editUser, fetchAllUsers, fetchUser, } from "./users_api";
import { createBlog, fetchBlogs, removeBlog, updateBlogInfo } from "./blog_api";
import { createProject, fetchProject, removeProject, updateProjectInfo } from "./project_api";

function* sagaData(): any {
    yield takeEvery(GET_LOGIN_USER, LoginAPI);
    yield takeEvery(GET_SIGNUP_USER, SignUpAPI);
    yield takeEvery(GET_ALL_USERS, fetchAllUsers);
    yield takeEvery(GET_USER, fetchUser);
    yield takeEvery(CREATE_BLOG, createBlog);
    yield takeEvery(UPDATE_USER, editUser);
    yield takeEvery(GET_BLOG, fetchBlogs);
    yield takeEvery(CREATE_PROJECT, createProject);
    yield takeEvery(GET_PROJECTS, fetchProject);
    yield takeEvery(DELETE_PROJECTS, removeProject);
    yield takeEvery(UPDATE_PROJECT, updateProjectInfo);
    yield takeEvery(UPDATE_BLOG, updateBlogInfo);
    yield takeEvery(DELETE_BLOG, removeBlog);
}

export default sagaData;