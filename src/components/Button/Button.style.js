import {StyleSheet, Dimensions} from 'react-native'
import colors from '../../styles/colors';


const base_style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height / 13,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        margin: Dimensions.get('window').height / 20,
        marginBottom: 0,


    },
    text: {
        fontSize: 18

    }
});

export default {
    primary: StyleSheet.create({
        ...base_style,
        button: {
            ...base_style.button,
            backgroundColor: colors.darkgray,
        },
        text: {
            ...base_style.text,
            color: colors.white,
        }
    }),

    secondary: StyleSheet.create({
       ...base_style,
        button: {
            ...base_style.button,
            backgroundColor: colors.gray
        },
        text: {
            ...base_style.text,
            color: colors.darkgray,
           }
    })
}