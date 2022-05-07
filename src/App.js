import React from 'react';
import { SafeAreaView, Text, StyleSheet, Dimensions } from 'react-native';
import Login from './pages/authorization/Login';
import SignUp from './pages/authorization/SignUp';
import SuccessfulSignUp from './pages/authorization/SuccessfulSignUp';
import PasswordReset from './pages/authorization/PasswordReset';
import Splash1 from './pages/splashes/Splash1/Splash1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

export default () => {

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash1Page" component={Splash1} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
        <Stack.Screen name="SuccessfulSignUpPage" component={SuccessfulSignUp} />
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="PasswordResetPage" component={PasswordReset} />

      </Stack.Navigator>
    );
  }
  // const SplashStack = () => {
  //   return (
  //     <Stack.Navigator screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name="Splash1Page" component={Splash1} />
  //       <Stack.Screen name="AuthStack" component={AuthStack} />
  //     </Stack.Navigator>
  //   );
  // }
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="SplashStack" component={SplashStack} /> */}
        <Stack.Screen name="AuthStack" component={AuthStack} />
        {/* <Stack.Screen name="ScanPage" component={Scan} /> */}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
    height: Dimensions.get('window').height
  }
})

