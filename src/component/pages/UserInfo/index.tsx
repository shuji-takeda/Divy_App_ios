import React from 'react';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEvilcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView
} from 'react-native';
import {Card, Title, Avatar, Paragraph, List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {DETAIL, USER_INFO_CUSTOM,} from '../../../constants/path';
import {CoverImage, FlatLogList} from 'component/atoms';
import {DiveLogs} from '../../../interface/DiveLog/diveLogs';
import {UserInformation} from '../../../interface/UserInfo/userInfomation';

// rightblue
// backgroundColor: 'rgba(152,226,245,0.3)',
// rightPink
// backgroundColor: 'rgba(500,226,245,0.3)',
// purple
// backgroundColor: 'rgba(200,100,245,0.3)',
// brown
// backgroundColor: 'rgba(200,100,100,0.3)',
// gray
// backgroundColor: 'rgba(50,50,50,0.3)',
// source={{uri: 'https://picsum.photos/700'}}

const LOGS: DiveLogs[] = [
  {
    id: '1',
    coverImageUrl: 'https://picsum.photos/700',
    title: 'First Item',
    location: '三重県尾鷲',
    divePoint: '魚礁',
    date: new Date(),
    entryTime: new Date('2021/02/28 13:20:00'),
    exitTime: new Date(),
    entryPressure:200,
    exitPressure:50,
    visibility:10,
    averageDepth:13.5,
    maxDepth:20,
    detail: 'Hi!\nWe are Divy developer\nThanks installing!',
    avatarImageUrl: 'https://picsum.photos/700',
    userName: 'test',
    tags:[0,2,3,4,5],
    imageListUrl:['https://picsum.photos/700','https://picsum.photos/700','https://picsum.photos/700','https://picsum.photos/700'],
  },
  {
    id: '2',
    coverImageUrl: 'https://picsum.photos/700',
    title: 'Second Item',
    location: '三重県尾鷲',
    divePoint: '魚礁',
    date: new Date(),
    entryTime: new Date('2021/02/28 13:20:00'),
    exitTime: new Date(),
    entryPressure:200,
    exitPressure:50,
    visibility:10,
    averageDepth:13.5,
    maxDepth:20,
    detail: 'Hi!\nWe are Divy developer\nThanks installing!',
    avatarImageUrl: 'https://picsum.photos/700',
    userName: 'test',
    tags:[0,2,3,4,5],
    imageListUrl:['https://picsum.photos/700','https://picsum.photos/700','https://picsum.photos/700','https://picsum.photos/700'],
  },
  {
    id: '3',
    coverImageUrl: 'https://picsum.photos/700',
    title: 'Third Item',
    location: '三重県尾鷲',
    divePoint: '魚礁',
    date: new Date(),
    entryTime: new Date('2021/02/28 13:20:00'),
    exitTime: new Date(),
    entryPressure:200,
    exitPressure:50,
    visibility:10,
    averageDepth:13.5,
    maxDepth:20,
    detail: 'Hi!\nWe are Divy developer\nThanks installing!',
    avatarImageUrl: 'https://picsum.photos/700',
    userName: 'test',
    tags:[0,2,3,4,5],
    imageListUrl:['https://picsum.photos/700','https://picsum.photos/700','https://picsum.photos/700','https://picsum.photos/700'],
  },
];

const userinfo:UserInformation = {
  id:1,
  coverImageUrl: 'https://picsum.photos/700',
  avatarImageUrl: 'https://picsum.photos/700',
  userName:'test',
  profile:'Hi!\nWe are Divy developer\nThanks installing!',
  sex:'man',
  birthDay:new Date('1994/12/17'),
  activityArea:'Japan',
  license:'master scuba diver',
  followCount:10,
  followerCount:100,
  totalDive:10,
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    // backgroundColor: 'rgba(200,100,100,0.3)',
  },
  cardContainer: {
    flex: 2,
    //   backgroundColor: 'rgba(152,226,245,0.3)',
  },
  logsContainer:{
    flex:1,
    backgroundColor: 'rgba(152,226,245,0.3)',
  },
  box1: {
    backgroundColor: 'rgba(50,50,50,0.3)',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
    
  },
  userName: {
    paddingLeft: 10,
    fontSize: 20,
  },
  followerInfo: {
    padding: 5,
    flexDirection: 'row',
  },
  padding5: {
    padding: 5,
  },
  profileButton: {
    // backgroundColor: 'rgba(200,100,245,0.3)',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
  },
  center:{
      alignItems:'center',
      flex:2,
      backgroundColor: 'rgba(50,50,50,0.15)',
  },
  directionRow:{
      flexDirection:'row',
  },
  alignCenter:{
      alignItems:'center',
  },

});

export default function UserInfo({navigation,route}:any) {
  console.log('UserInfo')
  console.log(navigation.isFocused())
  console.log(route)
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.profileContainer}>
        <Card style={styles.cardContainer}>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Content>
            <Avatar.Image
              size={70}
              source={{uri: 'https://picsum.photos/700'}}
            />
            <Title style={styles.userName}>{userinfo.userName}</Title>
            <View style={styles.followerInfo}>
              <Text style={styles.padding5}>{userinfo.followCount} フォロー</Text>
              <Text style={styles.padding5}>{userinfo.followerCount} フォロワー</Text>
            </View>
            <Card.Content>
              <Text>{userinfo.profile}</Text>
            </Card.Content>
          </Card.Content>
          <Card.Content style={styles.profileButton}>
              <TouchableOpacity onPress={()=>Alert.alert('Click')}  style={styles.center} >
            <IconFeather name='mail' size={25}/>
            <Text>メッセージ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate(USER_INFO_CUSTOM, {user:userinfo})} style={styles.center}>
            <IconFeather name='user-plus' size={25} />
            <Text>プロフィール編集</Text>
            </TouchableOpacity>
          </Card.Content>
          <Card.Content style={styles.directionRow}>
          <Paragraph>総ダイビング数：</Paragraph>
            <Paragraph>{userinfo.totalDive}本</Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.logsContainer}>
        <Card>
            <Card.Content style={[styles.directionRow,styles.alignCenter]}>
                <Title>活動ログ </Title>
                <Paragraph>-{userinfo.totalDive}本</Paragraph>
            </Card.Content>
        </Card>
      </View>
      <FlatLogList Logs={LOGS} onPress={()=>navigation.navigate(DETAIL,{logs:LOGS[0]})} />
    </ScrollView>
    </SafeAreaView>
  );
}
