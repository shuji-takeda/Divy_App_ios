import {useNavigation} from '@react-navigation/native';
import {DETAIL, INPUT} from 'constants/path';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Home() {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigate(DETAIL)}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(INPUT)}>
        <Text>Go to Input</Text>
      </TouchableOpacity>
    </View>
  );
}
