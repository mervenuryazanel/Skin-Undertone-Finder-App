import {RouteProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import storage from '../StorageLoad/storage';

interface CameraProp {
  route: RouteProp<any, any>;
}

export const PendingView = () => (
  <View style={styles.cameraPendingView}>
    <Text>Kamera Bekleniyor...</Text>
  </View>
);

const Camera: React.FC<CameraProp> = prop => {
  const navigation = useNavigation();

  const takePicture = async function (camera: any) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    await storage.save({
      key: 'takenPhoto',
      id: prop.route.params?.id,
      data: {
        base64: data.base64,
      },
      expires: 1000 * 300, // 5 DK
    });
    navigation.goBack();
    prop.route.params?.onGoBack();
  };
  return (
    <View style={styles.container}>
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
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status}) => {
          if (status !== 'READY') {
            return <PendingView />;
          }
          return (
            <View style={styles.cameraContainer}>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Text style={styles.takePhotoButton}> Fotoğraf Çek </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
};

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
    flex: 0,
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
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  takePhotoButton: {fontSize: 14},
});

export default Camera;