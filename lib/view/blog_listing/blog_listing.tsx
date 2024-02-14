import React from "react";
import { FlatList, Image, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { RoutesName } from "../../resources/route_names";

const BlogListingScreen = (props: any) => {
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
            <View style={{ flex: 1 }}>
                <FlatList data={dataList}
                    renderItem={(data) => <TouchableNativeFeedback onPress={() => {
                        console.log("press")
                        props.navigation.navigate(RoutesName.blogDetailsScreen);

                    }}>
                        <View style={{
                            backgroundColor: 'white',
                            padding: 15,
                            marginBottom: 10,
                            borderRadius: 10,
                            shadowColor: 'black',
                            elevation: 8,
                        }}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>
                                10/12/2023
                            </Text>

                            <View style={{
                                backgroundColor: 'blue',
                                borderRadius: 10,
                                marginVertical: 10
                            }}>
                                <Image source={{
                                    uri: 'https://c4.wallpaperflare.com/wallpaper/404/780/895/multiple-display-dual-monitors-abstract-digital-art-wallpaper-thumb.jpg'
                                }} style={{ height: 190, borderRadius: 10, }}>
                                </Image>
                            </View>
                            <Text style={{ fontSize: 18, fontWeight: '900', color: 'black' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Text>

                        </View>
                    </TouchableNativeFeedback>
                    }
                ></FlatList>

            </View>
        </SafeAreaView >
    );

}

export default BlogListingScreen;
