import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { useDispatch } from "react-redux";
import { addBlog, fetchBlogInfo, updateBlog } from "../../redux/action/action";

const AddBlogScreen = (props: any) => {
    const dispatch = useDispatch();

    const { userData } = props.route.params;
    // console.log(userData.updateblogs)

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (userData.updateblogs) {
            setTitle(userData.blogData.title);
            setDescription(userData.blogData.description);
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <TextInput
                    placeholderTextColor={'black'}
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
                    placeholderTextColor={'black'}
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
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
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

                        }}
                        style={{
                            height: 65,
                            width: 250,
                            marginTop: 15,
                            backgroundColor: 'teal',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 15,
                        }}>
                        {
                            userData.updateblogs == true ? <Text style={{ color: 'white', fontSize: 19 }} >Update Blog</Text> : <Text style={{ color: 'white', fontSize: 19 }} >Add Blog</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
}

export default AddBlogScreen;