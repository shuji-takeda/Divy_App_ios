import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Context, Status} from '../../../contexts/ui';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default function UserInfo(){
    const {setApplicationState} = React.useContext(Context);

    return(
        <View style={styles.container}>
            <Text>User Info</Text>
            <TouchableOpacity onPress={()=> setApplicationState(Status.UN_AUTHORIZED)}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
            )
}
