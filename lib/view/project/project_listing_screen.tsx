import React, { useDebugValue, useEffect } from "react";
import { FlatList, Image, Text, TouchableNativeFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { RoutesName } from "../../resources/route_names";
import { FAB } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { featchProjectInfo } from "../../redux/action/action";
import { ProjectModel } from "../../model/project_model";
import { UserPreference } from "../../services/user_preference";

const ProjectListingScreen = (props: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(featchProjectInfo({ userId: UserPreference.userId }))
    }, [])

    const projects: ProjectModel[] = useSelector((state: any) => state.projectList.project);
    const loading = useSelector((state: any) => state.projectList.loading);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <FlatList data={projects}
                    renderItem={(data) =>
                        <TouchableNativeFeedback onPress={() => {
                            props.navigation.navigate(RoutesName.projectDetailScreen, { "projectData": data.item, "projectsListing": true });
                        }}>
                            <View style={{
                                backgroundColor:
                                    'rgba(241, 242, 245, 1)',
                                borderRadius: 15,
                                padding: 10,
                                marginTop: 10
                            }}>
                                <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                    <Image style={{
                                        width: 23,
                                        height: 23,
                                        marginLeft: 10
                                    }} source={require('../../../assets/icons/tag.png')} />
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            fontSize: 18,
                                            color: 'black',
                                            flex: 1,
                                        }}>  {data.item.title}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Image
                                        style={{
                                            width: 23,
                                            height: 23,
                                            marginLeft: 10
                                        }}
                                        source={require('../../../assets/icons/url.png')} />
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            fontSize: 18,
                                            color: 'blue',
                                            flex: 1,
                                            textDecorationLine: 'underline'
                                        }}> {data.item.projectUrl}</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    }>
                </FlatList>
                <FAB
                    icon="plus"
                    style={{
                        position: 'absolute',
                        margin: 16,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'white'
                    }}
                    onPress={() => {
                        props.navigation.navigate(RoutesName.addProjectScreen, {
                            "userData": {
                                "projectData": null,
                                "updateProjects": false
                            }
                        });
                    }}
                />
            </View>
        </SafeAreaView >
    );
}

export default ProjectListingScreen;