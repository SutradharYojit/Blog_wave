import { put } from "redux-saga/effects";
import { SET_ALL_USERS, SET_USER } from "../action/action_const";
import { UserPreference } from "../../services/user_preference";


export function* fetchAllUsers(): any {
    console.log("asdasd")
    const uri = `http://10.1.86.167:1234/Portfolio/getUserAll/${UserPreference.userId}`;
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
        console.log(result);
        yield put({ type: SET_ALL_USERS, data: result });
    }
    catch (error) {
        console.error("Failed to get all user", error);
    }
}

export function* fetchUser(): any {

    console.log("Enter fetch API");

    const uri = `http://10.1.86.167:1234/Portfolio/getUser/${UserPreference.userId}`;
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
        console.log(result);
        yield put({ type: SET_USER, data: result });
    }
    catch (error) {
        console.error("Failed to get user", error);
    }
}