import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Dimensions, Image} from 'react-native';
import styles from './PasswordReset.style';
import ColorPalette1 from '../../../components/SVGcomponents/ColorPalette1';
import mainStyles from '../../../styles/main_styles/main.styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import authErrorMessages from '../../../utils/authErrorMessages';
import { showMessage, hideMessage } from "react-native-flash-message";
import colors from '../../../styles/colors';

const initialFormValues = {
    email: ''
}

function PasswordReset({ navigation }) {

    const [loading, setLoading] = useState(false);


    async function handleFormSubmit(formValues) {
        console.log(formValues);
        try {
            if (formValues.email != '') {
                setLoading(true);
                await auth().sendPasswordResetEmail(
                    formValues?.email,
                );
                setLoading(false);
                showMessage({ //flash message for success
                    message: "Şifre sıfırlama maili başarıyla gönderildi. Mesaj kutunuzu lütfen kontrol ediniz",
                    type: "success",
                    backgroundColor: colors.success,
                    // animationDuration: 1000,
                    
                });
                // navigation.navigate('LoginPage');
            } else {
                showMessage({ //flash message for success
                    message: "Gerekli alanları lütfen doldurunuz.",
                    type: "error",
                    backgroundColor: colors.error,
                    // animationDuration:1000
                });
            }
        } catch (error) {
            showMessage({ //flash message for errors
                message: authErrorMessages(error.code),
                type: "info",
                backgroundColor: colors.error,
                // animationDuration: 1000

            });
            console.log(error);
            setLoading(false);
        }
    }

    function goSignIn() {
        navigation.navigate('LoginPage');
    }

    return (
        <View style={styles.container}>
            <Image
                style={mainStyles.circles}
                source={require('../../../../assets/images/circles.png')}
            />

            <Text style={mainStyles.header1}>
                Password Reset
            </Text>
            <Text style={mainStyles.greeting}>
                Please check your mailbox to reset your password.
            </Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            value={values.email}
                            placeHolder={"enter email..."}
                            style={{ marginTop: 400 }}
                            onChangeText={handleChange('email')}
                        />

                        <Button text={"Send"} onPress={handleSubmit} loading={loading} />
                    </>
                )}
            </Formik>
            <Button
                text={"Go Back to Sign In Page"}
                onPress={goSignIn}
                theme={"secondary"}
                 />
        </View>
    );
}

export default PasswordReset;