import { takeEvery } from "redux-saga/effects";
import { GET_LOGIN_USER, GET_SIGNUP_USER } from "../action/action_const";
import { LoginAPI, SignUpAPI } from "./auth_service";

function* sagaData(): any {
    yield takeEvery(GET_LOGIN_USER, LoginAPI);
    yield takeEvery(GET_SIGNUP_USER, SignUpAPI);


}

export default sagaData;