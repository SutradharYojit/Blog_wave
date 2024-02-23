import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { StringManager } from "../../resources/string_manager";
import { RoutesName } from "../../resources/route_names";
import { styles } from "../../resources/style";
import { UserPreference } from "../../services/user_preference";

const SplashScreen = (props: any) => {
    const userPreference = new UserPreference();

    const handleClick = async () => {
        await userPreference.getUserInfo();

        console.log("after" + UserPreference.loggedIn);
        console.log("beafpper" + Boolean(UserPreference.loggedIn));

        if (UserPreference.loggedIn == 'true') {
            setTimeout(() => {
                props.navigation.replace(RoutesName.dashboardScreen);
            }, 2000
            );
        }
        else {
            setTimeout(() => {
                props.navigation.replace(RoutesName.loginScreen);
            }, 2000
            );
        }
    };

    useEffect(() => {
        handleClick();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.5, paddingTop: 185, }}>
                    <LottieView source={require('../../../assets/animations/splash_animation.json')} autoPlay loop
                        style={{ flex: 1 }} />
                </View>
                <Text style={styles.appTitle}> {StringManager.myApp} </Text>

            </View>
        </SafeAreaView >
    );
}



export default SplashScreen;



