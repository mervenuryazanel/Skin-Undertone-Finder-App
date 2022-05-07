import React from 'react';
import { RNCamera } from 'react-native-camera';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const PendingView = () => (
    <View style={styles.cameraPendingView}>
        <Text>Kamera Bekleniyor...</Text>
    </View>
);
const Scan = () => {
    return (
        <View style={styles.container}>

            {/* <RNCamera

                captureAudio={false}
                style={{ flex: 1 }}
                type={RNCamera.Constants.Type.back}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }} />
                <TouchableOpacity
                    onPress={() => (console.log("sasdas"))}
                    style={styles.capture}>
                    <Text style={styles.takePhotoButton}> Fotoğraf Çek </Text>
                </TouchableOpacity> */}
            <RNCamera
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                >
                {({ camera, status }) => {
                    if (status !== 'READY') {
                        return <PendingView />;
                    }
                    return (
                        <View style={{flexDirection:'column', flex:1,width:"100%", justifyContent:"space-between"}}>
                            {/* <Icon
                                name="times"
                                style={styles.icon}
                                onPress={() => prop.route.closeGoBack()}
                            /> */}
                            
                            <Text style={{color:'white', textAlign:'right'}}> Çek </Text>

                            <View style={styles.cameraContainer}>
                                <TouchableOpacity
                                    onPress={() => console.log('asd')}
                                    style={styles.capture}>
                                    <Text style={styles.takePhotoButton}> Fotoğraf Çek </Text>
                                </TouchableOpacity>
                            </View>
                        </ View>
                    );
                }}
            </RNCamera>
        </View>
    );
}

export default Scan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    cameraPendingView: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    cameraContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    takePhotoButton: { fontSize: 14 },
});