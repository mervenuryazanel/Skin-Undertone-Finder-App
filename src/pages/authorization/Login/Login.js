import React from 'react';
import { TouchableOpacity, Text, View, Dimensions } from 'react-native';
import styles from './Login.style';

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import mainStyles from '../../main_styles/main.styles';
import { Formik } from 'formik';

const initialFormValues = {
    email: '',
    password: '',
}

function Login({ text, onPress, navigation }) {
    function goSignUp() {
        navigation.navigate('SignUpPage');
    }

    function handleFormSubmit(formValues) {
        console.log(formValues);
    }


    return (
        <View style={[styles.container]}>


            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={mainStyles.header1}>Hello Again!</Text>
                <Text style={mainStyles.greeting}>It is nice to see you here!</Text>
            </View>

            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({values, handleChange, handleSubmit})=>(
                    <>
                        <View>
                            <Input
                                onChangeText={handleChange('email')}
                                value={values.email}
                                placeHolder={"enter email..."}
                                style={{ marginTop: 400 }}
                            />
                            <Input
                                onChangeText={handleChange('password')}
                                value={values.password}
                                placeHolder={"enter password..."} />
                            <TouchableOpacity>
                                <Text style={[mainStyles.blueSentence, { marginRight: Dimensions.get('window').height / 35 }]}>I forgot my password.</Text>
                            </TouchableOpacity>

                        </View>

                        <View >
                            <Button text={"Sign In"} onPress={handleSubmit} />
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: Dimensions.get('window').height / 50, justifyContent: "center" }}>
                                <Text style={{ alignSelf: 'flex-end' }}>Don't you have an account? </Text>
                                <TouchableOpacity onPress={goSignUp}><Text style={mainStyles.blueSentence}>Sign Up!</Text></TouchableOpacity>
                            </View>
                        </View>
                    </>
                )}
            </Formik>

        </View>
    );
}
export default Login;