import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './Login.style';

import Button from '../../../components/Button'
import Input from '../../../components/Input'

function Login({ text, onPress }) {
    return (
        <View style={styles.container}>
            <Input placeHolder={"enter email..."} />
            <Input placeHolder={"enter password..."} />
            <Button text={"Login"} onPress={null} />
            <Text>Don't you have an account?</Text>
            <Button text={"Sign In"} onPress={null} />
        </View>
    );
}
export default Login;