import { StyleSheet } from "react-native";
import { fontFamily } from "./assets_manager";
import { ColorManager } from "./color_manager";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorManager.whiteColor,
        padding: 15
    },
    viewStyle: { flex: 1, justifyContent: 'center' },

    appTitle: {
        textAlign: 'center',
        fontSize: 45,
        fontFamily: fontFamily.DancingScript,
        color: ColorManager.blackColor
    },
    text: {
        textAlign: 'center',
        color: ColorManager.blackColor
    },
    textfilled: {
        marginTop: 10,
        borderColor: 'teal',
        borderWidth: 2.5,
        borderRadius: 10,
        fontSize: 18,
        color: ColorManager.blackColor,
        paddingLeft: 10
    },
    buttonStyle:
    {
        height: 65,
        width: 250,
        marginTop: 15,
        backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }
});