import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";

const WebViewScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    WebView Screen
                </Text>
            </View>
        </SafeAreaView >
    );

}

export default WebViewScreen;