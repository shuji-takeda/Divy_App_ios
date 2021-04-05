import React from 'react';
import {SIZE} from '../../constants/theme';
import {VectorIcon, CoverImage} from '../atoms';
import {SafeAreaView, ImageBackground, TouchableOpacity, Alert, StyleSheet, View} from 'react-native';
import {Card} from 'react-native-paper';

interface Props {
  source: string;
  iconName: string;
  size: number;
  onPress:()=>void;
}

export default function ChooseCoverImage(props: Props) {
  const {source, iconName, size, onPress} = props;
  return (
      <TouchableOpacity onPress={onPress}>
    <Card>
      <ImageBackground source={{uri: source}} style={styles.ImageBackground}>
        <Card.Content>
            <View style={styles.VectorIcon}>
          <VectorIcon iconName={iconName} size={size}/>
          </View>
        </Card.Content>
      </ImageBackground>
    </Card>
    </TouchableOpacity>
  );
}



// CoverImageは、アプリ全体で共通サイズとしたいので、MoleculesでStyleを定義

const styles = StyleSheet.create({
    ImageBackground:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height:SIZE.COVERIMAGE_HEIGHT,
        width:SIZE.COVERIMAGE_WIDTH,
    },
    VectorIcon:{
        alignItems:'center',
    }
})
