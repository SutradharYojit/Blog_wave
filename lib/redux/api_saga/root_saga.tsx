import { takeEvery } from "redux-saga/effects";
import { GET_ALL_USERS, GET_LOGIN_USER, GET_SIGNUP_USER, GET_USER } from "../action/action_const";
import { LoginAPI, SignUpAPI } from "./auth_api";
import { fetchAllUsers, fetchUser, } from "./users_api";

function* sagaData(): any {
    yield takeEvery(GET_LOGIN_USER, LoginAPI);
    yield takeEvery(GET_SIGNUP_USER, SignUpAPI);
    yield takeEvery(GET_ALL_USERS, fetchAllUsers);
    yield takeEvery(GET_USER, fetchUser);

}

export default sagaData;