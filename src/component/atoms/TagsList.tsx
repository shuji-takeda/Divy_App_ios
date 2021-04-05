import { exchange } from 'constants/enum';
import React from 'react';

import {StyleSheet, View, ViewStyle} from 'react-native';
import {Chip} from 'react-native-paper';

interface Props {
    style?: ViewStyle | ViewStyle[],
    tags:Array<number>,
}

export default function TagsList(props:Props){
    const {tags , style} = props;
    var list:Element[] = [];
    for(var i=0;i < tags.length; i++){
        list.push(<Chip style={style} key={i}>{exchange(tags[i])}</Chip>)
    }
    return (
        <>
        {list}
        </>
    )
}