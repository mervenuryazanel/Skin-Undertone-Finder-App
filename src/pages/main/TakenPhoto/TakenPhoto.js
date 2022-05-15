import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Scan({ route, navigation }) {
    const { url } = route.params;
    return (
        <View>
            <TouchableOpacity onPress={() => {
                console.log(url);
            }}>
                <Text>
                    asdasd
                </Text>
            </TouchableOpacity>
        </View> 
    )
    
}


// const styles = StyleSheet.create({
    
// })