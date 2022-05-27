import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Dimensions, FlatList, ImageBackground, ScrollView, Alert, Linking } from 'react-native';
import LottieView from 'lottie-react-native';
import colors from '../../../styles/colors';
import mainStyles from '../../../styles/main_styles/main.styles';
import LinearGradient from 'react-native-linear-gradient';


const DATA_W = [
    {
        id: '1',
        title: 'Beaulis Paint It Oje 710 Matcha',
        link: 'https://www.gratis.com/beaulis-paint-it-oje/urun/Beaulis1023?sku=10129297',
        imageUrl: require('../../../../assets/images/warm/w_oje.png'),
        price: "16.00 ₺",
    },
    {
        id: '2',
        title: 'Pastel Day Long Lipcolor Kissproof Ruj No:38',
        link: 'https://www.gratis.com/pastel-day-long-lipcolor-kissproof-ruj/urun/Pastel1004?sku=10063753',
        imageUrl: require('../../../../assets/images/warm/w_ruj.png'),
        price: "99.00 ₺",



    },
    {
        id: '3',
        title: 'Golden Rose Total Cover 2in1 Foundation & Concealer 23',
        link: 'https://www.gratis.com/golden-rose-total-cover-2in1-foundation-concealer/urun/Goldenrose1052?sku=10451887',
        imageUrl: require('../../../../assets/images/warm/w_fondoten.png'),
        price: "175.50 ₺",


    },
    {
        id: '4',
        title: 'Maybelline New York Instant Anti Age Eraser Kapatıcı 07 Sand',
        link: 'https://www.gratis.com/maybelline-new-york-instant-anti-age-eraser-kapatici/urun/Maybelline1034?sku=10081190',
        imageUrl: require('../../../../assets/images/warm/w_concealer.png'),
        price: "170.00 ₺",


    },

];

const DATA_C = [

    {
        id: '1',
        title: 'Beaulis Paint It Oje 599 Light Lilac',
        link: 'https://www.gratis.com/beaulis-paint-it-oje/urun/Beaulis1023?sku=10340161',
        imageUrl: require('../../../../assets/images/cool/c_oje.png'),
        price: "16.00 ₺",
    },
    {
        id: '2',
        title: 'Maybelline New York Super Stay Matte Ink Ruj 15 Lover',
        link: 'https://www.gratis.com/maybelline-new-york-super-stay-matte-ink-likit-mat-ruj/urun/Maybelline1030?sku=10038632',
        imageUrl: require('../../../../assets/images/cool/c_ruj.png'),
        price: "160.00 ₺",



    },
    {
        id: '3',
        title: 'Golden Rose Up To 24 Hours Stay Foundation No: 04',
        link: 'https://www.gratis.com/golden-roseup-to-24-hours-stay-foundation/urun/Goldenrose1078?sku=10468368',
        imageUrl: require('../../../../assets/images/cool/c_fondoten.png'),
        price: "200.00 ₺",


    },
    {
        id: '4',
        title: 'Maybelline New York Instant Anti Age Eraser Kapatıcı 01 Light',
        link: 'https://www.gratis.com/maybelline-new-york-instant-anti-age-eraser-kapatici/urun/Maybelline1034?sku=10033327',
        imageUrl: require('../../../../assets/images/cool/c_concealer.png'),
        price: "170.00 ₺",


    },
];


const Item = ({ title, imageUrl, price, link }) => (
    <TouchableOpacity 
        onPress={useCallback(async() => {
            // Checking if the link is supported for links with custom URL scheme.
            const supported = await Linking.canOpenURL(link);

            if (supported) {
                // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                // by some browser in the mobile
                await Linking.openURL(link);
            } else {
                Alert.alert(`Don't know how to open this URL: ${link}`);
            }
        }
            , [link])}
        style={{
            backgroundColor: "white", margin: 5, borderRadius: 18, flexDirection: "row", shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
        }}>
        <Image
            style={{ width: 100, height: 100, }}
            source={imageUrl}
            resizeMode="contain"
        />
        <View style={{ justifyContent: "center" }}>
            <Text
                style={{ marginRight: Dimensions.get("window").width / 3, fontSize: 15, fontWeight: "500", }}>
                {title}
            </Text>
            <Text
                style={{ marginRight: Dimensions.get("window").width / 3, fontStyle: 'italic' }}>
                {price}
            </Text>
        </View>




    </TouchableOpacity>
);

