import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";


const Loading = () => {
    return (
        <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            <ActivityIndicator size="large" color="black" />
        </View>
    );

}


export default Loading;