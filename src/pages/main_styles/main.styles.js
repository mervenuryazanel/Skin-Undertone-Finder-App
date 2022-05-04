import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

    container: {
      
        alignItems: "center",
        justifyContent: "center"
    },
    header1: {
        color: "#000000",
        fontSize: 30,
        marginTop: Dimensions.get('window').height / 10
    },

    greeting: {
        color: "#9D9B9B",
        fontSize: 17,
        marginTop: Dimensions.get('window').height / 30,
        textAlign:"center"
    },

    blueSentence: {
        color: "#5F9FFF",
        fontSize: 14,
        alignSelf: 'flex-end'
    }

})
