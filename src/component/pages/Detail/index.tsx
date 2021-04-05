import React from 'react';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {width, height} from '../../../lib/windows';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
  ImageComponent,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
  DataTable,
  Chip,
  IconButton,
} from 'react-native-paper';
import {CoverImage, ImageList, TagsList} from '../../atoms';
import {calcTime, formatDate, formatTime} from '../../../lib/format-date';
import {TagsEnums, exchange} from '../../../constants/enum'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft: 5,
  },
  coverImageContainer: {
    flex: 1,
  },
  coverImage: {
    flex: 2,
    top: 0,
    position: 'relative',
  },
  logInfoContainer: {
    flex: 2,
    width: width,
  },
  userinfoContainer: {
    flexDirection: 'row',
    // backgroundColor:'rgba(152,226,245,0.3)'
  },
  like:{
    right:0,
    paddingLeft:280,
    // backgroundColor:'yellow',
  },
  avatarImage: {
    right: 0,
    alignItems: 'flex-start',
  },
  userName: {
    paddingLeft: 10,
    paddingTop: 15,
  },
  logDataContainer: {
    flex: 1,
  },
  card: {
    padding: 20,
  },
  sub: {
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 8,
  },
  logData: {
    flex: 2,
    textAlign: 'center',
  },
  rowItems: {
    flexDirection: 'row',
    alignItems: 'baseline',
    flex: 3,
  },
  tagContainer: {
    paddingLeft:80,
    flex:3,
    // backgroundColor:'yellow'
  },
  tagChip: {
    width: '100%',
  },
  tagNavi: {
    flexDirection:'row',
    // backgroundColor:'rgba(152,226,245,0.3)'
  },
  imageContainer:{
    width:'100%',
    height:'100%',
  },
  imgae:{
    width:100,
    height:200,
    backgroundColor:'rgba(152,226,245,0.3)',
  },
});

export default function Detail({route,navigation}:any) {
  console.log('Detail')
  console.log(navigation.isFocused())
  console.log(route)

  const {logs} = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.coverImageContainer}>
          <CoverImage
            style={styles.coverImage}
            source={{uri: logs.coverImageUrl}}
          />
        </View>
        <View style={styles.logInfoContainer}>
          <View style={styles.userinfoContainer}>
            <Avatar.Image
              size={50}
              source={{uri: logs.avatarImageUrl}}
              style={styles.avatarImage}
            />
            <Text style={[styles.userName]}>{logs.userName}</Text>
            <View>
              {/* <IconAntDesign name='like2' size={30} style={styles.like} 
              onPress={()=>Alert.alert('Push like+1')} /> */}
            </View>
          </View>
          <View style={styles.logDataContainer}>
            <Text style={styles.title}>活動データ</Text>
            <Card style={styles.card}>
              <Card.Content style={styles.sub}>
                <View style={styles.rowItems}>
                  <IconFontAwesome5 name="map-marked-alt" size={20} />
                  <Title>Location</Title>
                </View>
                <Paragraph style={styles.logData}>{logs.location}</Paragraph>
              </Card.Content>

              <Card.Content style={styles.sub}>
                <View style={styles.rowItems}>
                  <IconMaterialIcons name="pin-drop" size={20} />
                  <Title>Point</Title>
                </View>
                <Paragraph style={styles.logData}>{logs.divePoint}</Paragraph>
              </Card.Content>
              <Card.Content style={styles.sub}>
                <View style={styles.rowItems}>
                  <IconFontisto name="date" size={20} />
                  <Title>Date</Title>
                </View>
                <Paragraph style={styles.logData}>{formatDate(logs.date)}</Paragraph>
              </Card.Content>
              <Divider />
              <Card.Content style={styles.sub}>
                <IconIonicons name="timer-outline" size={20} />
                <Title>Dive-Time</Title>
              </Card.Content>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Entry-Time</DataTable.Title>
                  <DataTable.Title>Exit-Time</DataTable.Title>
                  <DataTable.Title>Dive-Time</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>{formatTime(logs.entryTime)}</DataTable.Cell>
                  <DataTable.Cell>{formatTime(logs.exitTime)}</DataTable.Cell>
                  <DataTable.Cell>{calcTime(logs.exitTime, logs.entryTime)}Minute</DataTable.Cell>
                </DataTable.Row>
              </DataTable>

              <Card.Content style={styles.sub}>
                <IconMaterialCommunityIcons
                  name="diving-scuba-tank"
                  size={20}
                />
                <Title>Pressure</Title>
              </Card.Content>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Entry-Pressure</DataTable.Title>
                  <DataTable.Title>Exit-Pressure</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>{logs.entryPressure}kg/cm²</DataTable.Cell>
                  <DataTable.Cell>{logs.exitPressure}kg/cm²</DataTable.Cell>
                </DataTable.Row>
              </DataTable>

              <Card.Content style={styles.sub}>
                <IconMaterialIcons name="waves" size={20} />
                <Title>Water-Conditions</Title>
              </Card.Content>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Visibility</DataTable.Title>
                  <DataTable.Title>Average-Depth</DataTable.Title>
                  <DataTable.Title>Max-Depth</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>{logs.visibility}m</DataTable.Cell>
                  <DataTable.Cell>{logs.averageDepth}m</DataTable.Cell>
                  <DataTable.Cell>{logs.maxDepth}m</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </Card>
          </View>
          <View style={styles.logDataContainer}>
            <Text style={styles.title}>活動詳細</Text>
            <Card style={styles.card}>
              <Card.Content>
                <Text>{logs.detail}</Text>
              </Card.Content>
            </Card>
            <Card style={styles.card}>
              <View style={styles.tagNavi}>
              <Card.Content style={styles.sub}>
                <IconFontAwesome5 name="tags" size={20} />
                <Title>タグ</Title>
              </Card.Content>
              <Card.Content style={styles.tagContainer}>
                <TagsList style={styles.tagChip} tags={logs.tags} />
              </Card.Content>
              </View>
            </Card>
          </View>
          <View style={styles.imageContainer}>
                <ImageList imageListUrl={logs.imageListUrl} style={styles.card} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
