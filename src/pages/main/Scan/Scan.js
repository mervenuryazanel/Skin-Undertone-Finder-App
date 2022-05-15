import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';

export default function Scan({navigation}) {

    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [imageUri, setImageUri] = useState("");

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log("DATA_URI: ",data.uri);
            const filePath = data.uri; //source path
            const newFilePath = RNFS.ExternalDirectoryPath + '/mytest.jpg'; //target path
            RNFS.moveFile(filePath, newFilePath)
                .then(
                    () => {
                        console.log('Image moved from ' + filePath + ' to ' + newFilePath);
                        // navigation.navigate('TakenPhotoPage', {
                        //     url: data.uri,
                        // });
                        
                    }
                ).catch(
                    error => {
                        console.log(error);
                    }
                )
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.body}>
            {
                imageUri ? <ImageBackground
                    source={{ uri: imageUri }}
                    resizeMode="cover"
                    style={styles.image}
                /> :
            
            
                    <RNCamera
                        ref={cameraRef}
                        type={RNCamera.Constants.Type.back}
                        style={styles.preview}

                    >
                        <View style={styles.iconContainer}>
                            <TouchableOpacity
                                onPress={() => captureHandle()}
                                style={styles.capture}
                            >
                                <Text>
                                    capture
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </RNCamera>
            }
        </View>
    );
}

const styles = StyleSheet.create({
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
        // backgroundColor: "#aaa4a4",
        alignSelf: "center",
        // marginBottom: 20
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
})