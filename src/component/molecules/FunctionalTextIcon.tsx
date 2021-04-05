import React from 'react';
import {Paragraph, VectorIcon} from '../atoms';
import {ViewStyle, StyleSheet, View, TouchableOpacity} from 'react-native';

interface Props {
  iconName: string;
  iconStyle?: ViewStyle | ViewStyle[];
  iconColor?: string;
  iconType:string;
  onPress: () => void;
  size: number;
  text: string;
  textStyle?: ViewStyle | ViewStyle[];
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default function FunctionalTextIcon(props: Props) {
  const {iconName, size, text, textStyle, onPress, iconType} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Paragraph text={text} />
      <VectorIcon iconName={iconName} size={size} iconType={iconType} />
    </TouchableOpacity>
  );
}
