import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {USER_INFO, USER_INFO_CUSTOM, DETAIL} from '../../constants/path';
import {UserInfo, UserInfoCustom, Detail} from '../../component/pages';
import {COLOR} from 'constants/theme';
import {headerStyle, headerTintColor, HeaderLeft} from '../Header';

const Stack = createStackNavigator();
const cardStyle = {
  backgroundColor: COLOR.MAIN,
};

const getActiveRouteName = (state: any): string => {
  if (!state || !state.routes) {
    return '';
  }
  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRouteName(route.state);
  }
  return route.name;
};

function UserInfoNavigator({navigation,route}:any) {
  console.log('UserInfoNavigator')
  console.log(navigation.isFocused())
  console.log(route)
  return (
    <Stack.Navigator
      initialRouteName={USER_INFO}
      // screenOptions={{
      //   cardStyle,
      //   headerStyle,
      //   headerTintColor,
      // }}
      screenOptions={(props: any) => {
        const routeName = getActiveRouteName(props.route.state);
        console.log('ルート:' + routeName)
        return {
          gestureEnabled: routeName !== USER_INFO_CUSTOM,
        };
      }}
      >
      <Stack.Screen
        name={USER_INFO}
        component={UserInfo}
        options={{title: '', headerShown: false}}
      />
      <Stack.Screen
        name={USER_INFO_CUSTOM}
        component={UserInfoCustom}
        options={{title: 'プロフィール編集', headerShown: false, gestureEnabled:false}}
      />
      <Stack.Screen
        name={DETAIL}
        component={Detail}
        options={{title: '', headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default UserInfoNavigator;
