import React, {useState, useRef, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import Button from '../../../components/Button';
import colors from '../../../styles/colors';
import styles from './Scan.style';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { LogBox } from "react-native";
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from "react-native-image-picker"



const window = Dimensions.get("window").height;

export default function Scan({ navigation }) {

    const [flashMode, setFlashMode] = useState('off');
    const [data, setData] = useState([]);
  // const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    
    
    const uploadImage = () => {

        fetch('http://172.20.10.2:3000/predict', {
            method: 'POST',
            body: JSON.stringify({ "asd": "asdasd" })
        })
            .then(resp => resp.json()
            )
            .then(
                x => {
                    setData(x);
                    console.log("DATAAAAAaaaaaaaaaaaaaaaaaaaaaaa: ", x);
                }
            )
            .catch(error => { console("errooooooooooooor", error); });

    }


  // const insertData = () => {
  //   fetch('http://172.20.10.2:3000/add', {
  //     method: 'POST',
  //     header: {
  //       'Contetnt-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ body: body })

  //   })
  //     .then(resp => resp.json)
  //     .then(data => console.log("------------DATA---------", data))
  //     .catch(error => console.log(error));


  // }

  // img={"asd":"asd"}
  // useEffect(() => {
  //   // fetch('http://172.20.10.2:3000/get', {
  //   //   method: 'GET'
  //   // })
  //   //   .then(resp => resp.json()
  //   //   )
  //   //   .then(
  //   //     x => {
  //   //       setData(x);
  //   //       console.log("DATAAAAAaaaaaaaaaaaaaaaaaaaaaaa: ", x);
  //   //     }
  //   //   )
  //   //   .catch(error => { console("errooooooooooooor", error); });

  //   fetch('http://172.20.10.2:3000/predict', {
  //     method: 'POST',
  //     body: JSON.stringify({ "asd": "asdasd" })
  //   })
  //     .then(resp => resp.json()
  //     )
  //     .then(
  //       x => {
  //         setData(x);
  //         console.log("DATAAAAAaaaaaaaaaaaaaaaaaaaaaaa: ", x);
  //       }
  //     )
  //     .catch(error => { console("errooooooooooooor", error); });

  // }, [])
    
    

    useEffect(() => {

        LogBox.ignoreLogs([ // to ignoring the "ViewPropType will be removed from React Native" warning
            "ViewPropTypes will be removed",
            "ColorPropType will be removed",
        ]);




    }, [])
    
    function RenderBottom({style}) {
        return (
            <View style={[style,{ flexDirection: "row" }]}>


                <View style={[styles.iconContainer, { borderTopLeftRadius: 15, }]}>
                    <TouchableOpacity
                        onPress={imageGalleryLaunch}

                    >
                        <Icon name="photo-library" size={38} color="#ffffff" />
                    </TouchableOpacity>
                </View>

                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            if (flashMode == "off") {
                                setFlashMode("on")
                            }
                            else if (flashMode == "on") {
                                setFlashMode("auto")
                            }
                            else {
                                setFlashMode("off");
                            }
                        }}

                    >
                        {
                            flashMode == "on" ?
                            < Icon name="flash-on" size={38} color="#ffffff" />
                        :
                            flashMode=="off" ?
                            <Icon name="flash-off" size={38} color="#ffffff" />
                        :
                            <Icon name="flash-auto" size={38} color="#ffffff" />

                        }
                            
                           
                        
                        
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
                        {/* <Text style={{color:"white", fontSize:20, borderColor:"white", borderWidth:1, padding:10, borderRadius:10}} >
                            Upload
                        </Text> */}
                        <Icon name="file-upload" size={38} color="#ffffff" />
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
                // console.log("******************************************************", denemeJson);
               
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

    const [filePath, setFilePath] = useState("");
    const [fileData, setFileData] = useState("");
    const [fileUri, setFileUri] = useState("");


    function imageGalleryLaunch() {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (res) => {
            console.log('Response = ', res);
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                const source = { uri: res.uri };
                console.log('response', JSON.stringify(res));
                console.log();
                // this.setState({
                //     filePath: res,
                //     fileData: res.data,
                //     fileUri: res.uri
                // });
                // setFilePath(res);
                // setFileData(res.data);
                // setFileUri(res.uri);

                console.log(res.assets[0].uri);
                setImageUri(res.assets[0].uri)
                // setImageUri(source.uri);
                // console.log(source.uri);
            }
        });
    }  


    return (
        <View style={styles.body}>
            {
                imageUri ?
                    <View style={{
                        flex: 1, justifyContent: 'space-between'
                    }}>
                        <View style={{alignItems:'center',flex:1}}>
                        <Image
                            source={{ uri: imageUri } }
                            style={styles.preview} 
                        />
                        </View>
                        
                        <TouchableOpacity
                            style={styles.cancel }

                            onPress={() => setImageUri(null)}
                        >
                            <Icon name="cancel" size={38} color="#ffffff" />
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
                        flashMode={flashMode}

                    >
                       
                    <RenderBottom style={{position:"absolute", bottom:15}} />
                        </RNCamera>
            }
        </View>
    );
}

