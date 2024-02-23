import { put } from "redux-saga/effects";
import { APIConstants } from "../../services/api_constants";
import { UserPreference } from "../../services/user_preference";
import { SET_CONTACT_BLOGGER, SET_PROJECT, SET_PROJECT_DELETE, UPDATE_PROJECT_ITEM } from "../action/action_const";
import { ToastAndroid } from "react-native";

export function* sentMail(action: any): any {
    const { email, bloggerName, title, message } = action.payload;
    const body = {
        "email": email,
        "bloggerName": bloggerName,
        "title": title,
        "message": message
    }

    const uri = `${APIConstants.baseUrl}mail/sendEmail`;
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
        console.log(result);
        yield put({ type: SET_CONTACT_BLOGGER, data: result });
        ToastAndroid.show('Mail Sent Successfully', ToastAndroid.SHORT);
    }
    catch (error) {
        console.error("Failed to Sent mail", error);
    }
}