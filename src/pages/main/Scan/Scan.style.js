import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../styles/colors';

 export default StyleSheet.create({
     
    body: {
        flex: 1,

    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        backgroundColor: '#fff',
        borderRadius: 50,
        // padding: 15,
        // paddingHorizontal: 20,
        alignSelf: 'center',
        // margin: 20,
        width: "70%",
        height: "70%"
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: "#aaa4a4",
        alignSelf: "center",
        // marginBottom: 20
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    cancel: {
        position: 'absolute',
        right: 20,
        top: 20,
        backgroundColor: "transparent",
        color: '#FFF',
        fontWeight: '600',
        fontSize: 17,
        width: "30%",
        height: "15%",
        borderRadius:10
    }
})