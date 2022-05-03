import React from 'react';
import { SafeAreaView, Text, StyleSheet, Dimensions } from 'react-native';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Button from './components/Button'
import Input from './components/Input'

const Stack = createStackNavigator();


export default () => {
    // const signUp=()=>{
    //   auth()
    //   .createUserWithEmailAndPassword(
    //     'raygancakici@gmail.com', 'aloalo2!'
    //   )
    //   .then(res=>console.log(res))
    //   .catch(err=>console.log(err));
    // };

    // const signIn=()=>{
    //   auth()
    //   .signInWithEmailAndPassword(
    //     'raygancakici@gmail.com', 'aloalo2!'
    //   )
    //   .then(res=>console.log("Signed in"))
    //   .catch(err=>console.log(err));
    // };

    // const signOut=()=>{
    //   auth()
    //   .signOut()
    //   .then(res=>console.log("Signed out"))
    //   .catch(err=>console.log(err));
    // };

    // const checkOut=()=>{
    //   const user=auth().currentUser;
    //   console.log(user);

    // }

    return (
        <SafeAreaView style={styles.container}>
            {/* <Text style={{fontSize:50}}>
        Hello Murat
      </Text>
      <Button title='Sign Up' onPress={signUp}/>
      <Text>...</Text>
      <Button title='Sign In' onPress={signIn}/>
      <Text>...</Text>
      <Button title='Sign Out' onPress={signOut}/>
      <Text>...</Text>
      <Button title='Check User' onPress={checkOut}/> */}



            <Input placeHolder={"enter email"} />
            <Button text={"Sign Up"} onPress={null} />
        </SafeAreaView>
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

