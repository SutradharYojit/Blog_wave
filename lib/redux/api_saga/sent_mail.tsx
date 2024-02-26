import { put } from "redux-saga/effects";
import { APIConstants } from "../../services/api_constants";
import { UserPreference } from "../../services/user_preference";
import { SET_CONTACT_BLOGGER } from "../action/action_const";
import { ToastAndroid } from "react-native";
import { hideLoading, showLoading } from "../action/action";

export function* sentMail(action: any): any {

    const { email, bloggerName, title, message, navigation } = action.payload;

    const body = {
        "email": email,
        "bloggerName": bloggerName,
        "title": title,
        "message": message
    }

    const uri = `${APIConstants.baseUrl}mail/sendEmail`;
    try {
        yield put(showLoading());
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
        // console.log(result);
        yield put({ type: SET_CONTACT_BLOGGER, data: result });
        ToastAndroid.show('Mail Sent Successfully', ToastAndroid.SHORT);
    }
    catch (error) {
        console.error("Failed to Sent mail", error);
    }
    finally {
        yield put(hideLoading());
        navigation.goBack();
    }
}