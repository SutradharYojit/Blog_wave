import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, LayoutAnimation } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { StringManager } from "../../resources/string_manager";
import { fontFamily } from "../../resources/assets_manager";
import { ColorManager } from "../../resources/color_manager";
import { RoutesName } from "../../resources/route_names";
import { styles } from "../../resources/style";

const SplashScreen = (props: any) => {

    const handleClick = async () => {
        setTimeout(() => {
            props.navigation.navigate(RoutesName.loginScreen);
        }, 2000
        );
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



