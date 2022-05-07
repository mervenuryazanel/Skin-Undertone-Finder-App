import { StyleSheet, Dimensions } from 'react-native'
import colors from '../colors'

export default StyleSheet.create({

    container: {
      
        alignItems: "center",
        justifyContent: "center"
    },
    header1: {
        color: colors.darkgray,
        fontSize: 30,
        marginTop: Dimensions.get('window').height / 10,
        textAlign: "center",
    },

    greeting: {
        color: "#9D9B9B",
        fontSize: 17,
        marginTop: Dimensions.get('window').height / 30,
        textAlign: "center",
    },

    blueSentence: {
        color: "#5F9FFF",
        fontSize: 14,
        alignSelf: 'flex-end'
    },
    textWithShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    circles: {
        // position: "absolute",
        // width: Dimensions.get('window').width / 1.25,
        // height: Dimensions.get('window').height / 4,
        width: '90%',
        height: undefined,
        aspectRatio: 1,
        position: "absolute",
        left:-120,
        top:-150
        
    },

})
