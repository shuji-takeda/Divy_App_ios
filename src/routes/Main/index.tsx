import React from 'react';
import {COLOR} from 'constants/theme';
import {headerStyle, headerTintColor} from '../Header';
import * as UiContext from '../../contexts/ui';
import {
    INITIAL,
    LOADING,
    HOME,
    CHOOSE_LOGIN,
    STATISTICS,
    USER_INFO,
    INPUT,
    SIGN_IN,
    SIGN_UP,
    SEARCHLOG,
    CHOOSE_SIGNIN,
    USER_INFO_CUSTOM,
    DIVE,
  } from '../../constants/path';
  import {
    Initial,
    Loading,
    ChooseLogin,
    Input,
    SignIn,
    SignUp,
    SearchLog,
    ChooseSignIn,
  } from '../../component/pages';
import {
  createStackNavigator,
  StackCardInterpolationProps,
} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './Home';
import Dive from './Dive';
import UserInfo from './UserInfo';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeDrawer = createDrawerNavigator();
const StatisticsDrawer = createDrawerNavigator();
const UserInfoDrawer = createDrawerNavigator();
const ModalStack = createStackNavigator();
const ChooseLoginStack = createStackNavigator();
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

const forFade = ({current}: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const cardStyle = {
  backgroundColor: COLOR.MAIN,
};
const drawerStyle = {
  backgroundColor: COLOR.MAIN,
};
const drawerContentOptions = {
  activeTintColor: COLOR.LIGHTBLUE,
  inactiveTintColor: COLOR.WHITE,
};

function HomeWithDrawer() {
  return (
    <HomeDrawer.Navigator
      initialRouteName={HOME}
      drawerStyle={drawerStyle}
      drawerContentOptions={drawerContentOptions}>
      <HomeDrawer.Screen name={HOME} component={Home} />
      <HomeDrawer.Screen name={USER_INFO} component={UserInfo} />
    </HomeDrawer.Navigator>
  );
}

function StatisticsWithDrawer() {
  return (
    <StatisticsDrawer.Navigator
      initialRouteName={DIVE}
      drawerStyle={drawerStyle}
      drawerContentOptions={drawerContentOptions}>
      <StatisticsDrawer.Screen name={DIVE} component={Dive} />
      <StatisticsDrawer.Screen name={USER_INFO} component={UserInfo} />
    </StatisticsDrawer.Navigator>
  );
}

function UserInfoWithDrawer() {
  return (
    <UserInfoDrawer.Navigator
      initialRouteName={USER_INFO}
      drawerStyle={drawerStyle}
      drawerContentOptions={drawerContentOptions}>
      <UserInfoDrawer.Screen name={USER_INFO} component={UserInfo} />
      <UserInfoDrawer.Screen name={HOME} component={Home} />
    </UserInfoDrawer.Navigator>
  );
}

function TabRoutes({navigation,route}:any) {
    console.log('TabRoutes')
    console.log(navigation.isFocused())
    console.log(route)
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      tabBarOptions={{
        inactiveTintColor: COLOR.WHITE,
        activeTintColor: COLOR.LIGHTBLUE,
        style: {
          backgroundColor: COLOR.MAIN,
        },
      }}
      screenOptions={(props: any) => {
        const routeName = getActiveRouteName(props.route.state);
        console.log('routeName:' + routeName)
        return {
          tabBarVisible: routeName !== USER_INFO_CUSTOM,
        };
      }}>
      <Tab.Screen
        name={HOME}
        component={Home}
        options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={DIVE}
        component={Dive}
        options={{
          tabBarLabel: '潜る',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={USER_INFO}
        component={UserInfo}
        options={{
          tabBarLabel: 'マイページ',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-people-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function TabWithModalRoutes() {
  return (
    <ModalStack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{cardStyle}}>
      <Stack.Screen name={HOME} component={TabRoutes} />
      <Stack.Screen name={INPUT} component={Input} />
      <Stack.Screen name={SEARCHLOG} component={SearchLog} />
    </ModalStack.Navigator>
  );
}

function ChooseLoginNavigator({navigation,route}:any ) {
    const root = navigation.isFocused();
    console.log('chooseNavigator  ;' +root)
    console.log(navigation)
    console.log(route)
  return (
    <ChooseLoginStack.Navigator
      initialRouteName={CHOOSE_LOGIN}
      screenOptions={{cardStyle, headerStyle, headerTintColor}}>
      <ChooseLoginStack.Screen
        name={CHOOSE_LOGIN}
        component={ChooseLogin}
        options={{headerShown: true}}
      />
      <ChooseLoginStack.Screen
        name={CHOOSE_SIGNIN}
        component={ChooseSignIn}
        options={{headerShown: true}}
      />
      <ChooseLoginStack.Screen
        name={SIGN_IN}
        component={SignIn}
        options={{headerShown: true}}
      />
      <ChooseLoginStack.Screen
        name={SIGN_UP}
        component={SignUp}
        options={{headerShown: true}}
      />
    </ChooseLoginStack.Navigator>
  );
}

function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return (
        <Stack.Screen name={CHOOSE_LOGIN} component={ChooseLoginNavigator} />
      );

    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={HOME} component={TabRoutes} />;

    case UiContext.Status.FIRST_OPEN:
    default:
      return <Stack.Screen name={INITIAL} component={Initial} />;
  }
}

function AuthWithRoutes() {
  const uiContext = React.useContext(UiContext.Context);
  return (
    <Stack.Navigator
      initialRouteName={LOADING}
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: forFade,
      }}>
      {uiContext.applicationState !== UiContext.Status.LOADING ? (
        switchingAuthStatus(uiContext.applicationState)
      ) : (
        <Stack.Screen name={LOADING} component={Loading} />
      )}
    </Stack.Navigator>
  );
}

export default AuthWithRoutes;
