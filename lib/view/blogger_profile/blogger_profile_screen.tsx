import React, { useDebugValue, useEffect } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserModel } from "../../model/user_model";
import { RoutesName } from "../../resources/route_names";
import { useDispatch, useSelector } from "react-redux";
import { featchProjectInfo } from "../../redux/action/action";
import { ProjectModel } from "../../model/project_model";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { UserPreference } from "../../services/user_preference";
import { StringManager } from "../../resources/string_manager";
import { ColorManager } from "../../resources/color_manager";
import AppBar from "../../components/app_bar";


const BloggerProfileScreen = (props: any) => {
    const dispatch = useDispatch();

    const { userData } = props.route.params;
    // console.log(userData.item);
    const userInfo: UserModel = userData.item


    useEffect(() => {
        dispatch(featchProjectInfo({ userId: userInfo.id }))
    }, [])
    const projects: ProjectModel[] = useSelector((state: any) => state.projectList.project);
    const loading = useSelector((state: any) => state.projectList.loading);
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: ColorManager.whiteColor,
        }}>
            <AppBar title={StringManager.profileAppBarTitle} nav={() => {
                props.navigation.goBack();
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate(RoutesName.bloggerContactScreen,
                            {
                                "email": userInfo.email,
                                "userName": userInfo.userName
                            })
                    }}>
                        <Text style={{
                            color: 'teal',
                            fontSize: 19,
                            fontWeight: '400'
                        }}>{StringManager.contactTxt}</Text>
                    </TouchableOpacity>
                </View>
            </AppBar>
            <View style={{
                flex: 1,
                backgroundColor: ColorManager.whiteColor,
                padding: 15
            }}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ height: 90, width: 90, borderRadius: 50 }}>
                        <Image
                            width={90}
                            height={90}
                            borderRadius={50}
                            source={{
                                uri: 'https://c4.wallpaperflare.com/wallpaper/384/350/430/digital-art-artwork-cyber-cyberpunk-neon-hd-wallpaper-preview.jpg',
                            }}>
                        </Image>
                    </View>
                    <View style={{ paddingLeft: 10, paddingTop: 8 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: ColorManager.blackColor }}>
                            {userInfo.userName}
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: '700', paddingTop: 5 }}>
                            {userInfo.email}
                        </Text>
                    </View>
                </View>

                <View style={{ paddingTop: 15 }}>
                    <Text style={{ fontSize: 20, color: ColorManager.blackColor, fontWeight: '700' }}>
                        {StringManager.bioTxt}

                    </Text>
                    <Text style={{ fontSize: 18, color: ColorManager.blackColor }}>
                        {userInfo.bio}
                    </Text>
                </View>
                <Text style={{ fontSize: 20, color: ColorManager.blackColor, fontWeight: '700', paddingVertical: 8 }}>
                    {StringManager.projectsTxt}
                </Text>

                {
                    loading == true ?
                        projects.length == 0 ? <View style={
                            {
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }
                        }>
                            <Text>
                                {StringManager.emptyProjects}
                            </Text>
                        </View> : <FlatList data={projects}
                            renderItem={(data) =>
                                <TouchableNativeFeedback
                                    onPress={() => {
                                        props.navigation.navigate(RoutesName.projectDetailScreen, { "projectData": data.item, "projectsListing": false });
                                    }}>
                                    <View style={{
                                        backgroundColor: 'rgba(241, 242, 245, 1)',
                                        borderRadius: 15,
                                        padding: 10,
                                        marginTop: 10
                                    }}>
                                        <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                            <Image style={{
                                                width: 23,
                                                height: 23,
                                                marginLeft: 10
                                            }} source={require('../../../assets/icons/tag.png')} />
                                            <Text numberOfLines={1} style={{
                                                fontSize: 18,
                                                color: ColorManager.blackColor,
                                                flex: 1,
                                            }}> {data.item.title}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Image style={{
                                                width: 23,
                                                height: 23,
                                                marginLeft:
                                                    10
                                            }} source={require('../../../assets/icons/url.png')} />
                                            <Text numberOfLines={1} style={{
                                                fontSize: 18,
                                                color: ColorManager.blueColor,
                                                flex: 1,
                                                textDecorationLine: 'underline'
                                            }}>{data.item.projectUrl}</Text>

                                        </View>
                                    </View>
                                </TouchableNativeFeedback>
                            } >

                        </FlatList>
                        :
                        <View style={
                            {
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }
                        }>
                            <ActivityIndicator size="large" color={ColorManager.blackColor} />
                        </View>
                }

            </View>

        </SafeAreaView >
    );
}

export default BloggerProfileScreen;