import { put } from "redux-saga/effects";
import { SET_LOGIN_USER, SET_SIGNUP_USER } from "../action/action_const";
import { RoutesName } from "../../resources/route_names";
import { UserPreference } from "../../services/user_preference";

// export function* LoginAPI(action: any): any {
//     console.log("Enter fetch API");

//     const uri = 'http://10.1.86.167:1234/Portfolio/getUserAll/3d3fb92e-472c-4719-87c5-dc114be7108d';
//     try {
//         let result: any = yield fetch(uri, {
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaHVsQGdtYWlsLmNvbSIsImlhdCI6MTcwODA2NjYwMH0.qvfHtBV1w0LiA_3x0LQzK8htymAICXWALevwmKKozZs'
//             },
//         }).then(res => {
//             return res.json()
//         });
//         console.log(result);
//         yield put({ type: SET_LOGIN_USER, data: result, loading: true });
//     }
//     catch (error) {
//         console.error("Failed to Login", error);
//     }
// }


export function* LoginAPI(action: any): any {
    const userPreference = new UserPreference();
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
        navigation.replace(RoutesName.dashboardScreen);
    }
    catch (error) {
        console.error("Failed to SignUp", error);
    }
}

