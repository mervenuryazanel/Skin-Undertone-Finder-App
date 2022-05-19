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
        alignItems: "center",
        justifyContent:"center",
        // width: "70%",
        // height: "70%"
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        width: Dimensions.get('window').width/5,
        height: 100,
        backgroundColor: colors.darkgray,
        alignSelf: "center",
        // marginBottom: 20
     },
     iconContainer2: {
         flexDirection: 'row',
         alignItems: "center",
         justifyContent: 'center',
         width: Dimensions.get('window').width / 3,
         height: 100,
         backgroundColor: colors.darkgray,
         alignSelf: "center",
         // marginBottom: 20
     },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    preview: {
        // flex: 1,
        alignItems: 'center',
        height: Dimensions.get('window').height/2.2,
        width: Dimensions.get('window').width / 1.6,
        borderWidth: 1,
        borderColor: colors.darkgray,
        borderRadius: 20,
     },
     previewCamera: {
         // flex: 1,
         alignItems: 'center',
         height: Dimensions.get('window').height,
         width: Dimensions.get('window').width,
         borderWidth: 1,
         borderColor: colors.darkgray,
         borderRadius: 20,
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