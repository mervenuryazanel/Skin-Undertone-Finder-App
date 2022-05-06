import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import styles from './Button.style.js';

function Button({ text, onPress, theme = "primary", loading = false, buttonStyle }) {
  return (
    <View style={styles.primary.container}>
      <TouchableOpacity style={[styles[theme].button, buttonStyle]} onPress={onPress}>
        {loading ?
          <ActivityIndicator color="#FAFF2D" size={'large'} /> :

          <Text style={styles[theme].text}>
            {text}
          </Text>
        }

      </TouchableOpacity>
    </View>
  );
}
export default Button;