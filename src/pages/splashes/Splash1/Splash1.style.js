import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

    container: {
        alignItems: "center",
        justifyContent: "space-evenly",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    image: {
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get('window').width/1.5,
        height: Dimensions.get('window').height/4,
        justifyContent: "space-evenly",

    },
    innerContainer: {
        flexDirection: "row",
        justifyContent:"space-around",
        width: Dimensions.get('window').width,
        alignItems:"center"

    },



})
