import React from 'react';
import { TouchableOpacity, Text, View, Dimensions} from 'react-native';
import styles from './Login.style';

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import mainStyles from '../../main_styles/main.styles';


function Login({ text, onPress, navigation }) {
    function handleSubmit() {
        navigation.navigate('SignUpPage');
    }
    return (
        <View style={[styles.container]}>
            
         
                <View style={{ justifyContent: "center", alignItems: "center"}}>
                    <Text style={mainStyles.header1}>Hello Again!</Text>
                    <Text style={mainStyles.greeting}>It is nice to see you here!</Text>
                </View>
                
                        <View>
                            <Input placeHolder={"enter email..."} style={{ marginTop: 400 }} />
                            <Input placeHolder={"enter password..."} />
                            <TouchableOpacity>
                                <Text style={[mainStyles.blueSentence, { marginRight: Dimensions.get('window').height / 35 }]}>I forgot my password.</Text>
                            </TouchableOpacity>

                        </View>

                        <View >
                            <Button text={"Sign In"} onPress={null} />
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: Dimensions.get('window').height / 50, justifyContent: "center" }}>
                                <Text style={{ alignSelf: 'flex-end' }}>Don't you have an account? </Text>
                                <TouchableOpacity onPress={handleSubmit}><Text style={mainStyles.blueSentence}>Sign Up!</Text></TouchableOpacity>
                            </View>
                        </View>
        </View>
    );
}
export default Login;