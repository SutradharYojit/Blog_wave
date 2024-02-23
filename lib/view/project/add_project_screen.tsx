import React, { useEffect, useState } from "react";
import { Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from "react-redux";
import { addProject, featchProjectInfo, updateProject } from "../../redux/action/action";
import { UserPreference } from "../../services/user_preference";

const AddProjectScreen = (props: any) => {

    const dispatch = useDispatch();
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [url, setUrl] = useState('');
    // const { projectData, updateProjects } = props.route.params;
    const { userData } = props.route.params;

    useEffect(() => {
        if (userData.updateProjects) {
            setTitle(userData.projectData.title);
            setDescription(userData.projectData.description);
            setUrl(userData.projectData.projectUrl)
        }
    }, [])
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={{
                paddingHorizontal: 15,
                height: 55,
                flexDirection: 'row',
                backgroundColor: "white",
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity onPress={() => {
                        console.log("asdasd");
                        props.navigation.goBack();
                    }}>
                        <Icons name="arrow-left" size={25} color="black"></Icons>
                    </TouchableOpacity>
                    <Text
                        style={{
                            textAlignVertical: "center",
                            color: 'black',
                            fontSize: 20,
                            fontWeight: '500',
                            paddingLeft: 20
                        }}>
                        Add Project
                    </Text>
                </View>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                padding: 15
            }}>
                <TextInput
                    placeholderTextColor={'grey'}
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
                        setTitle(Text)
                    }}
                    value={title}
                    placeholder='Title'>
                </TextInput>
                <TextInput
                    placeholderTextColor={'grey'}
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
                        setDescription(Text)
                    }}
                    value={description}
                    placeholder='Description'>
                </TextInput>
                <TextInput
                    placeholderTextColor={'grey'}
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
                        setUrl(Text)
                    }}
                    value={url}
                    placeholder='URL'>
                </TextInput>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        if (userData.updateProjects) {
                            dispatch(updateProject({ title: title, description: description, url: url, id: userData.projectData.id }));
                            dispatch(featchProjectInfo({ userId: UserPreference.userId }))
                            props.navigation.goBack();
                        }
                        else {
                            dispatch(addProject({ title: title, description: description, url: url }));
                            // onPositiveClickListener();
                            // props.navigation.goBack();
                        }
                    }} style={{
                        height: 65,
                        width: 250,
                        marginTop: 15,
                        backgroundColor: 'teal',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15,
                    }}>
                        {
                            userData.updateProjects == true ? <Text style={{ color: 'white', fontSize: 19 }} >Update Project</Text> : <Text style={{ color: 'white', fontSize: 19 }} >Add Project</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );

}

export default AddProjectScreen;