import React, {useState, useRef} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import Button from '../../../components/Button';
import colors from '../../../styles/colors';
import styles from './Scan.style';
import ImageJson from "./img/ImageJson";



export default function Scan({ navigation }) {
    

    const camera = useRef(null);

    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [imageUri, setImageUri] = useState("");
    const [front, setFront] = useState(false);

    let base64String = "";


    function toDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
        
    }

    

    // toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', function (dataUrl) {
    //     console.log('RESULT:', dataUrl)
    // })


    const captureHandle = async () => {
        try {
            const data = await takePicture();
            // const { uri } = await cameraRef.current.takePictureAsync({ quality: 0.5, base64: true });
            // setImageUri(uri);
            // console.log("DATA_URI_2222", uri);

            console.log("DATA_URI: ", data.uri);
            setImageUri(data.uri);
            toDataURL(data.uri, function (dataUrl) {
                // console.log('RESULT:', dataUrl);
                var newValue = dataUrl; //------------------------------------------------------- as base64
                var denemeJson = { imageString: dataUrl }; 
                // console.log(denemeJson);
                console.log("---------length--------:", dataUrl.length);
               
            })

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

    const uploadImage = () => {
        
        var data = new FormData();

        data.append('file', { uri: data.uri, name: 'mytest.jpg', type: 'image/jpg' });
        // Create the config object for the POST
        const config = {
            method: 'POST',
            body: data
        };
        fetch('URL', config).then(responseData => {
            // Log the response form the server // Here we get what we sent to Postman 
            back
            console.log(responseData);
        })
            .catch(err => { console.log(err); });
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
                        <TouchableOpacity
                            style={{ width: "25%", height: "5%", position: "absolute", left: "38%", top: "91%", backgroundColor: "#faf6c9", borderRadius: 15 }}
                            onPress={uploadImage}
                        >
                            <Text style={{color:colors.darkgray, fontSize:25, textAlign:"center"}}>
                            Upload 
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
                                    
                                </TouchableOpacity>
                            </View>

                           
                        </View>
                        

                    </RNCamera>
            }
        </View>
    );
}

