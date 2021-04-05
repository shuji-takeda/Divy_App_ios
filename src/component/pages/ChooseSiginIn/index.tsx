import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SignInWithGoogle from '../SignIn/SignInWithGoogle'
import Button from '../../atoms/Buttons';
import {useNavigation} from '@react-navigation/native';
import { SIGN_IN } from 'constants/path';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonContainer:{
        flex:2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'baseline',
    },
    buttonList:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
    }
})


export default function ChooseSignIn (){
    const {navigate} = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <View style={styles.buttonList}>
                <Icon name="ios-mail-outline" size={30} />
            <Button onPress={()=> navigate(SIGN_IN)} label="メールアドレスでログイン" />
            </View>
            <View style={styles.buttonList}>
                <Icon name="ios-logo-google" size={30} />
                <SignInWithGoogle />
            </View>
            </View>
        </View>
    )
}