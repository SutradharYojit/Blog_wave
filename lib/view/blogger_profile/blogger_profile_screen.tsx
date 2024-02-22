import React from "react";
import { FlatList, Image, Text, TouchableNativeFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { Appbar } from 'react-native-paper';
import { UserModel } from "../../model/user_model";
import { RoutesName } from "../../resources/route_names";

const BloggerProfileScreen = (props: any) => {

    const { userData } = props.route.params;
    console.log(userData.item);
    const userInfo: UserModel = userData.item

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
        <SafeAreaView style={styles.container}>
            {/*          <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Title" />
                <Appbar.Action icon="calendar" onPress={() => { }} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header> */}
            <View style={{
                flex: 1,
                // backgroundColor: 'grey'
                // backgroundColor: 'white',
                // padding: 15
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

                <FlatList data={dataList}
                    renderItem={(data) =>
                        <TouchableNativeFeedback
                            onPress={() => {
                                props.navigation.navigate(RoutesName.projectDetailScreen, { "projectData": data.item, "projectsListing": false });

                            }}>
                            <View style={{ backgroundColor: 'rgba(241, 242, 245, 1)', borderRadius: 15, padding: 10, marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                    <Image style={{ width: 23, height: 23, marginLeft: 10 }} source={require('../../../assets/icons/tag.png')} />
                                    <Text numberOfLines={1} style={{ fontSize: 18, color: 'black', flex: 1, }}>  : asdasdasdas</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Image style={{ width: 23, height: 23, marginLeft: 10 }} source={require('../../../assets/icons/url.png')} />
                                    <TouchableNativeFeedback onPress={() => {
                                        // console.log("asdas" + )
                                    }}>
                                        <Text numberOfLines={1} style={{ fontSize: 18, color: 'blue', flex: 1, textDecorationLine: 'underline' }}>  : https://copyprogramming.com/howto/is-there-a-way-to-set-a-font-globally-in-react-native</Text>
                                    </TouchableNativeFeedback>
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