import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { useDispatch } from "react-redux";
import { addBlog, fetchBlogInfo, updateBlog } from "../../redux/action/action";
import { StringManager } from "../../resources/string_manager";
import PrimaryButton from "../../components/buttons/primary_button";

const AddBlogScreen = (props: any) => {
    const dispatch = useDispatch();

    const { userData } = props.route.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (userData.updateblogs) {
            setTitle(userData.blogData.title);
            setDescription(userData.blogData.description);
        }
    }, [])


    const onPress = () => {
        if (userData.updateblogs) {
            dispatch(updateBlog({ title: title, description: description, id: userData.blogData.id }));
            dispatch(fetchBlogInfo());
            props.navigation.popToTop();
        }
        else {
            dispatch(addBlog({ title: title, description: description }));
            dispatch(fetchBlogInfo());
            props.navigation.goBack();
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <TextInput
                    placeholderTextColor={'black'}
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setTitle(Text)
                    }}
                    value={title}
                    placeholder={StringManager.titleTxt}>
                </TextInput>
                <TextInput
                    placeholderTextColor={'black'}
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setDescription(Text)
                    }}
                    value={description}
                    placeholder={StringManager.descriptionTxt}>
                </TextInput>
                <View style={{
                    alignItems: 'center'
                }}>
                    <PrimaryButton onPress={onPress} label={userData.updateblogs == true ? StringManager.updateBlogTxt : StringManager.addBlogTxt}></PrimaryButton>
                </View>
            </View>
        </SafeAreaView >
    );
}

export default AddBlogScreen;