import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/routers';
import { TouchableOpacity, Text } from 'react-native';

export default function HeaderLeft(){
    const {dispatch} = useNavigation();
    const onPress = React.useCallback(()=>{
        dispatch(DrawerActions.openDrawer());
    }, [dispatch])

    return(
        <TouchableOpacity onPress={onPress}>
            <Text>open</Text>
        </TouchableOpacity>
    )
}
