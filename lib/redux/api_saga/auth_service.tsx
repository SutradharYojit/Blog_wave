import { put, takeEvery } from "redux-saga/effects";
import { GET_LOGIN_USER, SET_LOGIN_USER, SET_SIGNUP_USER } from "../action/action_const";
import { RoutesName } from "../../resources/route_names";

export function* LoginAPI(action: any): any {
    const { email, pass } = action.payload;
    const { navigation } = action;
    const body = {
        "email": email,
        "password": pass
    }
    const uri = 'http://10.1.86.167:1234/user/login';
    try {
        let result: any = yield fetch(uri, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => {

            return res.json()
        });
        console.log(result);
        yield put({ type: SET_LOGIN_USER, data: result, loading: true })
        navigation.navigate(RoutesName.dashboardScreen);
    }
    catch (error) {
        console.error("Failed to Login", error);
    }
}

export function* SignUpAPI(action: any): any {
    const { name, email, pass } = action.payload;
    const { navigation } = action;
    const body = {
        "userName": name,
        "email": email,
        "password": pass
    }
    const uri = 'http://10.1.86.167:1234/user/signUp';

    try {
        let result: any = yield fetch(uri, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json());
        console.log(result);
        yield put({ type: SET_SIGNUP_USER, data: result });
        navigation.navigate(RoutesName.dashboardScreen);
    }
    catch (error) {
        console.error("Failed to SignUp", error);
    }
}

