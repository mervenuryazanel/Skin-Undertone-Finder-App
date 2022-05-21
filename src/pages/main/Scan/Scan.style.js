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
        height: Dimensions.get('window').height/1.8,
        width: Dimensions.get('window').width / 1.1,
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
        right: 10,
        top: 10,
        backgroundColor: "#f7ecec",
        color:colors.darkgray,
        fontWeight: '600',
        fontSize: 17,
        width: "30%",
        height: "6%",
        borderRadius: 10,
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        
        
    }
})