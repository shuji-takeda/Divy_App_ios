import React from 'react';
import {COLOR} from '../../../constants/theme';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import { Context as UiContext, Status} from '../../../contexts/ui';
import {Context as UserContext} from '../../../contexts/user';
import {Logs} from '../../../domain/models';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.MAIN,
  },
  text: {
    color: COLOR.WHITE,
  },
});

function ChangeStateButton(props: {state: Status}) {
  const {setApplicationState} = React.useContext(UiContext);
  const {state} = props;

  return (
    <TouchableOpacity onPress={() => setApplicationState(state)}>
      <Text>Change state to {state}</Text>
    </TouchableOpacity>
  );
}

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ChangeStateButton state={Status.AUTHORIZED} />
      <ChangeStateButton state={Status.UN_AUTHORIZED} />
      <ChangeStateButton state={Status.FIRST_OPEN} />
    </View>
  );
}
