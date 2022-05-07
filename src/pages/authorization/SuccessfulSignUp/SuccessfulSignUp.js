import React, { useState } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import styles from './SuccessfulSignUp.style';
import mainStyles from '../../../styles/main_styles/main.styles';
import Button from '../../../components/Button';
import authErrorMessages from '../../../utils/authErrorMessages';
import { showMessage, hideMessage } from "react-native-flash-message";
import Verified from '../../../components/SVGcomponents/Verified';

function SuccessfulSignUp({ navigation }) {

    function goScan() {
        navigation.navigate('ScanPage');
    }

    return (
        <View style={styles.container} >
            <Verified style={styles.image} />
            <View>
                <Text style={[mainStyles.header1, { marginTop: 0 }]}>
                    Login Successful!
                </Text>
                <Text style={mainStyles.greeting}>
                    Start to find your true colors!
                </Text>
                <Button
                    text={"Start"} onPress={goScan}
                    buttonStyle={{
                        marginTop: Dimensions.get('window').height / 8,
                    }} />
            </View>

        </View>
    );
}

export default SuccessfulSignUp;