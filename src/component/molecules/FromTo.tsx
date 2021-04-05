import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {VectorIcon} from '../atoms';
import {SIZE} from '../../constants/theme';

interface Props {
  title: string;
  calcResult?: string;
  from: string;
  to: string;
  iconName: string;
  size: number;
  iconType: string;
  onPressFrom: () => void;
  onPressTo: () => void;
}

export default function FromTo(props: Props) {
  const {
    title,
    calcResult,
    from,
    to,
    iconName,
    size,
    iconType,
    onPressFrom,
    onPressTo,
  } = props;
  const displayCalcResultFlg = judgeFromTo(calcResult);
  return (
    <Card>
      <Card.Content style={styles.flexDirectionRow}>
        <VectorIcon iconName={iconName} size={size} iconType={iconType} />
        <Title style={styles.flex2}>{title}</Title>
        {displayCalcResultFlg && (
          <Title style={styles.flex1}>{calcResult}Minute</Title>
        )}
      </Card.Content>
      <Card.Content style={styles.flexDirectionRow}>
        <Pressable onPress={onPressFrom}>
          <Paragraph style={styles.flex}>{from}</Paragraph>
        </Pressable>
        <Paragraph style={styles.flex}>〜</Paragraph>
        <Pressable
          onPress={onPressTo}>
          <Paragraph style={styles.flex}>{to}</Paragraph>
        </Pressable>
      </Card.Content>
    </Card>
  );
}

// DiveTime or Tank-Pressure判定
function judgeFromTo(calcResult: string | undefined | null): boolean {
  if (typeof calcResult === 'undefined') {
    return false;
  } else {
    return true;
  }
}

const styles = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  flex: {
    flex: 1,
    textAlign: 'center',
    fontSize: SIZE.PARAGRAPH,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
});
