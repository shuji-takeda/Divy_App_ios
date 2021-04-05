import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DETAIL, DIVE, POSTLOG} from '../../constants/path';
import {Detail, Dive, PostLog} from '../../component/pages';
import {COLOR} from 'constants/theme';
import {headerStyle, headerTintColor, HeaderLeft} from '../Header';

const Stack = createStackNavigator();
const cardStyle = {
  backgroundColor: COLOR.MAIN,
};

function DiveNavigator({navigation, route}: any) {
  console.log('StatisticsNavigator');
  console.log(navigation.isFocused());
  console.log(route);
  return (
    <Stack.Navigator
      initialRouteName={DIVE}
      screenOptions={{
        cardStyle,
        headerStyle,
        headerTintColor,
      }}>
      <Stack.Screen
        name={DIVE}
        component={Dive}
        options={{title: 'Dive', headerShown: false}}
      />
      <Stack.Screen
        name={DETAIL}
        component={Detail}
        options={{title: 'Detail'}}
      />
      <Stack.Screen
        name={POSTLOG}
        component={PostLog}
        options={{title: 'PostLog', headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default DiveNavigator;
