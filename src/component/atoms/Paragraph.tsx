import React from 'react';
import {Paragraph as PaperParagraph} from 'react-native-paper';
import {ViewStyle} from 'react-native';

interface Props{
    text:string,
    style?:ViewStyle | ViewStyle[],
}

export default function Paragraph(props:Props){
    const {text ,style} = props;
    return <PaperParagraph style={style}>{text}</PaperParagraph>
}