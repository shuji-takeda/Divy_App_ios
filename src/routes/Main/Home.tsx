import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DETAIL, HOME} from '../../constants/path';
import {Detail, Home} from '../../component/pages';
import { COLOR } from 'constants/theme';
import {headerStyle, headerTintColor} from '../Header'
import {Image,StyleSheet,View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
    TitleContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    logoTitle:{
        width:wp('10%'),
        height:hp('5%')
    },
    textTitle:{
        fontSize:hp('2.3%'),
        fontFamily:'Chalkboard SE'
    }
})

const Stack = createStackNavigator();
const cardStyle = {
    backgroundColor: COLOR.MAIN,
}

function HomeNavigator({navigation,route}:any){
    console.log('HomeNavigator')
    console.log(navigation.isFocused())
    console.log(route)
    return(
        <Stack.Navigator initialRouteName= {HOME}
        screenOptions= {{
            cardStyle,
            headerTintColor,
            headerStyle,
        }}>
            <Stack.Screen name={HOME} component={Home} options={{
                headerTitle:() => <LogoTitle />,
                headerTitleAlign:'left',
                }} />
            <Stack.Screen name={DETAIL} component={Detail} options={{title:''}} />
        </Stack.Navigator>
    )
}

function LogoTitle(){
    return(
        <View style={styles.TitleContainer}>
        <Image style={styles.logoTitle}
        source={require ('../../../assets/Divy.jpg')}
        />
        <Paragraph style={styles.textTitle}>Divy</Paragraph>
        </View>
    )
}

export default HomeNavigator;