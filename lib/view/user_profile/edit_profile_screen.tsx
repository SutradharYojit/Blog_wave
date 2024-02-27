import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, updateUserProfile } from "../../redux/action/action";
import { StringManager } from "../../resources/string_manager";
import PrimaryButton from "../../components/buttons/primary_button";
import { Dialog } from "@rneui/themed";

const EditProfileScreen = (props: any) => {

    const { userData } = props.route.params;
    const dispatch = useDispatch();
    let [name, setuserName] = useState('');
    let [userEmail, setMail] = useState('');
    let [userBio, setBio] = useState('');
    const isLoading = useSelector((state: any) => state.loading.isLoading);

    const onPress = () => {
        dispatch(updateUser({ userName: name, email: userEmail, bio: userBio }));
        dispatch(updateUserProfile({ userName: name, email: userEmail, bio: userBio }));
        props.navigation.goBack();
    }

    useEffect(() => {
        setuserName(userData.userName);
        setMail(userData.email);
        setBio(userData.bio);
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    width={110}
                    height={110}
                    borderRadius={60}
                    source={{
                        uri: 'https://c4.wallpaperflare.com/wallpaper/384/350/430/digital-art-artwork-cyber-cyberpunk-neon-hd-wallpaper-preview.jpg',
                    }}>
                </Image>
            </View>
            <View>
                <TextInput
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setuserName(Text)
                    }}
                    value={name}
                    placeholder={StringManager.userNameLabelTxt}>
                </TextInput>
                <TextInput
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setMail(Text)
                    }}
                    value={userEmail}
                    placeholder={StringManager.emailLabelTxt}>
                </TextInput>
                <TextInput
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setBio(Text)
                    }}
                    value={userBio}
                    placeholder={StringManager.bioTxt}>
                </TextInput>
                {
                    isLoading ? <Dialog isVisible={true}  >
                        <Dialog.Loading />
                    </Dialog> : null
                }
                <View style={{ alignItems: 'center' }}>
                    <PrimaryButton onPress={onPress}
                        label={StringManager.updateProfileTxt}></PrimaryButton>
                </View>
            </View>
        </SafeAreaView >
    );
}

export default EditProfileScreen;