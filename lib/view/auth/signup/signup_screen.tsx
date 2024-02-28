import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../resources/style";
import { StringManager } from "../../../resources/string_manager";
import { RoutesName } from "../../../resources/route_names";
import { useDispatch, useSelector } from "react-redux";
import { getSignupUser } from "../../../redux/action/action";
import PrimaryButton from "../../../components/buttons/primary_button";
import { ColorManager } from "../../../resources/color_manager";
import { Dialog } from "@rneui/themed";


const SignUpScreen = (props: any) => {
    let [userName, setName] = useState('');
    let [userEmail, setMail] = useState('');
    let [userPass, setPass] = useState('');
    const [visible3, setVisible3] = useState(false);
    const loading = useSelector((state: any) => state.Auth.loading)

    const dispatch = useDispatch();
    const onPress = () => {
        setVisible3(true);
        dispatch(getSignupUser(props.navigation, {
            name: userName,
            email: userEmail,
            pass: userPass
        }));
        setVisible3(loading);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewStyle}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 150, height: 150 }} source={require('../../../../assets/icons/blogger.png')} />
                </View>
                <Text style={styles.appTitle}>{StringManager.appTitle}</Text>
                <Text style={[styles.text, { fontSize: 19, marginVertical: 10 }]}>{StringManager.signUpTxt}</Text>
                <TextInput
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setName(Text)
                    }}
                    placeholder={StringManager.userNameLabelTxt}>
                </TextInput>
                <TextInput
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setMail(Text)
                    }}
                    placeholder={StringManager.emailLabelTxt}>
                </TextInput>
                <TextInput
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setPass(Text)
                    }}
                    placeholder={StringManager.passLabelTxt}>
                </TextInput>
                <View style={{ alignItems: 'center' }}>
                    <PrimaryButton onPress={onPress} label={StringManager.signUpTxt}></PrimaryButton>
                </View>

                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, color: ColorManager.tealColor, fontWeight: "400" }}>
                        {StringManager.haveAccountTxt}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate(RoutesName.loginScreen);
                    }}   >
                        <Text style={{
                            fontSize: 16,
                            color: ColorManager.blackColor,
                            fontWeight: "600"
                        }}>{StringManager.LoginTxt}</Text>
                    </TouchableOpacity>
                </View>
                <Dialog isVisible={visible3}  >
                    <Dialog.Loading />
                </Dialog>
            </View>
        </SafeAreaView>
    );
}

export default SignUpScreen;