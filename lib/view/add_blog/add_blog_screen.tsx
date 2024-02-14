import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";

const AddBlogScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ marginTop: 10, borderColor: 'teal', borderWidth: 2.5, borderRadius: 10, fontSize: 18, paddingLeft: 10 }}
                    onChangeText={(Text) => {
                        // setEmail(Text)
                    }}
                    // value={'asdasd}
                    placeholder='Title'>
                </TextInput>
                <TextInput
                    style={{ marginTop: 10, borderColor: 'teal', borderWidth: 2.5, borderRadius: 10, fontSize: 18, paddingLeft: 10 }}
                    onChangeText={(Text) => {
                        // setEmail(Text)
                    }}
                    // value={'asdasd}
                    placeholder='Description'>
                </TextInput>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                    }} style={{
                        height: 65,
                        width: 250,
                        marginTop: 15,
                        backgroundColor: 'teal',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15,
                    }}>
                        <Text style={{ color: 'white', fontSize: 19 }} >Add Blog</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );

}

export default AddBlogScreen;