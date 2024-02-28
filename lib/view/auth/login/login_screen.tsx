import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../resources/style";
import { StringManager } from "../../../resources/string_manager";
import { RoutesName } from "../../../resources/route_names";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../redux/action/action";
import {
    Dialog,
} from '@rneui/themed';
import PrimaryButton from "../../../components/buttons/primary_button";
import { ColorManager } from "../../../resources/color_manager";
import { Snackbar } from "react-native-paper";


const LoginScreen = (props: any) => {
    const dispatch = useDispatch();

    let [userEmail, setMail] = useState('');
    let [userPass, setPass] = useState('');
    const [visible3, setVisible3] = useState(false);
    const loading = useSelector((state: any) => state.Auth.loading)
    const [visible, setVisible] = useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const onPress = () => {
        onToggleSnackBar()
        /* setVisible3(true);
        dispatch(getUserData(props.navigation, { email: userEmail, pass: userPass }));
        setVisible3(loading); */
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewStyle}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 150, height: 150 }} source={require('../../../../assets/icons/blogger.png')} />
                </View>
                <Text style={styles.appTitle}>{StringManager.appTitle}</Text>
                <Text style={[styles.text, { fontSize: 19, marginVertical: 10 }]}>{StringManager.loginTitle}</Text>
                <TextInput
                    placeholderTextColor={ColorManager.blackColor}
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setMail(Text)
                    }}
                    placeholder={StringManager.emailLabelTxt}>
                </TextInput>
                <TextInput
                    placeholderTextColor={ColorManager.blackColor}
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setPass(Text)
                    }}
                    placeholder={StringManager.passLabelTxt}>
                </TextInput>
                <View style={{ alignItems: 'center' }}>
                    <PrimaryButton onPress={onPress} label={StringManager.LoginTxt}></PrimaryButton>
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, color: ColorManager.tealColor, fontWeight: "400" }}>
                        {StringManager.noAccountTxt}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate(RoutesName.signupScreen);
                    }}   >
                        <Text style={{
                            fontSize: 16,
                            color: ColorManager.blackColor,
                            fontWeight: "600"
                        }}>{StringManager.signUpTxt}</Text>
                    </TouchableOpacity>
                </View>
                <Dialog isVisible={visible3}  >
                    <Dialog.Loading />
                </Dialog>
                <Snackbar
                    visible={visible}
                    duration={800}
                    onDismiss={onDismissSnackBar}
                    style={{ backgroundColor: ColorManager.redColor }}
                >
                    <Text style={{ fontSize: 15, fontWeight: '700', color: ColorManager.whiteColor }}> Hey there! I'm a Snackbar.</Text>
                </Snackbar>
            </View>
        </SafeAreaView >
    );
}

export default LoginScreen;
