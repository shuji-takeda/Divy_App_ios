import React from 'react';
import {width, height} from '../../lib/windows';
import {
  Image,
  StyleSheet,
  View,
  ImageSourcePropType,
  ImageStyle,
  Text
} from 'react-native';

//　背景画像は、横幅は、画面いっぱい。縦幅は画面サイズの半分

const ratio = 2;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height / 3,
    resizeMode: 'stretch',
  },
});

interface Props {
  style?: ImageStyle | ImageStyle[];
  source: ImageSourcePropType;
}

export default function Logo(props: Props) {
  const {source, style} = props;
  return (
    <>
      <Image
        source={source}
        resizeMode="stretch"
        style={[style, styles.image]}
      />
    </>
  );
}
