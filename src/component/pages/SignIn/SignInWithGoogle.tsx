import * as React from 'react';
import Button from '../../atoms/Buttons';
import {Context, Status} from '../../../contexts/ui';
import { StyleSheet, View } from 'react-native';


export default function SignInWithGoogle(){
    const {setApplicationState} = React.useContext(Context);
    return (
    <View>
    <Button onPress={()=> setApplicationState(Status.AUTHORIZED)}
     label="Googleでログイン" />
    </View>
    )
}