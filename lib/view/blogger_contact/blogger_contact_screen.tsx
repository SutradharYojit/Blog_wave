import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { useDispatch, useSelector } from "react-redux";
import { contactBlogger } from "../../redux/action/action";
import { Dialog } from "@rneui/themed";

const BloggercontactScreen = (props: any) => {
    const { email, userName } = props.route.params;
    const dispatch = useDispatch();

    let [title, setTitle] = useState('');
    let [load, setLoad] = useState(false);
    let [description, setDescription] = useState('');
    const loading = useSelector((state: any) => state.contactUser.loading);


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 150, height: 150 }} source={require('../../../assets/icons/blogger.png')} />
                </View>
                <TextInput
                    placeholderTextColor="black"
                    style={{
                        marginTop: 10,
                        borderColor: 'teal',
                        borderWidth: 2.5,
                        borderRadius: 10,
                        fontSize: 18,
                        paddingLeft: 10,
                        color: 'black'
                    }}
                    onChangeText={(Text) => {
                        console.log(Text)
                        setTitle(Text)
                    }}
                    value={title}
                    placeholder='Title'>
                </TextInput>
                <TextInput
                    placeholderTextColor="black"
                    style={{
                        marginTop: 10,
                        borderColor: 'teal',
                        borderWidth: 2.5,
                        borderRadius: 10,
                        fontSize: 18,
                        paddingLeft: 10,
                        color: 'black'
                    }}
                    onChangeText={(Text) => {
                        console.log(Text)
                        setDescription(Text)
                    }}
                    value={description}
                    placeholder='Description'>
                </TextInput>
                <Dialog isVisible={load}  >
                    <Dialog.Loading />
                </Dialog>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={async () => {
                        setLoad(true);
                        dispatch(await contactBlogger({ email: email, bloggerName: userName, title: title, description: description }))
                        setTitle('')
                        setDescription('')
                        props.navigation.goBack();
                        setLoad(false);

                    }} style={{
                        height: 65,
                        width: 250,
                        marginTop: 15,
                        backgroundColor: 'teal',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15,
                    }}>
                        <Text style={{ color: 'white', fontSize: 19 }} >Sent mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );

}

export default BloggercontactScreen;