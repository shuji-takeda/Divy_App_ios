import React, {ReactElement} from 'react';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ViewStyle} from 'react-native';

interface Props {
  iconName: string;
  size: number;
  iconType: string;
}

export default function VectorIcon(props: Props) {
  const {iconName, size, iconType} = props;
  var flg = false;
  if (iconType === 'MaterialCommunityIcons') {
    flg = true;
  }
  return (
    <>
      {flg ? (
        <IconMaterialCommunityIcons name={iconName} size={size} />
      ) : (
        <IconIonicons name={iconName} size={size} />
      )}
    </>
  );
}
