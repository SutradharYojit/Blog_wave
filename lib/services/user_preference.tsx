import AsyncStorage from '@react-native-async-storage/async-storage'

export class UserPreference {

    static token: string;
    static loggedIn: string;
    static userId: string;

    async logout() {
        await AsyncStorage.setItem("token", "");
        await AsyncStorage.setItem("loggedIn", "false");
        await AsyncStorage.setItem("userId", "");
        console.log("LogOut successfully");
    }

    async getUserInfo() {
        UserPreference.token = await AsyncStorage.getItem("token") ?? "";
        UserPreference.loggedIn = await AsyncStorage.getItem("loggedIn") ?? "";
        UserPreference.userId = await AsyncStorage.getItem("userId") ?? "";
        console.log("Get data successfully");
    }

    async saveLoginUserInfo(token: string, userId: string) {
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("loggedIn", "true");
        await AsyncStorage.setItem("userId", userId);
        console.log("Set data successfully");
    }
}