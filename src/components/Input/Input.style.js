import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      
    },
    input: {
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height / 18,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        margin: Dimensions.get('window').height / 40,
      
    },
    text: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 18

    }
})



