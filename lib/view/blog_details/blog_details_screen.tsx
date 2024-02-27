import React, { PropsWithChildren } from "react";
import { GestureResponderEvent, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { Divider, } from "react-native-paper";
import { BlogModel } from "../../model/blog_model";
import { Utils } from "../../services/util";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { UserPreference } from "../../services/user_preference";
import { useDispatch } from "react-redux";
import { deleteBLog, fetchBlogInfo } from "../../redux/action/action";
import { RoutesName } from "../../resources/route_names";
import { ColorManager } from "../../resources/color_manager";
import { StringManager } from "../../resources/string_manager";
import IconButton from "../../components/buttons/icon_button";
import AppBar from "../../components/app_bar";



const BlogDetailsScreen = (props: any) => {

    const deleteBlog = () => {
        dispatch(deleteBLog({ blogId: blogDetail.id }));
        dispatch(fetchBlogInfo())
        props.navigation.goBack();
    }

    const editBlog = () => {
        props.navigation.navigate(RoutesName.addBlogScreen, {
            "userData": {
                "blogData": blogDetail,
                "updateblogs": true
            }
        });
    }
    const formatDate = new Utils();
    const { blogData } = props.route.params;
    const blogDetail: BlogModel = blogData;
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: ColorManager.whiteColor,
        }}>
            <AppBar title={StringManager.blogTxt} nav={() => {
                props.navigation.goBack();
            }}>
                {
                    blogDetail.userId == UserPreference.userId ?
                        <View style={{
                            flexDirection: 'row',
                            width: 65,
                            justifyContent: 'space-between'
                        }}>
                            <IconButton onPress={editBlog}>
                                <Icons name="pencil" size={28} color={ColorManager.blackColor}></Icons>
                            </IconButton>
                            <IconButton onPress={deleteBlog}>
                                <Icons name="delete" size={28} color={ColorManager.blackColor}></Icons>
                            </IconButton>
                        </View>
                        : null
                }
            </AppBar>
            <View style={{ flex: 1, padding: 15 }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>
                        {formatDate.formatDate(blogDetail.createdAt)}
                    </Text>
                    <Image source={{
                        uri: 'https://c4.wallpaperflare.com/wallpaper/404/780/895/multiple-display-dual-monitors-abstract-digital-art-wallpaper-thumb.jpg'
                    }} style={{ height: 200, borderRadius: 10, marginVertical: 15 }}>
                    </Image>
                    <Text style={{ fontSize: 17, color: ColorManager.blackColor }}>
                        {blogDetail.title}
                    </Text>
                    <Divider style={{ height: 2.5, backgroundColor: ColorManager.blackColor, marginVertical: 5 }}></Divider>
                    <Text style={{ fontSize: 19, fontWeight: '600', color: ColorManager.blackColor }}>
                        {blogDetail.description}
                    </Text>
                </View>
            </View>

        </SafeAreaView >
    );

}

export default BlogDetailsScreen;




