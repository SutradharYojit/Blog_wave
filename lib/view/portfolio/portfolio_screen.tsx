import React, { useEffect } from "react";
import { FlatList, Image, Text, TouchableNativeFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RoutesName } from "../../resources/route_names";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/action/action";
import { UserModel } from "../../model/user_model";
import { UserPreference } from "../../services/user_preference";
import Loading from "../../components/loading";
import { ColorManager } from "../../resources/color_manager";


const PortfolioScreen = (props: any) => {
    const userPreference = new UserPreference();

    const dispatch = useDispatch();
    const handleClick = async () => {
        await userPreference.getUserInfo();
        dispatch(getAllUser());
    };

    useEffect(() => {
        handleClick();
    }, []
    )

    const datal: UserModel[] = useSelector((state: any) => state.Users.user);
    const loading: boolean = useSelector((state: any) => state.Users.loading);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: ColorManager.whiteColor,
            paddingHorizontal: 15
        }}>
            {
                loading === true ? <View style={{ flex: 1 }}>
                    <FlatList
                        data={datal}
                        style={{ paddingBottom: 10 }}
                        renderItem={(data) =>
                            <TouchableNativeFeedback onPress={() => {
                                props.navigation.navigate(RoutesName.bloggerProfileScreen, { "userData": data });
                            }}>
                                <View style={{
                                    height: 100,
                                    marginBottom: 12,
                                    backgroundColor: ColorManager.whiteColor,
                                    borderRadius: 18,
                                    shadowColor: ColorManager.blackColor,
                                    elevation: 8,
                                    flexDirection: 'row'
                                }}>
                                    <Image source={{
                                        uri: 'https://c4.wallpaperflare.com/wallpaper/404/780/895/multiple-display-dual-monitors-abstract-digital-art-wallpaper-thumb.jpg'
                                    }} style={{ height: 100, width: 120, borderRadius: 18, }}></Image>
                                    <View style={{ flexDirection: 'column', justifyContent: 'center', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 18, color: ColorManager.blackColor, fontWeight: "600" }}>
                                            {data.item.userName}
                                        </Text>
                                        <Text style={{ fontSize: 17, color: ColorManager.blackColor }}>
                                            {data.item.email}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback >
                        }
                    ></FlatList>
                </View> : <Loading></Loading>
            }
        </SafeAreaView >
    );
}

export default PortfolioScreen;