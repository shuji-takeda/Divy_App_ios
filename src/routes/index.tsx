import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRoutes from './Main';

export default function LoggingRoutes(route:any) {
    return (
        <NavigationContainer onStateChange={(newState) => console.log(newState)} >
            <MainRoutes />
        </NavigationContainer>
    )
}