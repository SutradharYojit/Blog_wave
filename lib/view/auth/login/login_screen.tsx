import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../resources/style";
import { StringManager } from "../../../resources/string_manager";
import { RoutesName } from "../../../resources/route_names";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../redux/action/action";
import {
    Button,
    Dialog,
    CheckBox,
    ListItem,
    Avatar,
} from '@rneui/themed';


const LoginScreen = (props: any) => {
    const dispatch = useDispatch();

    let [userEmail, setMail] = useState('');
    let [userPass, setPass] = useState('');
    const [visible3, setVisible3] = useState(false);
    const loading = useSelector((state: any) => state.Auth.loading)

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 150, height: 150 }} source={require('../../../../assets/icons/blogger.png')} />
                </View>
                <Text style={styles.appTitle}>{StringManager.appTitle}</Text>
                <Text style={[styles.text, { fontSize: 19, marginVertical: 10 }]}>{StringManager.loginTitle}</Text>
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
                        setMail(Text)
                    }}
                    // value={'asdasd}
                    placeholder='Email'>
                </TextInput>
                <TextInput
                    placeholderTextColor="black"
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
                        setPass(Text)
                    }}
                    // value={'asdasd}
                    placeholder='Passsword'>
                </TextInput>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        console.log("asdasd")
                        setVisible3(true);
                        dispatch(getUserData(props.navigation, { email: userEmail, pass: userPass }));
                        setVisible3(loading);

                    }} style={{
                        height: 65,
                        width: 250,
                        marginTop: 15,
                        backgroundColor: 'teal',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15,
                    }}>
                        <Text style={{ color: 'white', fontSize: 19 }} >Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, color: 'teal', fontWeight: "400" }}>
                        Don't have an account?{' '}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate(RoutesName.signupScreen);
                    }}   >
                        <Text style={{
                            fontSize: 16,
                            color: 'black',
                            fontWeight: "600"
                        }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
                <Dialog isVisible={visible3}  >
                    <Dialog.Loading />
                </Dialog>
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;
