import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RoutesName } from "../../resources/route_names";
import PortfolioScreen from "../portfolio/portfolio_screen";
import BlogListingScreen from "../blog_listing/blog_listing";
import UserProfileScreen from "../user_profile/user_profile_screen";
import Icons from 'react-native-vector-icons/FontAwesome'
import { Image } from "react-native";
import { ColorManager } from "../../resources/color_manager";


const DashboardScreen = (props: any) => {
    const bottomTab = createBottomTabNavigator();
    return (
        <bottomTab.Navigator screenOptions={({ route }) => ({
            headerLeft: () => <Image style={{ width: 40, height: 40, marginLeft: 10 }} source={require('../../../assets/icons/blogger.png')} />,
            tabBarStyle: { height: 70 },
            // tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
                fontSize: 15,
                marginBottom: 5
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: string;

                switch (route.name) {
                    case RoutesName.portfolioScreen:
                        iconName = 'group';
                        break;
                    case RoutesName.blogListingScreen:
                        iconName = 'sticky-note';
                        break;
                    case RoutesName.userProfileScreen:
                        iconName = 'user';
                        break;
                    default:
                        throw new Error(`Invalid route name: ${route.name}`);
                }
                return <Icons name={iconName} size={30} color={ColorManager.blackColor} ></Icons>
            },
        })}>
            <bottomTab.Screen name={RoutesName.portfolioScreen} component={PortfolioScreen} options={{ title: "Portfolio" }} />
            <bottomTab.Screen name={RoutesName.blogListingScreen} component={BlogListingScreen} options={{ title: "Blogs" }} />
            <bottomTab.Screen name={RoutesName.userProfileScreen} component={UserProfileScreen} options={{ title: "Profile" }} />
        </bottomTab.Navigator>
    );
}

export default DashboardScreen;