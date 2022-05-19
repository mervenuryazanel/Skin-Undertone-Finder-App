import React, {useState, useRef} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import Button from '../../../components/Button';
import colors from '../../../styles/colors';
import styles from './Scan.style';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

const window = Dimensions.get("window").height;

export default function Scan({ navigation }) {
    
    function RenderBottom({style}) {
        return (
            <View style={[style,{ flexDirection: "row" }]}>


                <View style={[styles.iconContainer, { borderTopLeftRadius: 15, }]}>
                    <TouchableOpacity
                        onPress={null}

                    >
                        <Icon name="photo-library" size={38} color="#ffffff" />
                    </TouchableOpacity>
                </View>

                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={null}

                    >
                        <Icon name="flash-auto" size={38} color="#ffffff" />
                    </TouchableOpacity>
                </View>


                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() => captureHandle()}
                        style={styles.capture}
                    >
                        <Icon name="camera" size={38} color="#ffffff" />

                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() => setFront(!front)}

                    >
                        <Icon name="flip-camera-ios" size={38} color="#ffffff" />
                    </TouchableOpacity>
                </View>

                <View style={{ ...styles.iconContainer, borderTopRightRadius: 15, }}>
                    <TouchableOpacity
                        onPress={null}

                    >
                        <Icon name="account-box" size={38} color="#ffffff" />
                    </TouchableOpacity>
                </View>

            </View>

        );
    }


    function RenderBottomTaken({ style }) {
        return (
            <View style={[style, { flexDirection: "row" }]}>


                <View style={[styles.iconContainer2, { borderTopLeftRadius: 15, }]}>
                    <TouchableOpacity
                        onPress={null}

                    >
                        <Icon name="photo-library" size={38} color="#ffffff" />
                    </TouchableOpacity>
                </View>

              
                <View style={styles.iconContainer2}>
                    <TouchableOpacity
                        onPress={uploadImage}

                    >
                        {/* <Icon name="flip-camera-ios" size={38} color="#ffffff" /> */}
                        <Text style={{color:"white", fontSize:20}} >
                            Upload
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ ...styles.iconContainer2, borderTopRightRadius: 15, }}>
                    <TouchableOpacity
                        onPress={null}

                    >
                        <Icon name="account-box" size={38} color="#ffffff" />
                    </TouchableOpacity>
                </View>

            </View>

        );
    }
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

    var denemeJson;
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
                denemeJson = { imageString: dataUrl }; 
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
        fetch('http://127.0.0.1:5000', config).then(responseData => {
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
                    <View style={{
                        flex: 1, backgroundColor: "#ffffffcff", justifyContent: 'space-between'
                    }}>
                        <View style={{alignItems:'center',marginTop: window/4}}>
                        <Image
                            source={{ uri: imageUri } }
                            style={styles.preview} 
                        />
                        </View>
                        
                        <TouchableOpacity
                            style={styles.cancel }

                            onPress={() => setImageUri(null)}
                        >
                            <Text style={{color:colors.darkgray , fontSize:20, }}
                            >
                                Take Again

                            </Text>
                        </TouchableOpacity>
                        <View style={{}}>

                            <RenderBottomTaken />
                        </View>
                    </View> 
                    :
            
                    
                    <RNCamera
                        ref={cameraRef}
                        type={!front ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
                        style={styles.previewCamera}

                    >
                       
                    <RenderBottom style={{position:"absolute", bottom:15}} />
                        </RNCamera>
            }
        </View>
    );
}

