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
import BloggercontactScreen from '../view/blogger_contact/blogger_contact_screen';
import EditProfileScreen from '../view/user_profile/edit_profile_screen';
import ProjectListingScreen from '../view/project/project_listing_screen';
import AddBlogScreen from '../view/add_blog/add_blog_screen';
import BlogDetailsScreen from '../view/blog_details/blog_details_screen';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ProjectDetailScreen from '../view/project/project_details_screen';
import AddProjectScreen from '../view/project/add_project_screen';
import WebViewScreen from '../view/web_view/web_view_screen';

function App(): React.JSX.Element {

  const ScreenStack = createNativeStackNavigator();

  return (
    <Provider store={store} >
      <NavigationContainer>
        {
          <ScreenStack.Navigator>
            <ScreenStack.Screen name={RoutesName.splashScreen}
              component={SplashScreen}
              options={{ headerShown: false }} >
            </ScreenStack.Screen>
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
              options={{
                headerShown: false
              }}
            ></ScreenStack.Screen>
            <ScreenStack.Screen name={RoutesName.bloggerContactScreen}
              component={BloggercontactScreen}
              options={{ title: "Contact" }} ></ScreenStack.Screen>
            <ScreenStack.Screen name={RoutesName.eFditProfileScreen}
              component={EditProfileScreen}
              options={{
                title: "Edit Profile",
              }} >
            </ScreenStack.Screen>
            <ScreenStack.Screen name={RoutesName.ProjectListingScreen}
              component={ProjectListingScreen}
              options={{
                title: "Projects",
              }} >
            </ScreenStack.Screen>
            <ScreenStack.Screen name={RoutesName.addBlogScreen}
              component={AddBlogScreen}
              options={{
                title: "Add Blog",
              }} >
            </ScreenStack.Screen>
            <ScreenStack.Screen name={RoutesName.blogDetailsScreen}
              component={BlogDetailsScreen}
              options={{
                headerShown: false
              }} >
            </ScreenStack.Screen>
            <ScreenStack.Screen name={RoutesName.projectDetailScreen}
              component={ProjectDetailScreen}
              options={{
                headerShown: false
              }} >
            </ScreenStack.Screen>
            <ScreenStack.Screen name={RoutesName.addProjectScreen}
              component={AddProjectScreen}
              options={{
                headerShown: false
              }} >
            </ScreenStack.Screen>
            <ScreenStack.Screen name={RoutesName.webViewScreen}
              component={WebViewScreen}
              options={{
                title: "Project Url",
              }} >
            </ScreenStack.Screen>

          </ScreenStack.Navigator>
        }
      </NavigationContainer>
    </Provider>
  );
}


export default App;
