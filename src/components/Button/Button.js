import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './Button.style.js';

function  Button({text, onPress}){
  return (
    <View style={styles.primary.container}> 
     <TouchableOpacity style={styles.primary.button} onPress={onPress}>
        <Text style={styles.primary.text}>
          {text}
        </Text>
     </TouchableOpacity>
    </View>
  );
}
export default Button;