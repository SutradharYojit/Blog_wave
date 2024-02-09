import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../view/splash/splash_screen';
import LoginScreen from '../view/auth/login/login_screen';
import { RoutesName } from '../resources/route_names';
import { Text } from 'react-native';



function App(): React.JSX.Element {
  
  const ScreenStack = createNativeStackNavigator();
  const [change, setChange] = useState(true);

  return (
    <NavigationContainer>
      <ScreenStack.Navigator>
        <ScreenStack.Screen name={RoutesName.splashScreen}
          component={SplashScreen}
          options={{ headerShown: false }} ></ScreenStack.Screen>
        <ScreenStack.Screen name={RoutesName.loginScreen}
          component={LoginScreen}
          options={{ headerShown: false }} ></ScreenStack.Screen>
      </ScreenStack.Navigator>
    </NavigationContainer>
  );
}


export default App;
