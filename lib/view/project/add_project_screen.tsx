import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { useDispatch, useSelector } from "react-redux";
import { addProject, featchProjectInfo, updateProject } from "../../redux/action/action";
import { UserPreference } from "../../services/user_preference";
import { ColorManager } from "../../resources/color_manager";
import AppBar from "../../components/app_bar";
import { StringManager } from "../../resources/string_manager";
import PrimaryButton from "../../components/buttons/primary_button";
import { Dialog } from "@rneui/themed";

const AddProjectScreen = (props: any) => {

    const dispatch = useDispatch();
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [url, setUrl] = useState('');
    const { userData } = props.route.params;
    const isLoading = useSelector((state: any) => state.loading.isLoading);


    useEffect(() => {
        if (userData.updateProjects) {
            setTitle(userData.projectData.title);
            setDescription(userData.projectData.description);
            setUrl(userData.projectData.projectUrl)
        }
    }, [])

    const onPress = () => {
        if (userData.updateProjects) {
            dispatch(updateProject({ title: title, description: description, url: url, id: userData.projectData.id }));
            dispatch(featchProjectInfo({ userId: UserPreference.userId }))
            props.navigation.goBack();
            props.navigation.goBack();
        }
        else {
            dispatch(addProject({ title: title, description: description, url: url }));
            dispatch(featchProjectInfo({ userId: UserPreference.userId }))
            props.navigation.goBack();
        }
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: ColorManager.whiteColor,
        }}>
            <AppBar title={userData.updateProjects ? StringManager.updateProjectTxt : StringManager.addProjectTxt} nav={() => {
                props.navigation.goBack();
            }}></AppBar>
            <View style={{
                flex: 1,
                backgroundColor: ColorManager.whiteColor,
                padding: 15
            }}>
                <TextInput
                    placeholderTextColor={ColorManager.greyColor}
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setTitle(Text)
                    }}
                    value={title}
                    placeholder={StringManager.titleTxt}>
                </TextInput>
                <TextInput
                    placeholderTextColor={ColorManager.greyColor}
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setDescription(Text)
                    }}
                    value={description}
                    placeholder={StringManager.descriptionTxt}>
                </TextInput>
                <TextInput
                    placeholderTextColor={ColorManager.greyColor}
                    style={styles.textfilled}
                    onChangeText={(Text) => {
                        setUrl(Text)
                    }}
                    value={url}
                    placeholder={StringManager.urlTxt}>
                </TextInput>
                {
                    isLoading ? <Dialog isVisible={true}  >
                        <Dialog.Loading />
                    </Dialog> : null
                }
                <View style={{ alignItems: 'center' }}>
                    <PrimaryButton onPress={onPress}
                        label={userData.updateProjects == true ?
                            StringManager.updateProjectBtnTxt :
                            StringManager.addProjectBtnTxt
                        }></PrimaryButton>
                </View>
            </View>
        </SafeAreaView >
    );

}

export default AddProjectScreen;