function Result({ navigation, route }) {
    const renderItem = ({ item }) => (
        <Item title={item.title} imageUrl={item.imageUrl} price={item.price} link={item.link} />
    );

    const { result } = route.params;

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.white
            }}>





            {/* <LottieView
                style={{
                    width:"70%",
                    height: "70%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:"transparent"
                }}
                source={require('./../../../../assets/animations/result_loading.json')}
                autoPlay={true}
                duration={3000}
                loop={false}
                
            /> */}


            {/* <Text
                    style={{
                        fontSize: 30,
                        textAlign: "center",
                        color: "#feebec 70%, 95%)"
                    }}>
                    Your Skin Undertone is {result}
                </Text> */}
            {
                result == '"cool"' ?
                    <>

                        <Text
                            style={{ fontSize: 22, marginTop: 30, color: colors.darkgray, textAlign: "center" }}>
                            You have cool undertones!
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: Dimensions.get("window").width / 2, height: Dimensions.get("window").height / 3, }}
                                source={require('../../../../assets/images/cool/c_avatar2.png')}
                                resizeMode="contain"
                            />
                            <View style={{ width: "50%", justifyContent: "space-evenly" }}>

                                <Text
                                    style={{ color: colors.gray, textAlign: "center", fontSize: 15, }}>


                                    Whether you're fair or dark,
                                    your skin has pink or red undertones.
                                    Stick with jewel tones like royal blue, emerald green,
                                    magenta and blue-based reds for your clothing and makeup.
                                    When choosing a foundation or concealer, look for neutral or pink-based shades.

                                </Text>
                            </View>

                        </View>
                        {/* <ScrollView nestedScrollEnabled={true} > */}


                        <View style={{
                            borderWidth: 1,
                            borderColor: "#e3e3e3",
                            borderRadius: 15,
                        width: "80%",
                            height:"25%",
                            justifyContent: "center",
                            alignItems: "center"

                        }}>
                            <Text style={{ color: colors.darkgray, fontSize: 15, fontFamily: "", marginTop: 15 }}>
                                Your Suggested Color Palette
                            </Text>
                            <Image style={{ width: Dimensions.get("window").width / 2, height: Dimensions.get("window").height / 5, }}
                                source={require('../../../../assets/images/cool/c_palette.png')}
                                resizeMode="contain"
                            />
                        </View>


                        <Text style={{ marginVertical: 20, fontSize: 15, color: colors.darkgray, marginHorizontal: 80, textAlign: "center" }}> Suggested Products Based on Your Skin Undertone</Text>

                        <FlatList
                            data={DATA_C}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            nestedScrollEnabled={true}
                        />
                        {/* </ScrollView> */}


                    </>
                    :
                    <>

                        <Text
                            style={{ fontSize: 22, marginTop: 30, color: colors.darkgray, textAlign: "center" }}>
                            You have warm undertones!
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: Dimensions.get("window").width / 2, height: Dimensions.get("window").height / 3, }}
                                source={require('../../../../assets/images/warm/w_avatar2.png')}
                                resizeMode="contain"
                            />
                            <View style={{ width: "50%", justifyContent: "space-evenly" }}>

                                <Text
                                    style={{ color: colors.gray, textAlign: "center", fontSize: 15, }}>

                                    Your skin's undertones appear more yellow,
                                    golden, or peach, so you look great in gold jewelry,
                                    earth tones, olive green and orange-based red makeup or clothing.
                                    When choosing a foundation or concealer, choose yellow or peach-based shades.

                                </Text>
                            </View>

                        </View>
                        {/* <ScrollView nestedScrollEnabled={true} > */}


                        <View style={{
                            borderWidth: 1,
                            borderColor: "#e3e3e3",
                            borderRadius: 15,
                            width: "80%",
                            justifyContent: "center",
                            alignItems: "center"

                        }}>
                            <Text style={{ color: colors.darkgray, fontSize: 15, fontFamily: "", marginTop: 15 }}>
                                Your Suggested Color Palette
                            </Text>
                            <Image style={{ width: Dimensions.get("window").width / 2, height: Dimensions.get("window").height / 5, }}
                                source={require('../../../../assets/images/warm/w_palette.png')}
                                resizeMode="contain"
                            />
                        </View>


                        <Text style={{ marginVertical: 20, fontSize: 15, color: colors.darkgray, marginHorizontal: 80, textAlign: "center" }}> Suggested Products Based on Your Skin Undertone</Text>

                        <FlatList
                            data={DATA_W}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            nestedScrollEnabled={true}
                        />
                        {/* </ScrollView> */}


                    </>


            }









        </View>
    )
}



export default Result;

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});