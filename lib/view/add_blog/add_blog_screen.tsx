import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { useDispatch } from "react-redux";
import { addBlog, fetchBlogInfo } from "../../redux/action/action";

const AddBlogScreen = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <TextInput
                    placeholderTextColor={'black'}
                    style={{
                        marginTop: 10,
                        borderColor: 'teal',
                        borderWidth: 2.5,
                        borderRadius: 10,
                        fontSize: 18,
                        color: 'black',
                        paddingLeft: 10
                    }}
                    onChangeText={(Text) => {
                        setTitle(Text)
                    }}
                    // value={'asdasd}
                    placeholder='Title'>
                </TextInput>
                <TextInput
                    placeholderTextColor={'black'}
                    style={{
                        marginTop: 10,
                        borderColor: 'teal',
                        borderWidth: 2.5,
                        borderRadius: 10,
                        fontSize: 18,
                        color: 'black',
                        paddingLeft: 10
                    }}
                    onChangeText={(Text) => {
                        setDescription(Text)
                    }}
                    // value={'asdasd}
                    placeholder='Description'>
                </TextInput>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            dispatch(addBlog({ title: title, description: description }));
                            dispatch(fetchBlogInfo());
                        }}
                        style={{
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