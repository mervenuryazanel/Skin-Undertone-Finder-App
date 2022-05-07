import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

    container: {
        alignItems: "center",
        // justifyContent: "space-evenly",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    image: {

        width: '50%',
        height: '50%',
        aspectRatio: 0.5,

    },



})
