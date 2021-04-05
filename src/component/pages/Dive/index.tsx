import React from 'react';
import {POSTLOG} from '../../../constants/path';

import {StyleSheet
        ,SafeAreaView
        ,Text
      ,TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import {} from '../../atoms';

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})


export default function Dive({navigation,route}:any){
  return(
    <SafeAreaView>
      <Text>This is Dive Page(moguru)</Text>


      <TouchableOpacity onPress = {()=>navigation.navigate(POSTLOG)}>
        <Text>Go to PostLogs</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
