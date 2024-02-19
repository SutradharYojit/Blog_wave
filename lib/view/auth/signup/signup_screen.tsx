import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../resources/style";
import { StringManager } from "../../../resources/string_manager";
import { RoutesName } from "../../../resources/route_names";
import { useDispatch, useSelector } from "react-redux";
import { getSignupUser } from "../../../redux/action/action";


const SignUpScreen = (props: any) => {
    let [userName, setName] = useState('');
    let [userEmail, setMail] = useState('');
    let [userPass, setPass] = useState('');

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 150, height: 150 }} source={require('../../../../assets/icons/blogger.png')} />
                </View>
                <Text style={styles.appTitle}>{StringManager.appTitle}</Text>
                <Text style={[styles.text, { fontSize: 19, marginVertical: 10 }]}>SignUp</Text>
                <TextInput
                    style={{ marginTop: 10, borderColor: 'teal', borderWidth: 2.5, borderRadius: 10, fontSize: 18, paddingLeft: 10 }}
                    onChangeText={(Text) => {
                        setName(Text)
                    }}
                    // value={'asdasd}
                    placeholder='UserName'>
                </TextInput>
                <TextInput
                    style={{ marginTop: 10, borderColor: 'teal', borderWidth: 2.5, borderRadius: 10, fontSize: 18, paddingLeft: 10 }}
                    onChangeText={(Text) => {
                        setMail(Text)
                    }}
                    // value={'asdasd}
                    placeholder='Email'>
                </TextInput>
                <TextInput
                    style={{ marginTop: 10, borderColor: 'teal', borderWidth: 2.5, borderRadius: 10, fontSize: 18, paddingLeft: 10 }}
                    onChangeText={(Text) => {
                        setPass(Text)
                    }}
                    // value={'asdasd}
                    placeholder='Passsword'>
                </TextInput>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        height: 65,
                        width: 250,
                        marginTop: 15,
                        backgroundColor: 'teal',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15

                    }}
                        onPress={() => {
                            dispatch(getSignupUser(props.navigation, { name: userName, email: userEmail, pass: userPass }));

                        }}>
                        <Text style={{ color: 'white', fontSize: 19 }} >SingUp</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, color: 'teal', fontWeight: "400" }}>
                        Already have an account?{' '}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate(RoutesName.loginScreen);
                    }}   >
                        <Text style={{
                            fontSize: 16,
                            color: 'black',
                            fontWeight: "600"
                        }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SignUpScreen;