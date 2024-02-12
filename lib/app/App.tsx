import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../view/splash/splash_screen';
import LoginScreen from '../view/auth/login/login_screen';
import { RoutesName } from '../resources/route_names';
import SignUpScreen from '../view/auth/signup/signup_screen';
import DashboardScreen from '../view/dashboard/dashboard_screen';
import BloggerProfileScreen from '../view/blogger_profile/blogger_profile_screen';
import { Text } from 'react-native';

function App(): React.JSX.Element {

  const ScreenStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {<ScreenStack.Navigator>
        <ScreenStack.Screen name={RoutesName.splashScreen}
          component={SplashScreen}
          options={{ headerShown: false }} ></ScreenStack.Screen>
        <ScreenStack.Screen name={RoutesName.loginScreen}
          component={LoginScreen}
          options={{ headerShown: false }} ></ScreenStack.Screen>
        <ScreenStack.Screen name={RoutesName.signupScreen}
          component={SignUpScreen}
          options={{ headerShown: false }} ></ScreenStack.Screen>
        <ScreenStack.Screen name={RoutesName.dashboardScreen}
          component={DashboardScreen}
          options={{ headerShown: false }} ></ScreenStack.Screen>
        <ScreenStack.Screen name={RoutesName.bloggerProfileScreen}
          component={BloggerProfileScreen}
          options={{ title: "Yojit suthar", headerRight: () => <Text style={{ color: 'teal', fontSize: 19, fontWeight: '400' }}>Contact</Text> }}
        ></ScreenStack.Screen>
      </ScreenStack.Navigator>}
    </NavigationContainer>
  );
}


export default App;
