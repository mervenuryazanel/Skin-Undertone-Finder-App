import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Dimensions } from 'react-native';
import styles from './Splash1.style';
import ColorPalette1 from '../../../components/SVGcomponents/ColorPalette1';
import mainStyles from '../../../styles/main_styles/main.styles';
import Button from '../../../components/Button';
import colors from '../../../styles/colors';

function Splash1({ navigation }) {
    function goSignUp() {
        navigation.navigate('SignUpPage');
    }
    function goSignIn() {
        navigation.navigate('LoginPage');
    }
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={[mainStyles.header1, { marginTop: 0 }]}>
                    {' '}Find{'\n'} your{'\n'} <Text style={[mainStyles.textWithShadow, { color: colors.yellow }]}>skin{'\n'}</Text> tone
                </Text>
                <ColorPalette1 style={styles.image} />
            </View>
            <Text style={[mainStyles.greeting, { marginHorizontal: Dimensions.get('window').height / 15 }]}>
                And find all the color palettes that fits to you!
            </Text>

            <View style={{ flexDirection: "row" }}>
                <Button
                    text={"Register"}
                    onPress={goSignUp}
                    buttonStyle={{
                        margin: 0,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        width: Dimensions.get('window').width / 2.7,
                        height: Dimensions.get('window').height / 12,
                    }} />
                <Button
                    text={"Sign In"}
                    onPress={goSignIn}
                    theme={"secondary"}
                    buttonStyle={{
                        margin: 0,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        width: Dimensions.get('window').width / 2.7,
                        height: Dimensions.get('window').height / 12,
                    }} />

            </View>
        </View>
    );
}

export default Splash1;