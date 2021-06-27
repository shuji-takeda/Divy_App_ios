import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DETAIL, HOME} from '../../constants/path';
import {Detail, Home} from '../../component/pages';
import {HeaderLeft} from '../Header';
import {COLOR} from 'constants/theme';
import {headerStyle, headerTintColor} from '../Header';

const Stack = createStackNavigator();
const cardStyle = {
  backgroundColor: COLOR.MAIN,
};

function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        cardStyle,
        headerTintColor,
        headerStyle,
      }}>
      <Stack.Screen
        name={HOME}
        component={Home}
        options={{headerLeft: () => <HeaderLeft />, title: 'Home'}}
      />
      <Stack.Screen
        name={DETAIL}
        component={Detail}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
