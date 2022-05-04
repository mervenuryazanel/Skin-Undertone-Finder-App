import React from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './Input.style.js';

function Input({ placeHolder, value, onChangeText, isSecure}) {
 // const [value, onChangeText] = React.useState("");
  
  return (
    <View style={styles.container}> 
      <TextInput
        autoCapitalize='none'
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        secureTextEntry={isSecure}
      />
    </View>
  );
}
export default Input;