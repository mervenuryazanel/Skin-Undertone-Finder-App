import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

function Loading() {
    return (
            <LottieView
                style={{
                    width: 300,
                    height: 300
                }}
                source={require('../../../assets/animations/anim2.json')}
                autoPlay={true}
            />
    );
}
export default Loading;