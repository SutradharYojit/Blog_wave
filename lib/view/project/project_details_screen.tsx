import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableNativeFeedback } from "react-native";
import { useDispatch } from "react-redux";
import { deleteProject, featchProjectInfo } from "../../redux/action/action";
import { ProjectModel } from "../../model/project_model";
import {
    Dialog,
} from '@rneui/themed';
import { RoutesName } from "../../resources/route_names";
import { UserPreference } from "../../services/user_preference";
import { ColorManager } from "../../resources/color_manager";
import { StringManager } from "../../resources/string_manager";
import AppBar from "../../components/app_bar";
import IconButton from "../../components/buttons/icon_button";

const ProjectDetailScreen = (props: any) => {
    const toggleDialog3 = () => {
        setVisible3(!visible3);
    };
    const { projectData, projectsListing } = props.route.params;
    const projectDetail: ProjectModel = projectData;

    const dispatch = useDispatch();
    const [visible3, setVisible3] = useState(false);

    const deleteBlog = () => {
        dispatch(deleteProject({ projectId: projectDetail.id }));
        dispatch(featchProjectInfo({ userId: UserPreference.userId }))
        props.navigation.goBack();
    }

    const editBlog = () => {
        props.navigation.navigate(RoutesName.addProjectScreen, {
            "userData": {
                "projectData": projectDetail,
                "updateProjects": true
            },
        });
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: ColorManager.whiteColor,
        }}>
            <AppBar title={StringManager.blogTxt} nav={() => {
                props.navigation.goBack();
            }}>
                {
                    projectsListing == true ?
                        <View style={{
                            flexDirection: 'row',
                            width: 65,
                            justifyContent: 'space-between'
                        }}>
                            <IconButton onPress={editBlog}>
                                <Icons name="pencil" size={28} color={ColorManager.blackColor}></Icons>
                            </IconButton>
                            <IconButton onPress={deleteBlog}>
                                <Icons name="delete" size={28} color={ColorManager.blackColor}></Icons>
                            </IconButton>
                        </View>
                        : null
                }
            </AppBar>
            <View style={{
                flex: 1,
                backgroundColor: ColorManager.whiteColor,
                padding: 15
            }}>
                <Card title={StringManager.titleTxt} description={projectDetail.title} ></Card>
                <Card title={StringManager.descriptionTxt} description={projectDetail.description} ></Card>
                <View style={{
                    padding: 10,
                    backgroundColor: 'rgba(241, 242, 245, 1)',
                    borderRadius: 10,
                    marginTop: 15
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '900',
                        paddingBottom: 8,
                        color: ColorManager.blackColor
                    }}>
                        Project URL
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Image style={{ width: 23, height: 23, marginLeft: 10 }} source={require('../../../assets/icons/url.png')} />
                        <TouchableNativeFeedback onPress={() => {
                            props.navigation.navigate(RoutesName.webViewScreen, { "projectUrl": "", });
                        }}>
                            <Text numberOfLines={1}
                                style={{
                                    fontSize: 18,
                                    color: ColorManager.blueColor,
                                    flex: 1,
                                    textDecorationLine: 'underline'
                                }}>  : {projectDetail.projectUrl}</Text>
                        </TouchableNativeFeedback>
                    </View>
                </View>

            </View>
            <Dialog isVisible={false} onBackdropPress={toggleDialog3}>
                <Dialog.Loading />
            </Dialog>

        </SafeAreaView >
    );

}


const Card = (props: any) => {
    return (
        <View style={{
            padding: 10,
            backgroundColor: 'rgba(241, 242, 245, 1)',
            borderRadius: 10,
            marginTop: 15
        }}>
            <Text style={{
                fontSize: 18,
                fontWeight: '900',
                paddingBottom: 8,
                color: ColorManager.blackColor
            }}>
                {props.title}
            </Text>
            <Text style={{
                fontSize: 18,
                fontWeight: '500',
                color: ColorManager.blackColor,
                paddingBottom: 8
            }}>
                {props.description}
            </Text>
        </View>
    );

}
export default ProjectDetailScreen;