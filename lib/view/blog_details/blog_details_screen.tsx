import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { Divider, FAB } from "react-native-paper";
import WebView from "react-native-webview";
import { BlogModel } from "../../model/blog_model";
import { Utils } from "../../services/util";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { UserPreference } from "../../services/user_preference";
import { useDispatch } from "react-redux";
import { deleteBLog, featchProjectInfo, fetchBlogInfo } from "../../redux/action/action";
import { RoutesName } from "../../resources/route_names";

const BlogDetailsScreen = (props: any) => {
    const formatDate = new Utils();
    const { blogData } = props.route.params;
    const blogDetail: BlogModel = blogData;
    const dispatch = useDispatch();


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={{
                paddingHorizontal: 15,
                height: 55,
                flexDirection: 'row',
                backgroundColor: "white",
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity onPress={() => {
                        console.log("asdasd");
                        props.navigation.goBack();
                    }}>
                        <Icons name="arrow-left" size={25} color="black"></Icons>
                    </TouchableOpacity>
                    <Text
                        style={{
                            textAlignVertical: "center",
                            color: 'black',
                            fontSize: 20,
                            fontWeight: '500',
                            paddingLeft: 20
                        }}>
                        Blog
                    </Text>
                </View>
                {
                    blogDetail.userId == UserPreference.userId ? <View style={{
                        flexDirection: 'row',
                        width: 65,
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity onPress={() => {
                            console.log("asdasd")
                            props.navigation.navigate(RoutesName.addBlogScreen, {
                                "userData": {
                                    "blogData": blogDetail,
                                    "updateblogs": true
                                }
                            });

                        }}>
                            <Icons name="pencil" size={28} color="black"></Icons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            dispatch(deleteBLog({ blogId: blogDetail.id }));
                            dispatch(fetchBlogInfo())
                            props.navigation.goBack();
                        }}>
                            <Icons name="delete" size={28} color="black"></Icons>
                        </TouchableOpacity>
                    </View> : null

                }

            </View>
            <View style={{ flex: 1, padding: 15 }}>
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