import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DETAIL, STATISTICS} from '../../constants/path';
import {Detail, Statistics} from '../../component/pages';
import { COLOR } from 'constants/theme';
import {headerStyle, headerTintColor, HeaderLeft} from '../Header'

const Stack = createStackNavigator();
const cardStyle = {
    backgroundColor: COLOR.MAIN,
}

function StatisticsNavigator(){
    return(
        <Stack.Navigator initialRouteName={STATISTICS}
        screenOptions={{
            cardStyle,
            headerStyle,
            headerTintColor,
        }}>
            <Stack.Screen name={STATISTICS} component={Statistics} 
            options={{headerLeft:()=> <HeaderLeft />, title:'Statistics',}} />
            <Stack.Screen name={DETAIL} component={Detail} 
            options={{title:'Detail',}} />

        </Stack.Navigator>
    )
}

export default StatisticsNavigator;