// import React from 'react';
// import { RNCamera } from 'react-native-camera';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { Icon, MaterialIcon } from 'react-native-vector-icons';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import colors from '../../../styles/colors';


// export const PendingView = () => (
//     <View style={styles.cameraPendingView}>
//         <Text>Kamera Bekleniyor...</Text>
//     </View>
// );
// const Scan = () => {

//     const takePicture = async function (camera) {
//         const options = { quality: 0.5, base64: true };
//         const data = await camera.takePictureAsync(options);
//         // await storage.save({
//         //     key: 'takenPhoto',
//         //     id: prop.route.params?.id,
//         //     data: {
//         //         base64: data.base64,
//         //     },
//         //     expires: 1000 * 300, // 5 DK
//         // });
//         // navigation.goBack();
//         // prop.route.params?.onGoBack();
//         console.log(data.uri)
//     };


//     return (
//         <View style={styles.container}>

//             {/* <RNCamera

//                 captureAudio={false}
//                 style={{ flex: 1 }}
//                 type={RNCamera.Constants.Type.back}
//                 androidCameraPermissionOptions={{
//                     title: 'Permission to use camera',
//                     message: 'We need your permission to use your camera',
//                     buttonPositive: 'Ok',
//                     buttonNegative: 'Cancel',
//                 }} />
//                 <TouchableOpacity
//                     onPress={() => (console.log("sasdas"))}
//                     style={styles.capture}>
//                     <Text style={styles.takePhotoButton}> Fotoğraf Çek </Text>
//                 </TouchableOpacity> */}
//             <RNCamera
//                 style={styles.preview}
//                 type={RNCamera.Constants.Type.back}
//                 flashMode={RNCamera.Constants.FlashMode.auto}
//                 androidCameraPermissionOptions={{
//                     title: 'Permission to use camera',
//                     message: 'We need your permission to use your camera',
//                     buttonPositive: 'Ok',
//                     buttonNegative: 'Cancel',
//                 }}

//             >
               
//                         <View style={{ flexDirection: 'column', flex: 1, width: "100%", justifyContent: "flex-end" }}>

//                             {/* <TouchableOpacity >
//                                 <Text style={{
//                                     color: 'white',
//                                     textAlign: 'right',
//                                     margin: 12,
//                                     fontSize: 20,

                                        
//                                 }}> Back </Text>

//                             </TouchableOpacity>
//                              */}
//                             <View style={{
//                                 backgroundColor: colors.darkgray,
//                                 borderTopLeftRadius: 20,
//                                 borderTopRightRadius: 20,
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                                 flexDirection: "row"

//                             }}>
//                                 <View style={styles.iconContainer}>
//                                     <Text>
//                                         Galery
//                                     </Text>
//                                 </View>
//                                 <View style={styles.iconContainer}>
//                                     <Text>
//                                         Flash
//                                     </Text>
//                                 </View>

//                                 <View style={styles.iconContainer}>
                                   
//                                                 <TouchableOpacity
//                                                     onPress={takePicture}
//                                                     style={styles.capture}>

//                                                 </TouchableOpacity>
                                            
//                                 </View>

//                                 <View style={styles.iconContainer}>
//                                     <Text>
//                                         Flip Camera
//                                     </Text>
//                                 </View>
//                                 <View style={styles.iconContainer}>
//                                     <Text>
//                                         Profile
//                                     </Text>
//                                 </View>

//                             </View>

//                         </ View>
               
//             </RNCamera>
//         </View>
//     );
// }

// export default Scan;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: 'black',
//     },
//     preview: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     capture: {
//         backgroundColor: '#fff',
//         borderRadius: 50,
//         // padding: 15,
//         // paddingHorizontal: 20,
//         alignSelf: 'center',
//         // margin: 20,
//         width: "70%",
//         height: "70%"
//     },
//     cameraPendingView: {
//         flex: 1,
//         backgroundColor: '#edeaea',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//         height: '100%',
//         alignSelf: "center"
//     },
//     iconContainer: {
//         flexDirection: 'row',
//         alignItems: "center",
//         justifyContent: 'center',
//         width: 100,
//         height: 100,
//         backgroundColor: "#aaa4a4",
//         alignSelf: "center",
//         // marginBottom: 20
//     },
//     takePhotoButton: { fontSize: 14 },
// });



