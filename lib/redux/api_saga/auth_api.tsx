import { put } from "redux-saga/effects";
import { SET_LOGIN_USER, SET_SIGNUP_USER } from "../action/action_const";
import { RoutesName } from "../../resources/route_names";
import { UserPreference } from "../../services/user_preference";
import { APIConstants } from "../../services/api_constants";

export function* LoginAPI(action: any): any {
    const userPreference = new UserPreference();
    const { email, pass } = action.payload;
    const { navigation } = action;
    const body = {
        "email": email,
        "password": pass
    }
    const uri = `${APIConstants.baseUrl}user/login`;
    
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
        yield put({ type: SET_LOGIN_USER, data: result, loading: true });
        yield userPreference.saveLoginUserInfo(result.token, result.userId);
        navigation.replace(RoutesName.dashboardScreen);
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
    const uri = `${APIConstants.baseUrl}user/signUp`;

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
        navigation.replace(RoutesName.dashboardScreen);
    }
    catch (error) {
        console.error("Failed to SignUp", error);
    }
}

