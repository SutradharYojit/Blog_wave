import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";
import Icons from 'react-native-vector-icons/AntDesign'

const UserProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Icons name="switcher" size={80} color={'red'} ></Icons>
                <Text>
                    USERPROFILE SCREEN
                </Text>
            </View>
        </SafeAreaView >
    );
}

export default UserProfileScreen;