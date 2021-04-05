import React from 'react';
import {IconButton as PaperIconButton} from 'react-native-paper';
import {ViewStyle} from 'react-native';

interface Props{
    icon:string,
    style: ViewStyle | ViewStyle[],
    color: string,
    onPress: ()=>void,
    size:number,
    disable?:boolean
}

export default function IconButton(props:Props){
    const {icon , style,  onPress, color, size, disable} = props;
    return <PaperIconButton onPress={onPress} style={style} color={color} icon={icon} size={size} disabled={disable} />
}