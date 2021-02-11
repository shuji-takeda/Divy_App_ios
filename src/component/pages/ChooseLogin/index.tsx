import React from 'react';
import { StyleSheet,View, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {SIGN_IN , SIGN_UP} from '../../../constants/path';
import {COLOR} from '../../../constants/theme';
import {Button , Logo} from '../../atoms'; 
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';


const padding = 20;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.MAIN
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
        paddingVertical: padding,
    },
    button: {
        marginBottom: 40,
        width: 300,
    },
    image: {
        flex:1,
        resizeMode: "cover",
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
});


export default function ChooseLogin(){
    const {navigate} = useNavigation();
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../../../assets/InitialImage.jpg')} style={styles.image}>
            <View style={styles.imageContainer}>
                <Logo />
            </View>
            <View style={styles.contentContainer}>
                <Button onPress={()=> navigate(SIGN_IN)} style={styles.button} label="sign in" />
                <Button onPress={()=> navigate(SIGN_UP)} style={styles.button} label="sign up" />
            </View>
            </ImageBackground>
        </View>
    )
}