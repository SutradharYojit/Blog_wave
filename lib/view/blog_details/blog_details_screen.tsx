import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { Divider, FAB } from "react-native-paper";
import WebView from "react-native-webview";
const BlogDetailsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>
                        Published 10/10/2023
                    </Text>
                    <Image source={{
                        uri: 'https://c4.wallpaperflare.com/wallpaper/404/780/895/multiple-display-dual-monitors-abstract-digital-art-wallpaper-thumb.jpg'
                    }} style={{ height: 200, borderRadius: 10, marginVertical: 15 }}>
                    </Image>
                    <Text style={{ fontSize: 17, color: 'black' }}>
                        Where can I get some?
                    </Text>
                    <Divider style={{ height: 2.5, backgroundColor: 'black', marginVertical: 5 }}></Divider>
                    <Text style={{ fontSize: 19, fontWeight: '600', color: 'black' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>

                </View>
                <FAB
                    icon="plus"

                    style={{
                        position: 'absolute',
                        margin: 16,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'teal'
                    }}
                    onPress={() => console.log('Pressed')}
                />
            </View>

        </SafeAreaView >
    );

}

export default BlogDetailsScreen;