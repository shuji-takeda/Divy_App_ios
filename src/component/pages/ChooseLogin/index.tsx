import React from 'react';
import { StyleSheet,View, StatusBar, ImageBackground, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {CHOOSE_SIGNIN , SIGN_UP} from '../../../constants/path';
import {COLOR} from '../../../constants/theme';
import {Button} from '../../atoms';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const padding = 0;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    backgroundImage: {
        flex:1,
        resizeMode: "cover",
        justifyContent: 'center',
        
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
    },
    button: {
        marginBottom: 30,
        width: wp('50%'),
        height: hp('4%'),
        backgroundColor: COLOR.CAROUSEL_BACKGROUND,
    },
});


export default function ChooseLogin(){
    const {navigate} = useNavigation();
    return(
        <View style={styles.container}>
            <ImageBackground source= {require('../../../../assets/InitialImage.jpg')} style={styles.backgroundImage } >
            <View style={styles.buttonContainer}>
                <Button onPress={()=> navigate(CHOOSE_SIGNIN)} style={styles.button} label="ログイン" />
                <Button onPress={()=> navigate(SIGN_UP)} style={styles.button} label="新規登録" />
            </View>
            </ImageBackground>
        </View>
    )
}