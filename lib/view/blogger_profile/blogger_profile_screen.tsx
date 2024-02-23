import React, { useDebugValue, useEffect } from "react";
import { FlatList, Image, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserModel } from "../../model/user_model";
import { RoutesName } from "../../resources/route_names";
import { useDispatch, useSelector } from "react-redux";
import { featchProjectInfo } from "../../redux/action/action";
import { ProjectModel } from "../../model/project_model";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { UserPreference } from "../../services/user_preference";


const BloggerProfileScreen = (props: any) => {
    const dispatch = useDispatch();

    const { userData } = props.route.params;
    console.log(userData.item);
    const userInfo: UserModel = userData.item


    useEffect(() => {
        dispatch(featchProjectInfo({ userId: userInfo.id }))
    }, [])
    const projects: ProjectModel[] = useSelector((state: any) => state.projectList.project);
    const loading = useSelector((state: any) => state.projectList.loading);

    let dataList = [
        { id: 1, name: "Yojit", surname: "Suthar" },
        { id: 2, name: "Jimmy", surname: "Sutradhar" },
        { id: 3, name: "Viral", surname: "Suthar" },
        { id: 4, name: "Ashish", surname: "Ojha" },
        { id: 5, name: "Rahul", surname: "" },
        { id: 6, name: "A", surname: "" },
        { id: 7, name: "B", surname: "" },
        { id: 8, name: "C", surname: "" },
        { id: 9, name: "D", surname: "" },
        { id: 10, name: "D", surname: "" },
        { id: 11, name: "D", surname: "" },
        { id: 12, name: "D", surname: "" },
    ];
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
                        Profile
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate(RoutesName.bloggerContactScreen, { "email": userInfo.email, "userName": userInfo.userName })
                    }}>
                        <Text style={{
                            color: 'teal',
                            fontSize: 19,
                            fontWeight: '400'
                        }}>Contact</Text>
                    </TouchableOpacity>

                </View>



            </View>


            <View style={{
                flex: 1,
                backgroundColor: 'white',
                padding: 15
            }}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ height: 90, width: 90, backgroundColor: 'brown', borderRadius: 50 }}>
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
                        <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>
                            {userInfo.userName}
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: '700', paddingTop: 5 }}>
                            {userInfo.email}
                        </Text>
                    </View>


                </View>

                <View style={{ paddingTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>
                        Bio
                    </Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>
                        {userInfo.bio}
                    </Text>
                </View>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: '700', paddingVertical: 8 }}>
                    Projects
                </Text>

                <FlatList data={projects}
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
                                        color: 'black',
                                        flex: 1,
                                    }}>  {data.item.title}</Text>
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
                                        color: 'blue',
                                        flex: 1,
                                        textDecorationLine: 'underline'
                                    }}>   {data.item.projectUrl}</Text>

                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    } >

                </FlatList>

            </View>
        </SafeAreaView >
    );
}

export default BloggerProfileScreen;