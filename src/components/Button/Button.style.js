import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native';

export default {
    primary: StyleSheet.create({
        container: {
            alignItems: "center",
            justifyContent: "center"
        },
        button: {
            width: Dimensions.get('window').width / 1.7,
            height: Dimensions.get('window').height / 12,
            backgroundColor: "rgba(54, 54, 54, 1)",
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            margin: Dimensions.get('window').height / 20
      
        },
        text: {
            color: "rgba(255, 255, 255, 1)",
            fontSize: 18

        }
    }),
    secondary: StyleSheet.create({
        container: {
            alignItems: "center",
            justifyContent: "center"
        },
        button: {
            width: Dimensions.get('window').width / 1.7,
            height: Dimensions.get('window').height / 12,
            backgroundColor: "rgba(54, 54, 54, 1)",
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            margin: Dimensions.get('window').height / 20

        },
        text: {
            color: "rgba(255, 255, 255, 1)",
            fontSize: 18

        }
    })
}