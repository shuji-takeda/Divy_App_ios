import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Dialog, Provider, Portal, Paragraph, Button, IconButton, Divider} from 'react-native-paper';
import {formatDate} from 'lib/format-date';
import {TextField} from '../atoms';
import {useControlledComponent} from 'lib/hooks';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  directionRow: {
    flexDirection: 'row',
  },
  ItemsBaselign: {
    alignItems: 'baseline',
  },
  alignItemsCenter:{
    justifyContent:'center',
  },
  test:{
    paddingTop:50,
    backgroundColor:'yellow',
    flex:3,
    fontSize:wp('4.5%')
  },
  test1:{
    backgroundColor:'green',
    flex:1,

  }
});

interface Props {
  currentDate: string;
}

export default function ChooseDateDialog(props: Props) {
  const {currentDate} = props;
  const [chooseDate, setDate] = useState(new Date(currentDate));
  const [show, setShow] = useState(false);
  const onDateChange = (event: Event, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate || chooseDate;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <SafeAreaView>
        <View style={[styles.directionRow,styles.ItemsBaselign,styles.alignItemsCenter]} >
          <IconButton icon="calendar" color={Colors.red500} size={wp('7%')} onPress={()=>{setShow(!show)}} style={styles.test1} />
        <Paragraph style={styles.test} >{formatDate(chooseDate)}</Paragraph>
        <Divider />
        </View>
      <Portal>
        <Dialog visible={show} onDismiss={()=>{setShow(!show)}}>
          <Dialog.Title>Calender</Dialog.Title>
          <Dialog.Actions>
          </Dialog.Actions>
          <Dialog.Content>
            <DateTimePicker
              value={chooseDate}
              mode={'date'}
              display="spinner"
              onChange={onDateChange}
            />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={()=>{setDate(new Date())}}>Now</Button>
              <Button onPress={()=>{setShow(!show)}} >OK</Button>
            </Dialog.Actions>
            </Dialog>
      </Portal>
    </SafeAreaView>
  );
}
