import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { useDispatch } from "react-redux";
import { updateUser, updateUserProfile } from "../../redux/action/action";

const EditProfileScreen = (props: any) => {

    const { userData } = props.route.params;

    const dispatch = useDispatch();
    let [name, setuserName] = useState('');
    let [userEmail, setMail] = useState('');
    let [userBio, setBio] = useState('');


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
                    style={{ marginTop: 10, borderColor: 'teal', borderWidth: 2.5, borderRadius: 10, fontSize: 18, paddingLeft: 10 }}
                    onChangeText={(Text) => {
                        setuserName(Text)
                    }}
                    value={name}
                    placeholder='Username'>
                </TextInput>
                <TextInput
                    style={{ marginTop: 10, borderColor: 'teal', borderWidth: 2.5, borderRadius: 10, fontSize: 18, paddingLeft: 10 }}
                    onChangeText={(Text) => {
                        setMail(Text)
                    }}
                    value={userEmail}
                    placeholder='Email'>
                </TextInput>
                <TextInput
                    style={{ marginTop: 10, borderColor: 'teal', borderWidth: 2.5, borderRadius: 10, fontSize: 18, paddingLeft: 10 }}
                    onChangeText={(Text) => {
                        setBio(Text)
                    }}
                    value={userBio}
                    placeholder='Bio'>
                </TextInput>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        dispatch(updateUser({ userName: name, email: userEmail, bio: userBio }));
                        dispatch(updateUserProfile({ userName: name, email: userEmail, bio: userBio }));
                    }} style={{
                        height: 65,
                        width: 250,
                        marginTop: 15,
                        backgroundColor: 'teal',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15,
                    }}>
                        <Text style={{ color: 'white', fontSize: 19 }} >Update Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );

}

export default EditProfileScreen;