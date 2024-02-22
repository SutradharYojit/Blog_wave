import React, { useState } from "react";
import { Image, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableNativeFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, featchProjectInfo } from "../../redux/action/action";
import { ProjectModel } from "../../model/project_model";
import {
    Dialog,
} from '@rneui/themed';
import { RoutesName } from "../../resources/route_names";

const ProjectDetailScreen = (props: any) => {
    const toggleDialog3 = () => {
        setVisible3(!visible3);
    };
    const { projectData, projectsListing } = props.route.params;
    const projectDetail: ProjectModel = projectData;
    const loading = useSelector((state: any) => state.deleteProject.loading)

    const dispatch = useDispatch();
    const [visible3, setVisible3] = useState(false);

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
                        Project detail
                    </Text>
                </View>
                {
                    projectsListing == true ? <View style={{
                        flexDirection: 'row',
                        width: 65,
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity onPress={() => {
                            console.log("asdasd")
                            props.navigation.navigate(RoutesName.addProjectScreen, {
                                "userData": {
                                    "projectData": projectDetail,
                                    "updateProjects": true
                                },

                            });

                        }}>
                            <Icons name="pencil" size={28} color="black"></Icons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            dispatch(deleteProject({ projectId: projectDetail.id }));
                            dispatch(featchProjectInfo())
                            props.navigation.goBack();
                        }}>
                            <Icons name="delete" size={28} color="black"></Icons>
                        </TouchableOpacity>
                    </View>
                        : null
                }

            </View>


            <View style={{
                flex: 1,
                backgroundColor: 'white',
                padding: 15
            }}>
                <Card title={"title"} description={projectDetail.title} ></Card>
                <Card title={"Description"} description={projectDetail.description} ></Card>
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
                        color: 'black'
                    }}>
                        Project URL
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Image style={{ width: 23, height: 23, marginLeft: 10 }} source={require('../../../assets/icons/url.png')} />
                        <TouchableNativeFeedback onPress={() => {
                            console.log("Press for the webview")
                        }}>
                            <Text numberOfLines={1}
                                style={{
                                    fontSize: 18,
                                    color: 'blue',
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
                color: 'black'
            }}>
                {props.title}
            </Text>
            <Text style={{
                fontSize: 18,
                fontWeight: '500',
                color: 'black',
                paddingBottom: 8
            }}>
                {props.description}
            </Text>
        </View>
    );

}
export default ProjectDetailScreen;