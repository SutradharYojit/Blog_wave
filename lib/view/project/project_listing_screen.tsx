import React from "react";
import { FlatList, Image, Text, TouchableNativeFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";

const ProjectListingScreen = () => {
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
                    renderItem={(data) =>
                        <View style={{ backgroundColor: 'rgba(241, 242, 245, 1)', borderRadius: 15, padding: 10, marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                <Image style={{ width: 23, height: 23, marginLeft: 10 }} source={require('../../../assets/icons/tag.png')} />
                                <Text numberOfLines={1} style={{ fontSize: 18, color: 'black', flex: 1, }}>  : asdasdasdas</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <Image style={{ width: 23, height: 23, marginLeft: 10 }} source={require('../../../assets/icons/url.png')} />
                                <TouchableNativeFeedback onPress={() => {
                                    console.log("Press for the webview")
                                }}>
                                    <Text numberOfLines={1} style={{ fontSize: 18, color: 'blue', flex: 1, textDecorationLine: 'underline' }}>  : https://copyprogramming.com/howto/is-there-a-way-to-set-a-font-globally-in-react-native</Text>
                                </TouchableNativeFeedback>
                            </View>
                        </View>} >

                </FlatList>
            </View>
        </SafeAreaView >
    );
}

export default ProjectListingScreen;