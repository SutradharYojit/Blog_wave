import { Text, TouchableOpacity, View } from "react-native";
import { ColorManager } from "../resources/color_manager";
import { PropsWithChildren } from "react";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'


type AppBarProps = PropsWithChildren<{
    title: string,
    nav: Function,
}>;

const AppBar = ({ children, title, nav }: AppBarProps) => {
    return (
        <View style={{
            paddingHorizontal: 15,
            height: 55,
            flexDirection: 'row',
            backgroundColor: ColorManager.whiteColor,
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity onPress={() => nav()}>
                    <Icons name="arrow-left" size={25} color={ColorManager.blackColor}></Icons>
                </TouchableOpacity>
                <Text
                    style={{
                        textAlignVertical: "center",
                        color: ColorManager.blackColor,
                        fontSize: 20,
                        fontWeight: '500',
                        paddingLeft: 20
                    }}>
                    {title}
                </Text>
            </View>
            {children}

        </View>
    );
}

export default AppBar;