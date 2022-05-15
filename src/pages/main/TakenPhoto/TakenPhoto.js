import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default function Scan({ route, navigation }) {
    const { url } = route.params;
    return (
        <View>
            <TouchableOpacity onPress={() => {
                console.log(url);
            }}>
                <Image
                    source={{ uri: url }}
                />
            </TouchableOpacity>
        </View> 
    )
    
}


// const styles = StyleSheet.create({
    
// })