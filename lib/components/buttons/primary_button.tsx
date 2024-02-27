import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../resources/style";

const PrimaryButton = (props: any) => {
    const { onPress, label } = props;
    return (<TouchableOpacity
        onPress={onPress}
        style={styles.buttonStyle}>
        <Text style={{ color: 'white', fontSize: 19 }} >{label}</Text>
    </TouchableOpacity>);
}


export default PrimaryButton