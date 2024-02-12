import React from "react";
import { FlatList, Image, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { RoutesName } from "../../resources/route_names";


const PortfolioScreen = (props: any) => {

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
            paddingHorizontal: 15
        }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={dataList}
                    style={{ paddingBottom: 10/* , paddingTop: 10 */ }}
                    renderItem={(data) =>
                        <TouchableNativeFeedback onPress={() => {
                            props.navigation.navigate(RoutesName.bloggerProfileScreen);
                        }}>
                            <View style={{
                                height: 100,
                                marginBottom: 12,
                                backgroundColor: 'white',
                                borderRadius: 18,
                                shadowColor: 'black',
                                elevation: 8,
                                flexDirection: 'row'
                            }}>
                                <Image source={{
                                    uri: 'https://c4.wallpaperflare.com/wallpaper/404/780/895/multiple-display-dual-monitors-abstract-digital-art-wallpaper-thumb.jpg'
                                }} style={{ height: 100, width: 120, borderRadius: 18, }}></Image>
                                <View style={{ flexDirection: 'column', /* backgroundColor: 'brown', */ justifyContent: 'center', paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: "600" }}>
                                        Yojit Sutradhar
                                    </Text>
                                    <Text style={{ fontSize: 17, color: 'black' }}>
                                        yojitsutradhar@gmail.com
                                    </Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback >
                    }
                ></FlatList>
            </View>
        </SafeAreaView >
    );
}

export default PortfolioScreen;