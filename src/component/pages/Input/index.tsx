import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default function Input() {
    return(
        <View style={styles.container}>
            <Text>Hello Input</Text>
        </View>
    )
}