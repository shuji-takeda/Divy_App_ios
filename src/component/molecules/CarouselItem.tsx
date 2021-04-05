import React from 'react';
import {StyleSheet , Text, View} from 'react-native';
import {Pagination as SCPagination} from 'react-native-snap-carousel';
import {Logo , Button} from '../atoms';
import {COLOR} from '../../constants/theme';
import {width} from '../../lib/windows';

const padding=20;
const edgeNumber=2;
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding,
        backgroundColor: COLOR.MAIN
    },
    text: {
        fontSize: 28,
        fontWeight: '800',
        lineHeight: 40,
        color: COLOR.WHITE,
    },
    textContainer:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width-padding * edgeNumber,
        paddingVertical: 10,
    },
    imageContainer: {
        flex:2
    },
    contentContainer: {
        flex:3,
        paddingTop:30,
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
})

export default function CarouselItem({
    onPress,
    item,
}:{
    item:{text:string}
    onPress:()=>void
}){
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.imageContainer}>
                    <Logo />
                </View>
                <View style={styles.contentContainer}>
                    <View>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                    <Button onPress={onPress} label="next" />
                </View>
            </View>
        </View>
    )
}