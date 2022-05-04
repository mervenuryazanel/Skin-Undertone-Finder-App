import React from 'react';
import { TouchableOpacity, Text, View, Dimensions } from 'react-native';
import styles from './SignUp.style';

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import mainStyles from '../../main_styles/main.styles';

import { Formik } from 'formik';

const initialFormValues = {
    username: '',
    email: '',
    password: '',
}

function SignUp({ text, onPress, navigation }) {
    function goSignIn() {
        navigation.navigate('LoginPage');
    }

    function handleFormSubmit(formValues) {
        console.log(formValues);
    }

    return (
        <View style={[styles.container]}>


            <View style={{ justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width / 1.5 }}>
                <Text style={[mainStyles.header1, { marginTop: Dimensions.get('window').height / 500 }]}>Register Now</Text>
                <Text style={mainStyles.greeting}>Create an account and save matched items with your skin tone!</Text>
            </View>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>

                { ({values, handleChange, handleSubmit})=>(
                    <>

                        <View>
                            <Input
                                value={values.username}
                                placeHolder={"enter username..."}
                                style={{ marginTop: 400 }}
                                onChangeText={handleChange('username')} />
                            <Input
                                value={values.email}
                                placeHolder={"enter email..."}
                                style={{ marginTop: 400 }}
                                onChangeText={handleChange('email')}
                            />
                            <Input
                                value={values.password}
                                placeHolder={"enter password..."}
                                onChangeText={handleChange('password')}
                            />
                        </View>

                        <View >
                            <Button text={"Sign Up"} onPress={handleSubmit} />
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: Dimensions.get('window').height / 50, justifyContent: "center" }}>
                                <Text style={{ alignSelf: 'flex-end' }}>Already have an account? </Text>
                                <TouchableOpacity onPress={goSignIn}><Text style={mainStyles.blueSentence}>Sign In!</Text></TouchableOpacity>
                            </View>
                        </View>
                    </>
                )
                }


            </Formik>


        </View>
    );
}
export default SignUp;