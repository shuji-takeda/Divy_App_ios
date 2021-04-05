import {useNavigation} from '@react-navigation/native';
import {DETAIL, INPUT, SEARCHLOG} from 'constants/path';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-paper';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../../../features/Logs/logsSlice'
import { useSelector, useDispatch } from 'react-redux';

import {FlatLogList} from '../../atoms';
import {DiveLogs} from '../../../interface/DiveLog/diveLogs';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(152,226,100,0.3)',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    margin: 10,
  },
  card: {
    backgroundColor: 'rgba(152,226,245,0.3)',
    width: '50%',
    margin: 5,
  },
});

const LOGS: DiveLogs[] = [
  {
    id: '1',
    coverImageUrl: 'https://picsum.photos/700',
    title: 'First Item',
    location: '三重県尾鷲',
    divePoint: 'first',
    date: new Date(),
    entryTime: new Date('2021/02/28 13:20:00'),
    exitTime: new Date(),
    entryPressure:200,
    exitPressure:50,
    visibility:10,
    averageDepth:13.5,
    maxDepth:20,
    detail: 'Hi!\nWe are Divy developer\nThanks installing!',
    avatarImageUrl: 'https://picsum.photos/700',
    userName: 'test',
    tags:[0,2,3,4,5],
    imageListUrl:['https://picsum.photos/700','https://picsum.photos/700','https://picsum.photos/700','https://picsum.photos/700'],
  },
  {
    id: '2',
    coverImageUrl: 'https://picsum.photos/700',
    title: 'Second Item',
    location: '三重県尾鷲',
    divePoint: 'second',
    date: new Date(),
    entryTime: new Date('2021/02/28 13:20:00'),
    exitTime: new Date(),
    entryPressure:200,
    exitPressure:50,
    visibility:10,
    averageDepth:13.5,
    maxDepth:20,
    detail: 'Hi!\nWe are Divy developer\nThanks installing!',
    avatarImageUrl: 'https://picsum.photos/700',
    userName: 'test',
    tags:[0,2,3,4,5],
    imageListUrl:['https://picsum.photos/700','https://picsum.photos/700','https://picsum.photos/700','https://picsum.photos/700'],
  },
  {
    id: '3',
    coverImageUrl: 'https://picsum.photos/700',
    title: 'Third Item',
    location: '三重県尾鷲',
    divePoint: 'third',
    date: new Date(),
    entryTime: new Date('2021/02/28 13:20:00'),
    exitTime: new Date(),
    entryPressure:200,
    exitPressure:50,
    visibility:10,
    averageDepth:13.5,
    maxDepth:20,
    detail: 'Hi!\nWe are Divy developer\nThanks installing!',
    avatarImageUrl: 'https://picsum.photos/700',
    userName: 'test',
    tags:[0,2,3,4,5],
    imageListUrl:['https://picsum.photos/700','https://picsum.photos/700','https://picsum.photos/700','https://picsum.photos/700'],
  },
];



export default function Home() {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount , setAmount] = React.useState('2');




  const {navigate} = useNavigation();

  return (
    <>
      <ScrollView>
        <FlatLogList Logs={LOGS} onPress={()=> navigate(DETAIL,{logs:LOGS[1]})} />
      </ScrollView>
      <Text>{count}</Text>
      <Button onPress = {()=>dispatch(increment())}>
        +
      </Button>
      <Button onPress = {()=>dispatch(decrement())}>
        -
      </Button>
    </>
  );
}

function Mock() {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigate(DETAIL)}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(INPUT)}>
        <Text>Go to Input</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(SEARCHLOG)}>
        <Text>Go to SearchLOG</Text>
      </TouchableOpacity>
    </View>
  );
}
