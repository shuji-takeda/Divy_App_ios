import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Card} from 'react-native-paper';

interface Props {
    style?: ViewStyle | ViewStyle[],
    imageListUrl:Array<string>,
}

export default function ImageList(props:Props){
    const {style , imageListUrl} = props
    var list:Element[] = [];
    for(var i=0; i<imageListUrl.length; i++ ){
        list.push(
            <Card style={style} key={i} >
                <Card.Cover source={{uri:imageListUrl[i]}} />
            </Card>
        )
    }

    return(
        <>
            {list}
        </>
    )
}