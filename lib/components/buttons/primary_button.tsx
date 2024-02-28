import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../resources/style";
import { ColorManager } from "../../resources/color_manager";

const PrimaryButton = (props: any) => {
    const { onPress, label } = props;
    return (<TouchableOpacity
        onPress={onPress}
        style={styles.buttonStyle}>
        <Text style={{ color: ColorManager.whiteColor, fontSize: 19 }} >{label}</Text>
    </TouchableOpacity>);
}


export default PrimaryButton