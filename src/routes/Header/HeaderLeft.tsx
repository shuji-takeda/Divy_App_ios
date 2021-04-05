import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/routers';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLOR} from '../../constants/theme';

export default function HeaderLeft(){
    const {dispatch} = useNavigation();
    const onPress = React.useCallback(()=>{
        dispatch(DrawerActions.openDrawer());
    }, [dispatch])

    return(
        <Icon.Button name="bars" color={COLOR.WHITE} backgroundColor={COLOR.MAIN}
        onPress={onPress} />
    )
}
