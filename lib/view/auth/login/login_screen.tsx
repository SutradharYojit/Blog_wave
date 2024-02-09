import React from "react";
import { View, Text, Button, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../resources/style";
import { StringManager } from "../../../resources/string_manager";
import { fontFamily } from "../../../resources/assets_manager";

const LoginScreen = (props: any) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{/*  backgroundColor: 'grey', */ flex: 1, justifyContent: 'center'/* , */ }}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 150, height: 150 }} source={require('../../../../assets/icons/blogger.png')} />
                </View>
                <Text style={styles.appTitle}>{StringManager.appTitle}</Text>
                <Text style={[styles.text, { fontSize: 19, marginVertical: 10 }]}>{StringManager.loginTitle}</Text>
                <TextInput
                    style={{ marginTop: 10, borderColor: 'teal', borderWidth: 2.5, borderRadius: 10 }}
                    onChangeText={(Text) => {
                        // setEmail(Text)
                    }}
                    // value={'asdasd}
                    placeholder='Email'>
                </TextInput>
                <TextInput
                    style={{ marginTop: 10, borderColor: 'teal', borderWidth: 2.5, borderRadius: 10 }}
                    onChangeText={(Text) => {
                        // setEmail(Text)
                    }}
                    // value={'asdasd}
                    placeholder='Passsword'>
                </TextInput>

                <TouchableOpacity style={{
                    height: 65,
                    marginTop: 15,
                    backgroundColor: 'teal',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 15
                }}>
                    <Text style={{ color: 'white', fontSize: 19 }} >Login</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', marginTop: 11 }}>
                    <Text style={{ fontSize: 16 }}>
                        Don't have an account?{' '}
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{
                                fontSize: 16,
                                color: 'blue',

                            }}>SignUp</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}


export default LoginScreen;
