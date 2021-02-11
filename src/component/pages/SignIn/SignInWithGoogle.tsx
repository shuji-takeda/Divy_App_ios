import * as React from 'react';
import Button from '../../atoms/Buttons';
import {Context, Status} from '../../../contexts/ui';


export default function SignInWithGoogle(){
    const {setApplicationState} = React.useContext(Context);
    return <Button onPress={()=> setApplicationState(Status.AUTHORIZED)}
    icon="camera" label="Sign In with Google" />
}