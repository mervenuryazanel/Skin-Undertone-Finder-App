import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, Dimensions } from 'react-native';
import Login from './pages/authorization/Login';
import SignUp from './pages/authorization/SignUp';
import SuccessfulSignUp from './pages/authorization/SuccessfulSignUp';
import PasswordReset from './pages/authorization/PasswordReset';
import Splash1 from './pages/splashes/Splash1/Splash1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import Scan from './pages/main/Scan';
import TakenPhoto from './pages/main/TakenPhoto';

const Stack = createNativeStackNavigator();

export default () => {

  // const [data, setData] = useState([]);
  // // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");


  // const insertData = () => {
  //   fetch('http://172.20.10.2:3000/add', {
  //     method: 'POST',
  //     header: {
  //       'Contetnt-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ body: body })

  //   })
  //     .then(resp => resp.json)
  //     .then(data => console.log("------------DATA---------", data))
  //     .catch(error => console.log(error));


  // }

  // img={"asd":"asd"}
  // useEffect(() => {
  //   // fetch('http://172.20.10.2:3000/get', {
  //   //   method: 'GET'
  //   // })
  //   //   .then(resp => resp.json()
  //   //   )
  //   //   .then(
  //   //     x => {
  //   //       setData(x);
  //   //       console.log("DATAAAAAaaaaaaaaaaaaaaaaaaaaaaa: ", x);
  //   //     }
  //   //   )
  //   //   .catch(error => { console("errooooooooooooor", error); });

  //   fetch('http://172.20.10.2:3000/predict', {
  //     method: 'POST',
  //     body: JSON.stringify({ "asd": "asdasd" })
  //   })
  //     .then(resp => resp.json()
  //     )
  //     .then(
  //       x => {
  //         setData(x);
  //         console.log("DATAAAAAaaaaaaaaaaaaaaaaaaaaaaa: ", x);
  //       }
  //     )
  //     .catch(error => { console("errooooooooooooor", error); });

  // }, [])

  const SplashStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Splash1Page" component={Splash1} />
        {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}


      </Stack.Navigator>
    );
  }

  const MainStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="ScanPage" component={Scan} />
        <Stack.Screen name="TakenPhotoPage" component={TakenPhoto} />
      </Stack.Navigator>

    );

  }

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="MainPages" component={MainStack} />

        <Stack.Screen name="SplashPages" component={SplashStack} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
        <Stack.Screen name="SuccessfulSignUpPage" component={SuccessfulSignUp} />
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="PasswordResetPage" component={PasswordReset} />
        {/* <Stack.Screen name="MainPages" component={MainStack} /> */}

        {/* <Stack.Screen name="MainPages" component={MainStack} /> */}


        {/* <Stack.Screen name="ScanPage" component={Scan} /> */}

        {/* <Stack.Screen name="ScanPage" component={Scan} /> */}

      </Stack.Navigator>
    );
  }

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

