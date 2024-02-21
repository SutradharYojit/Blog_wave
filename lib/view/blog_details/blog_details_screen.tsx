import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { Divider, FAB } from "react-native-paper";
import WebView from "react-native-webview";
import { BlogModel } from "../../model/blog_model";
import { Utils } from "../../services/util";

const BlogDetailsScreen = (props: any) => {
    const formatDate = new Utils();
    const { blogData } = props.route.params;
    const blogDetail: BlogModel = blogData;

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>
                        {formatDate.formatDate(blogDetail.createdAt)}

                    </Text>
                    <Image source={{
                        uri: 'https://c4.wallpaperflare.com/wallpaper/404/780/895/multiple-display-dual-monitors-abstract-digital-art-wallpaper-thumb.jpg'
                    }} style={{ height: 200, borderRadius: 10, marginVertical: 15 }}>
                    </Image>
                    <Text style={{ fontSize: 17, color: 'black' }}>
                        {blogDetail.title}
                    </Text>
                    <Divider style={{ height: 2.5, backgroundColor: 'black', marginVertical: 5 }}></Divider>
                    <Text style={{ fontSize: 19, fontWeight: '600', color: 'black' }}>
                        {blogDetail.description}
                    </Text>

                </View>
                {/* <FAB
                    icon="plus"

                    style={{
                        position: 'absolute',
                        margin: 16,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'teal'
                    }}
                    onPress={() => console.log('Pressed')}
                /> */}
            </View>

        </SafeAreaView >
    );

}

export default BlogDetailsScreen;