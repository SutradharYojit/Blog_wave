import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import { RoutesName } from "../../resources/route_names";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogInfo } from "../../redux/action/action";
import { BlogModel } from "../../model/blog_model";
import { Utils } from "../../services/util";

const BlogListingScreen = (props: any) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBlogInfo());
    }, [])

    const onRefresh = useCallback(() => {
        console.log("reload");
        setIsRefreshing(true);
        dispatch(fetchBlogInfo());
        setIsRefreshing(false);
    }, []);

    const formatDate = new Utils();
    const [isRefreshing, setIsRefreshing] = useState(false);
    // const datal = useSelector((state: any) => state.Users);
    const blogs: BlogModel[] = useSelector((state: any) => state.blogList.blog);
    const loading = useSelector((state: any) => state.blogList.loading);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={blogs}
                    refreshing={isRefreshing}
                    onRefresh={onRefresh}
                    renderItem={(data) => <TouchableNativeFeedback onPress={() => {
                        props.navigation.navigate(RoutesName.blogDetailsScreen, { "blogData": data.item });
                    }}>
                        <View style={{
                            backgroundColor: 'white',
                            padding: 15,
                            marginBottom: 10,
                            borderRadius: 10,
                            shadowColor: 'black',
                            elevation: 8,
                        }}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>
                                {formatDate.formatDate(data.item.createdAt)}
                            </Text>

                            <View style={{
                                backgroundColor: 'blue',
                                borderRadius: 10,
                                marginVertical: 10
                            }}>
                                <Image source={{
                                    uri: 'https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg'
                                }} style={{ height: 190, borderRadius: 10, }}>
                                </Image>
                            </View>
                            <Text style={{ fontSize: 18, fontWeight: '900', color: 'black' }}>
                                {data.item.title}
                            </Text>

                        </View>
                    </TouchableNativeFeedback>
                    }
                ></FlatList>

            </View>
        </SafeAreaView >
    );

}

export default BlogListingScreen;
