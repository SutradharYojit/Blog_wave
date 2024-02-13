import React, { useState } from "react";
import { Button, FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import Icons from 'react-native-vector-icons/MaterialIcons'
import { RoutesName } from "../../resources/route_names";

const UserProfileScreen = (props: any) => {


    let dataList = [
        { id: 1, icon: "edit-note", path: RoutesName.eFditProfileScreen, label: "Edit Profile" },
        { id: 2, icon: "library-books", path: "None", label: "Projects" },
        { id: 3, icon: "add-task", path: "None", label: "Add Blog" },
    ];

    const [logoutDialogVisible, setLogoutDialogVisible] = useState(false);

    const handleLogout = () => {
        // Perform logout action here
        console.log("Logging out...");
        // Close the dialog
        setLogoutDialogVisible(false);
        // Redirect to login screen or perform any necessary action
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
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
                            Divyansh Chaudhary
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: '700', paddingTop: 5 }}>
                            Divyansh@gmail.com
                        </Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>
                        Bio
                    </Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>
                        er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    </Text>
                </View>
                <View>
                    <FlatList
                        data={dataList}
                        renderItem={(data) => <Card icon={data.item.icon} label={data.item.label} path={data.item.path}  ></Card>
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
                                <Button title="Cancel" onPress={() => setLogoutDialogVisible(false)} />
                                <Button title="Logout" onPress={handleLogout} />
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        </SafeAreaView >
    );
}

const Card = (props: any) => {
    const icon = props.icon;
    const label = props.label;
    const path = props.path;


    return (
        <TouchableOpacity onPress={() => {
            console.log(path)
            // props.navigation.navigate(path);
        }}>
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
        </TouchableOpacity>
    );
}

export default UserProfileScreen;