import { put } from "redux-saga/effects";
import { APIConstants } from "../../services/api_constants";
import { UserPreference } from "../../services/user_preference";
import { SET_PROJECT, SET_PROJECT_DELETE, UPDATE_PROJECT_ITEM } from "../action/action_const";
import { ToastAndroid } from "react-native";
import { hideLoading, showLoading } from "../action/action";

export function* createProject(action: any): any {
    const { title, description, url, navigation } = action.payload;
    const body = {
        "title": title,
        "description": description,
        "projectUrl": url,
        "userId": UserPreference.userId
    }

    const uri = `${APIConstants.baseUrl}Project/createproject`;
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
        console.log(result);
        yield put({ type: SET_PROJECT, data: result });
        ToastAndroid.show('Project Created Successfully', ToastAndroid.SHORT);

    }
    catch (error) {
        console.error("Failed to Create Project", error);
    }
    finally {
        yield put(hideLoading());
    }
}

export function* fetchProject(action: any): any {

    // console.log("Enter fetch project API");
    const { userId } = action.payload;


    const uri = `${APIConstants.baseUrl}Project/userProjects/${userId}`;
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
        yield put({ type: SET_PROJECT, data: result, loading: true });
    }
    catch (error) {
        console.error("Failed to get project", error);
    }
}

export function* removeProject(action: any): any {

    const { projectId } = action.payload;

    // console.log("Enter fetch project API");

    const uri = `${APIConstants.baseUrl}Project/deleteProject/${projectId}`;
    try {
        let result: any = yield fetch(uri, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${UserPreference.token}`
            },
        }).then(res => {
            return res.json()
        });
        // console.log(result)
        yield put({ type: SET_PROJECT_DELETE, data: result, loading: true });
        ToastAndroid.show('Project deleted Successfully', ToastAndroid.SHORT);

    }
    catch (error) {
        console.error("Failed to delete project", error);
    }
}

export function* updateProjectInfo(action: any): any {
    const { title, description, url, id } = action.payload;
    const body = {
        "title": title,
        "description": description,
        "projectUrl": url,
        "id": id
    }

    const uri = `${APIConstants.baseUrl}Project/updateProject`;
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
        console.log(result);
        yield put({ type: UPDATE_PROJECT_ITEM, data: result });
        ToastAndroid.show('Project Updated Successfully', ToastAndroid.SHORT);
    }
    catch (error) {
        console.error("Failed to Update Project", error);
    }
    finally {
        yield put(hideLoading());
    }

}


