import React from 'react';
import {Paragraph, VectorIcon} from '../atoms';
import {ViewStyle, StyleSheet, View} from 'react-native';

interface Props {
  iconName: string;
  iconType:string;
  size: number;
  text: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:'center',
  },
});

export default function IconText(props: Props) {
  const {iconName, size, text, iconType} = props;
  return (
    <View style={styles.container}>
      <VectorIcon iconName={iconName} size={size} iconType={iconType} />
      <Paragraph text={text} style={styles.container} />
    </View>
  );
}
