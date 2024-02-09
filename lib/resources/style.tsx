import { StyleSheet } from "react-native";
import { fontFamily } from "./assets_manager";
import { ColorManager } from "./color_manager";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    },

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
});