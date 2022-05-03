import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './SignUp.style.js';

import Button from '../../../components/Button'
import Input from '../../../components/Input'

function SignUp({ text, onPress }) {
    return (
        <View style={styles.container}>
            <Input placeHolder={"enter email"} />
            <Button text={"Sign Up"} onPress={null} />
        </View>
    );
}
export default SignUp;