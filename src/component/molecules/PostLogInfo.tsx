import React from 'react';
import {useControlledComponent} from 'lib/hooks';
import {TextField} from '../atoms';import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {StyleSheet , View, SafeAreaView, ScrollView} from 'react-native';
import {Card} from 'react-native-paper'

const styles = StyleSheet.create({
    directionRow: {
      flexDirection: 'row',
    },
    cardContainer: {
      marginTop: 0,
      flex: 2,
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
    },
    text: {
      marginVertical: 20,
      flex: 1,
    },
  });

  export default function PostLogInfo(){
    const title = useControlledComponent('no title');
    const diveNo = useControlledComponent('20');
    const date = useControlledComponent(new Date().toISOString());
    const location = useControlledComponent('');
    const divePoint = useControlledComponent('');
    const writeUser = useControlledComponent('test');
    const entryTime = useControlledComponent('');
    const exitTime = useControlledComponent('');
    const diveTime = useControlledComponent('');
    const entryPressure = useControlledComponent('');
    const exitPressure = useControlledComponent('');
    const maxDepth = useControlledComponent('');
    const averageDepth = useControlledComponent('');
    const tags = useControlledComponent('');
    const imageListUrl = useControlledComponent('');
    const coverImageUrl = useControlledComponent('');
    const avatarImageUrl = useControlledComponent('');
    const detail = useControlledComponent('');
    const visibility = useControlledComponent('');
    return(
        <View style={styles.directionRow}>
        <ScrollView>
        <Card style={styles.cardContainer}>
          <View style={styles.textContainer}>
            <TextField
              label="title"
              value={title.value}
              onChangeText={title.onChangeText}
              style={styles.text}
            />
            <TextField
              label="diveNo"
              value={diveNo.value}
              onChangeText={title.onChangeText}
              style={styles.text}
            />
            <TextField
              label="date"
              value={date.value}
              onChangeText={date.onChangeText}
              style={styles.text}
            />
            <TextField
              label="location"
              value={location.value}
              onChangeText={location.onChangeText}
              style={styles.text}
            />
            <TextField
              label="divePoint"
              value={divePoint.value}
              onChangeText={divePoint.onChangeText}
              style={styles.text}
            />
            <TextField
              label="entryTime"
              value={entryTime.value}
              onChangeText={entryTime.onChangeText}
              style={styles.text}
            />
            <TextField
              label="exitTime"
              value={exitTime.value}
              onChangeText={exitTime.onChangeText}
              style={styles.text}
            />
            <TextField
              label="diveTime"
              value={diveTime.value}
              onChangeText={diveTime.onChangeText}
              disabled={true}
              style={styles.text}
            />
            <TextField
              label="entryPressure"
              value={entryPressure.value}
              onChangeText={entryPressure.onChangeText}
              style={styles.text}
            />
            <TextField
              label="exitPressure"
              value={exitPressure.value}
              onChangeText={exitPressure.onChangeText}
              style={styles.text}
            />
            <TextField
              label="maxDepth"
              value={maxDepth.value}
              onChangeText={maxDepth.onChangeText}
              style={styles.text}
            />
            <TextField
              label="averageDepth"
              value={averageDepth.value}
              onChangeText={averageDepth.onChangeText}
              style={styles.text}
            />
            <TextField
              label="tags"
              value={tags.value}
              onChangeText={tags.onChangeText}
              style={styles.text}
            />
            <TextField
              label="imageListUrl"
              value={imageListUrl.value}
              onChangeText={imageListUrl.onChangeText}
              style={styles.text}
            />
            <TextField
              label="coverImageUrl"
              value={coverImageUrl.value}
              onChangeText={coverImageUrl.onChangeText}
              style={styles.text}
            />
            <TextField
              label="visibility"
              value={visibility.value}
              onChangeText={visibility.onChangeText}
              style={styles.text}
            />
          </View>
        </Card>
      </ScrollView>
      </View>
    )
  }