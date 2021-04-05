import React from 'react';
import {StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {COLOR} from '../../constants/theme';
import {Button as PaperButton} from 'react-native-paper';

const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        fontWeight: '400',
        color: COLOR.WHITE,
    },
})

interface Props {
    onPress: ()=> void;
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    label?:string;
    color?:string;
    disabled?:boolean;
    disabledColor?:string;
    icon?:string;
}

export default function Button(props:Props){
    const {
        onPress,
        style,
        textStyle,
        label,
        color = COLOR.CAROUSEL_BACKGROUND,
        disabled,
        disabledColor = COLOR.MAIN_LIGHT,
        icon,
    } = props

    return (
        <PaperButton
        mode="text"
        onPress={onPress}
        style={style}
        disabled={disabled}
        contentStyle={{
            backgroundColor: disabled ? disabledColor : color,
        }}
        icon={icon}
        >
            {label && <Text style={[styles.text , textStyle]}>{label}</Text>}
        </PaperButton>
    )
}