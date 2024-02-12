// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Home from './Home'
// import Create from './Create'
// import Messages from './Messages'
// import Forum from './Forum'
// import Profile from './Profile'
// import LottieView from "lottie-react-native";
// import Icon from 'react-native-vector-icons/Feather';

// const Tabs = createBottomTabNavigator();

// export default function App() {
//     return (

//         <Tabs.Navigator

//             screenOptions={({ route }) => ({
//                 tabBarShowLabel: false,
//                 tabBarHideOnKeyboard: true,
//                 style: {
//                     borderRadius: 15,
//                     height: 90,
//                 },
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName;

//                     switch (route.name) {
//                         case 'Home':
//                             iconName = 'home';
//                             break;
//                         case 'Messages':
//                             iconName = 'message-circle';
//                             break;
//                         case 'Create':
//                             iconName = 'home';
//                             break;
//                         case 'Forum':
//                             iconName = 'activity';
//                             break;
//                         case 'Profile':
//                             iconName = 'user';
//                             break;
//                         default:
//                             break;
//                     }
//                     // return <Ionicons name={iconName} size={size} color={color} />;
//                     // return <LottieView source={filePath} loop={false} autoPlay={focused} />;
//                     return <Icon name={iconName} color={color} size={24} />;
//                 },
//             })}
//         >
//             <Tabs.Screen name="Home" component={Home} />
//             <Tabs.Screen name="Messages" component={Messages} />
//             <Tabs.Screen name="Create" component={Create} />
//             <Tabs.Screen name="Forum" component={Forum} />
//             <Tabs.Screen name="Profile" component={Profile} />
//         </Tabs.Navigator>
//     );
// }