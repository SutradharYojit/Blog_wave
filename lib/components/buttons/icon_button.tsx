import { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native";


type iconButtonProps = PropsWithChildren<{
    onPress: Function
}>;


const IconButton = ({ children, onPress }: iconButtonProps) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            {children}
        </TouchableOpacity>
    );
}

export default IconButton;