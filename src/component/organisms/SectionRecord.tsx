import React from 'react';
import {Alert, StyleSheet, View, ViewStyle} from 'react-native';
import {IconText, FunctionalTextIcon} from '../molecules';
import {SIZE} from '../../constants/theme';

interface Props {
  iconName: string;
  text: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 3,
  },
});

export default function SectionRecord(props: Props) {
  const {iconName, text} = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <IconText iconName={iconName} size={SIZE.ICON} text={text} />
      </View>
      <View style={styles.rightContainer}>
        <FunctionalTextIcon
          iconName="arrow-right"
          iconStyle={styles.rightContainer}
          size={SIZE.ICON}
          text={text}
          textStyle={styles.rightContainer}
          onPress={() => Alert.alert('WAI')}
        />
      </View>
    </View>
  );
}
