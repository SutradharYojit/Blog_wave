import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import WebView from "react-native-webview";

const WebViewScreen = (props: any) => {
    const { projectUrl } = props;
    return (
        <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
    );
}

export default WebViewScreen;