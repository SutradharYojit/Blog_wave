import React from "react";
import { ActivityIndicator, View } from "react-native";
import { ColorManager } from "../resources/color_manager";


const Loading = () => {
    return (
        <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            <ActivityIndicator size="large" color={ColorManager.blackColor} />
        </View>
    );

}


export default Loading;