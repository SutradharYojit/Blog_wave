import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../resources/style";

const BloggerProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    BloggerProfileScreen
                </Text>
            </View>
        </SafeAreaView >
    );
}

export default BloggerProfileScreen;