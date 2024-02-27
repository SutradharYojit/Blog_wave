import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { useDispatch, useSelector } from "react-redux";
import { contactBlogger } from "../../redux/action/action";
import { Dialog } from "@rneui/themed";
import { ColorManager } from "../../resources/color_manager";
import PrimaryButton from "../../components/buttons/primary_button";
import { StringManager } from "../../resources/string_manager";

const BloggercontactScreen = (props: any) => {
    const { email, userName } = props.route.params;
    const dispatch = useDispatch();
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    const isLoading = useSelector((state: any) => state.loading.isLoading);

    const onPress = () => {
        dispatch(contactBlogger({
            email: email,
            bloggerName: userName,
            title: title,
            description: description,
            navigation: props.navigation
        }))
        setTitle('')
        setDescription('')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 150, height: 150 }} source={require('../../../assets/icons/blogger.png')} />
                </View>
                <TextInput
                    placeholderTextColor={ColorManager.blackColor}
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setTitle(Text)
                    }}
                    value={title}
                    placeholder={StringManager.titleTxt}>
                </TextInput>

                <TextInput
                    placeholderTextColor={ColorManager.blackColor}
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setDescription(Text)
                    }}
                    value={description}
                    placeholder={StringManager.descriptionTxt}>
                </TextInput>
                {
                    isLoading ? <Dialog isVisible={true}  >
                        <Dialog.Loading />
                    </Dialog> : null
                }
                <View style={{ alignItems: 'center' }}>
                    <PrimaryButton onPress={onPress} label={StringManager.sentMailTxt}></PrimaryButton>
                </View>
            </View>
        </SafeAreaView >
    );
}

export default BloggercontactScreen;