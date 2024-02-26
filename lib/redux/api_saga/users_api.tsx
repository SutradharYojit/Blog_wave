import { put } from "redux-saga/effects";
import { SET_ALL_USERS, SET_USER, SET_USER_DATA } from "../action/action_const";
import { UserPreference } from "../../services/user_preference";
import { APIConstants } from "../../services/api_constants";


export function* fetchAllUsers(): any {

    const uri = `${APIConstants.baseUrl}Portfolio/getUserAll/${UserPreference.userId}`;
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
        yield put({ type: SET_ALL_USERS, data: result, loading: true });
    }
    catch (error) {
        console.error("Failed to get all user", error);
    }
}

export function* fetchUser(): any {

    // console.log("Enter fetch API");

    const uri = `${APIConstants.baseUrl}Portfolio/getUser/${UserPreference.userId}`;
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
        yield put({ type: SET_USER, data: result, loading: true });
    }
    catch (error) {
        console.error("Failed to get user", error);
    }
}

export function* editUser(action: any): any {
    const { userName, email, bio } = action.payload;

    // console.log("Enter Edit API");
    const body = {
        "id": UserPreference.userId,
        "userName": userName,
        "email": email,
        "bio": bio
    }

    const uri = `${APIConstants.baseUrl}Portfolio/updateProfile`;
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
        console.log(result)
        yield put({ type: SET_USER_DATA, data: result });
    }
    catch (error) {
        console.error("Failed to UpdateUser", error);
    }
}