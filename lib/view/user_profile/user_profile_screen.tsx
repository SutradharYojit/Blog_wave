import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import Icons from 'react-native-vector-icons/MaterialIcons'
import { RoutesName } from "../../resources/route_names";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/action/action";
import { UserModel } from "../../model/user_model";
import { UserPreference } from "../../services/user_preference";

const UserProfileScreen = (props: any) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo());
    }, [])
    const userPreference = new UserPreference();


    // const currentUser11: UserModel = useSelector((state: any) => console.log(state.User));
    const loading: boolean = useSelector((state: any) => state.User.loading);
    const currentUser: UserModel = useSelector((state: any) => state.User.user);

    let dataList = [
        {
            id: 1,
            icon: "edit-note",
            path: RoutesName.eFditProfileScreen,
            label: "Edit Profile",
            data: {
                userName: currentUser.userName,
                email: currentUser.email,
                bio: currentUser.bio
            }
        },
        {
            id: 2,
            icon: "library-books",
            path: RoutesName.ProjectListingScreen,
            label: "Projects",
            data: {
                "projectData": null,
                "updateProjects": false
            }
        },
        {
            id: 3,
            icon: "add-task",
            path: RoutesName.addBlogScreen,
            label: "Add Blog",
            data: {
                "blogData": "",
                "updateblogs": false
            }
        },
    ];

    const [logoutDialogVisible, setLogoutDialogVisible] = useState(false);

    const handleLogout = () => {
        console.log("Logging out...");
        userPreference.logout();
        props.navigation.reset({
            index: 0,
            routes: [{ name: RoutesName.loginScreen }],
        });

        setLogoutDialogVisible(false);
    };
    return (
        <SafeAreaView style={styles.container}>
            {
                loading == true ? <View style={{ flex: 1 }}>
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
                            <Text style={{ fontSize: 18, fontWeight: '700', color: 'black' }}>
                                {currentUser.userName}
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: '700', paddingTop: 5, color: 'grey' }}>
                                {currentUser.email}
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 15 }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>
                            Bio
                        </Text>
                        <Text style={{ fontSize: 15, color: 'black' }}>
                            {currentUser.bio}
                        </Text>
                    </View>
                    <View>
                        <FlatList
                            data={dataList}
                            renderItem={(data) => <TouchableOpacity onPress={() => {
                                props.navigation.navigate(data.item.path, { "userData": data.item.data });
                            }} >
                                <View style={{ flexDirection: 'row', padding: 12, justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                        <Icons name={data.item.icon} size={30} color={'black'} ></Icons>
                                        <Text style={{
                                            fontSize: 18,
                                            color: 'black',
                                            paddingLeft: 10
                                        }}>
                                            {data.item.label}
                                        </Text>
                                    </View>
                                    <Icons name="chevron-right" size={30} color={'black'} ></Icons>
                                </View>
                            </TouchableOpacity >
                            }
                        ></FlatList>
                    </View>
                    <TouchableOpacity onPress={() => setLogoutDialogVisible(true)}>
                        <View style={{ flexDirection: 'row', padding: 12, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Icons name="logout" size={30} color={'red'} ></Icons>
                                <Text style={{
                                    fontSize: 18,
                                    color: 'red',
                                    paddingLeft: 10
                                }}>
                                    Logout
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Modal
                        visible={logoutDialogVisible}
                        animationType="slide"
                        transparent={true}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                                <Text style={{ fontSize: 20, marginBottom: 20 }}>Are you sure you want to logout?</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Button title="Cancel" onPress={() => { setLogoutDialogVisible(false) }} />
                                    <Button title="Logout" onPress={handleLogout} />
                                </View>
                            </View>
                        </View>
                    </Modal>

                </View> : <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            }
        </SafeAreaView >
    );
}

/* const Card = (props: any) => {
    const icon = props.icon;
    const label = props.label;
    const path = props.path;
    const navigation = props.navigation;

    return (
        <TouchableOpacity onPress={() => navigation.navigate(path)} >
            <View style={{ flexDirection: 'row', padding: 12, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Icons name={icon} size={30} color={'black'} ></Icons>
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                        paddingLeft: 10
                    }}>
                        {label}
                    </Text>
                </View>
                <Icons name="chevron-right" size={30} color={'black'} ></Icons>
            </View>
        </TouchableOpacity >
    );
}
 */
export default UserProfileScreen;