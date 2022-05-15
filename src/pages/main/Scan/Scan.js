import React, {useState, useRef} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import Button from '../../../components/Button';
import colors from '../../../styles/colors';
import styles from './Scan.style';

export default function Scan({navigation}) {

    const camera = useRef(null);

    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [imageUri, setImageUri] = useState("");
    const [front, setFront] = useState(false);

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            // const { uri } = await cameraRef.current.takePictureAsync({ quality: 0.5, base64: true });
            // setImageUri(uri);
            // console.log("DATA_URI_2222", uri);

            console.log("DATA_URI: ", data.uri);
            setImageUri(data.uri);
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
                imageUri ?
                    <View style={{flex: 1}}>
                        <Image
                            source={{ uri: imageUri } }
                            style={styles.preview} 
                        />
                        
                        <TouchableOpacity
                            style={styles.cancel}

                            onPress={() => setImageUri(null)}
                        >
                            <Text style={{color:colors.white , fontSize:20, }}
                            >
                                Take Again

                            </Text>
                            </TouchableOpacity>
                        
                    </View> 
                    :
            

                   
                    <RNCamera
                        ref={cameraRef}
                        type={!front ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
                        style={styles.preview}

                    >
                        <View style={{ flexDirection: "row" }}>
                            
                            <View style={styles.iconContainer}>
                                <TouchableOpacity
                                    onPress={() => setFront(!front)}
                                    
                                >
                                    <Text style={{color:"white"}}>
                                        flip
                                    </Text>
                                </TouchableOpacity>
                            </View>

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

                           
                        </View>
                        

                    </RNCamera>
            }
        </View>
    );
}

