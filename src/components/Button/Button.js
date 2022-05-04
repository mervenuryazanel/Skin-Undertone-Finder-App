import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './Button.style.js';

function  Button({text, onPress, theme="primary"}){
  return (
    <View style={styles.primary.container}> 
     <TouchableOpacity style={styles[theme].button} onPress={onPress}>
        <Text style={styles[theme].text}>
          {text}
        </Text>
     </TouchableOpacity>
    </View>
  );
}
export default Button;