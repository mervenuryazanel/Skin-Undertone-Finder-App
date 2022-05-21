import React, {useState} from 'react';
import { TouchableOpacity, Text, View, Dimensions, Image, KeyboardAvoidingView } from 'react-native';
import styles from './SignUp.style';

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import mainStyles from '../../../styles/main_styles/main.styles';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import authErrorMessages from '../../../utils/authErrorMessages';
import { showMessage, hideMessage } from "react-native-flash-message";
import colors from '../../../styles/colors';

const initialFormValues = {
    username: '',
    email: '',
    password: '',
}

function SignUp({ text, onPress, navigation }) {
    const [loading, setLoading] = useState(false);


    function goSignIn() {
        navigation.navigate('LoginPage');
    }

    function goSuccesfulSignUpPage() {
        navigation.navigate('SuccessfulSignUpPage');
    }
    async function handleFormSubmit(formValues) {
        console.log(formValues);
        try {
            if (formValues.email != '' && formValues.password != '') {
                setLoading(true);
                await auth().createUserWithEmailAndPassword(
                    formValues?.email, formValues?.password
                );
                setLoading(false);
                showMessage({ //flash message for success
                    message: "Kayıt başarıyla oluşturuldu.",
                    type: "info",
                    backgroundColor: colors.success
                });
                // navigation.navigate('LoginPage');
                navigation.navigate('SuccessfulSignUpPage');
            } else {
                showMessage({ //flash message for success
                    message: "Gerekli alanları lütfen doldurunuz.",
                    type: "error",
                    backgroundColor: colors.error
                });
            }
        } catch (error) {
            showMessage({ //flash message for errors
                message: authErrorMessages(error.code),
                type: "info",
                backgroundColor: colors.error
            });
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={"height"}
            style={styles.container}
        >
            <Image
                style={mainStyles.circles}
                source={require('../../../../assets/images/circles.png')}
            />
            <View
                style={{ justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width / 1.5 }}>
                <Text
                    style={[mainStyles.header1, { marginTop: Dimensions.get('window').height / 500 }]}>
                    Register Now
                </Text>
                <Text
                    style={mainStyles.greeting}>
                    Create an account and save matched items with your skin tone!
                </Text>
            </View>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>

                { ({values, handleChange, handleSubmit})=>(
                    <>

                        <View>
                            <Input
                                value={values.username}
                                placeHolder={"enter username..."}
                                // style={{ marginTop: 400 }}
                                onChangeText={handleChange('username')} />
                            <Input
                                value={values.email}
                                placeHolder={"enter email..."}
                                // style={{ marginTop: 100 }}
                                onChangeText={handleChange('email')}
                            />
                            <Input
                                value={values.password}
                                placeHolder={"enter password..."}
                                onChangeText={handleChange('password')}
                                isSecure={true}
                            />
                        </View>

                        <View >
                            <Button text={"Sign Up"} onPress={handleSubmit} loading={loading} />
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: Dimensions.get('window').height / 50, justifyContent: "center" }}>
                                <Text style={{ alignSelf: 'flex-end' }}>Already have an account? </Text>
                                <TouchableOpacity onPress={goSignIn}><Text style={mainStyles.blueSentence}>Sign In!</Text></TouchableOpacity>
                            </View>
                        </View>
                    </>
                )
                }


            </Formik>


        </KeyboardAvoidingView>
    );
}
export default SignUp;