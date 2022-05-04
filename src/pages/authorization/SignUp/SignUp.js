import React from 'react';
import { TouchableOpacity, Text, View, Dimensions } from 'react-native';
import styles from './SignUp.style';

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import mainStyles from '../../main_styles/main.styles';

function SignUp({ text, onPress, navigation }) {
    function goSignIn() {
        navigation.navigate('LoginPage');
    }
    return (
        <View style={[styles.container]}>


            <View style={{ justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width / 1.5}}>
                <Text style={[mainStyles.header1, { marginTop: Dimensions.get('window').height / 500 }]}>Register Now</Text>
                <Text style={mainStyles.greeting}>Create an account and save matched items with your skin tone!</Text>
            </View>

            <View>
                <Input placeHolder={"enter username..."} style={{ marginTop: 400 }} />
                <Input placeHolder={"enter email..."} style={{ marginTop: 400 }} />
                <Input placeHolder={"enter password..."} />
                

            </View>

            <View >
                <Button text={"Sign Up"} onPress={goSignIn} />
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: Dimensions.get('window').height / 50, justifyContent: "center" }}>
                    <Text style={{ alignSelf: 'flex-end' }}>Already have an account? </Text>
                    <TouchableOpacity onPress={goSignIn}><Text style={mainStyles.blueSentence}>Sign In!</Text></TouchableOpacity>
                </View>
            </View>

            {/* <Button text={"Sign In"} onPress={null} theme="secondary" /> */}

        </View>
    );
}
export default SignUp;