import React from 'react';
import {SIZE, ICONTYPE} from '../../constants/theme';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {formatDate, formatTime, calcTime} from 'lib/format-date';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import {Card, Dialog, Button, DataTable, TextInput} from 'react-native-paper';
import {useControlledComponent} from 'lib/hooks';
import {ChooseCoverImage, IconText, FunctionalTextIcon} from '../molecules';
import {TextField} from '../atoms';
import {useState} from 'react';

const styles = StyleSheet.create({
  directionRow: {
    flexDirection: 'row',
  },
  flex2: {
    flex: 2,
    alignItems: 'flex-end',
  },
  flex: {
    flex: 1,
  },
  textField: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

/**
 * 初期値は、Divyのロゴ
 * UrlをState管理にして動的に変更
 */
const mockCoverImageUrl = 'https://picsum.photos/700';

/**
 * ユーザー情報をもとに、細心のDiveNoを取得し、＋１で計算した数字を表示
 */
const mockDiveNo = 20;

/**
 * 初期表示
 * 必ず必要な項目は、初期値を設定しておく
 * Title
 * date
 * location
 * divePoint
 * entryTime
 * exitTime
 */

export default function PostLogInfo() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  // 都道府県モーダル
  const [prefectureModal, setPrefectureModal] = useState(false);

  // 日付モーダル
  const [dateModal, setDateModal] = useState(false);

  // 潜水時間モーダル
  const [diveTimeModal, setDiveTimeModal] = useState(false);

  // 開始タンク圧モーダル
  const [entryTankPressureModal, setEntryTankPressureModal] = useState(false);

  // 終了タンク圧モーダル
  const [exitTankPressureModal, setExitTankPressureModal] = useState(false);

  //　Entry-Timeモーダル
  const [entryDiveTimeModal, setEntryDiveTimeModal] = useState(false);

  //　Exit-Timeモーダル
  const [exitDiveTimeModal, setExitDiveTimeModal] = useState(false);

  // Date
  const onDateChange = (event: any, selectedDate?: Date | undefined) => {
    const newDate = selectedDate || date.value;
    date.onChangeText(newDate);
  };

  const onEntryTimeChange = (event: any, selectedDate?: Date | undefined) => {
    const newDate = selectedDate || entryTime.value;
    entryTime.onChangeText(newDate);
  };

  const onExitTimeChange = (event: any, selectedDate?: Date | undefined) => {
    const newDate = selectedDate || exitTime.value;
    exitTime.onChangeText(newDate);
  };

  const [text, setText] = useState('');

  //画面表示項目
  const title = useControlledComponent('未定');
  const diveNo = useControlledComponent('20');
  const date = useControlledComponent(new Date());
  const location = useControlledComponent('　');
  const divePoint = useControlledComponent('　');
  const writeUser = useControlledComponent('test');
  const entryTime = useControlledComponent(new Date());
  const exitTime = useControlledComponent(new Date());
  const diveTime = useControlledComponent('');
  const entryPressure = useControlledComponent('200');
  const exitPressure = useControlledComponent('50');
  const maxDepth = useControlledComponent('');
  const averageDepth = useControlledComponent('');
  const tags = useControlledComponent('');
  const imageListUrl = useControlledComponent('');
  const coverImageUrl = useControlledComponent('');
  const avatarImageUrl = useControlledComponent('');
  const activityDetail = useControlledComponent('');
  const visibility = useControlledComponent('');

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ChooseCoverImage
            source={mockCoverImageUrl}
            onPress={() => Alert.alert('Choose Image')}
            iconName={'ios-camera-outline'}
            size={SIZE.ICON}
          />
        </View>

        {/** Title */}
        <Card>
          <View style={styles.directionRow}>
            <View style={styles.flex}>
              <IconText
                iconName={'ios-pencil-outline'}
                iconType={ICONTYPE.IONICONS}
                size={SIZE.ICON}
                text={'タイトル'}
              />
            </View>
            <View style={styles.flex2}>
              <FunctionalTextIcon
                iconName={'ios-chevron-forward-outline'}
                iconType={ICONTYPE.IONICONS}
                onPress={() => Alert.alert('Choose Date')}
                size={SIZE.ICON}
                text={title.value}
              />
            </View>
          </View>
        </Card>

        {/** Location */}
        <Card>
          <View style={styles.directionRow}>
            <View style={styles.flex}>
              <IconText
                iconName={'ios-map-outline'}
                iconType={ICONTYPE.IONICONS}
                size={SIZE.ICON}
                text={'都道府県'}
              />
            </View>
            <View style={styles.flex2}>
              <FunctionalTextIcon
                iconName={'ios-chevron-forward-outline'}
                iconType={ICONTYPE.IONICONS}
                onPress={() => setPrefectureModal(!prefectureModal)}
                size={SIZE.ICON}
                text={location.value}
              />
            </View>
          </View>
        </Card>

        {/** DivePoint */}
        <Card>
          <View style={styles.directionRow}>
            <View style={styles.flex}>
              <IconText
                iconName={'ios-logo-foursquare'}
                iconType={ICONTYPE.IONICONS}
                size={SIZE.ICON}
                text={'ポイント名'}
              />
            </View>
            <View style={styles.flex2}>

            </View>
          </View>
        </Card>

        {/** 日付 */}
        <Card>
          <View style={styles.directionRow}>
            <View style={styles.flex}>
              <IconText
                iconName={'ios-calendar-outline'}
                iconType={ICONTYPE.IONICONS}
                size={SIZE.ICON}
                text={'日付'}
              />
            </View>
            <View style={styles.flex2}>
              <FunctionalTextIcon
                iconName={'ios-chevron-forward-outline'}
                iconType={ICONTYPE.IONICONS}
                onPress={() => setDateModal(!dateModal)}
                size={SIZE.ICON}
                text={formatDate(date.value)}
              />
            </View>
          </View>
        </Card>

        {/** Visibility */}
        <Card>
          <View style={styles.directionRow}>
            <View style={styles.flex}>
              <IconText
                iconName={'ios-calendar-outline'}
                iconType={ICONTYPE.IONICONS}
                size={SIZE.ICON}
                text={'透明度'}
              />
            </View>
            <View style={styles.flex2}>
              <FunctionalTextIcon
                iconName={'ios-chevron-forward-outline'}
                iconType={ICONTYPE.IONICONS}
                onPress={() => Alert.alert('Choose Date')}
                size={SIZE.ICON}
                text={visibility.value}
              />
            </View>
          </View>
        </Card>

        {/** Average-Depth */}
        <Card>
          <View style={styles.directionRow}>
            <View style={styles.flex}>
              <IconText
                iconName={'ios-calendar-outline'}
                iconType={ICONTYPE.IONICONS}
                size={SIZE.ICON}
                text={'平均水深'}
              />
            </View>
            <View style={styles.flex2}>
              <FunctionalTextIcon
                iconName={'ios-chevron-forward-outline'}
                iconType={ICONTYPE.IONICONS}
                onPress={() => Alert.alert('Choose Date')}
                size={SIZE.ICON}
                text={averageDepth.value}
              />
            </View>
          </View>
        </Card>

        {/** Max-Depth */}
        <Card>
          <View style={styles.directionRow}>
            <View style={styles.flex}>
              <IconText
                iconName={'ios-calendar-outline'}
                iconType={ICONTYPE.IONICONS}
                size={SIZE.ICON}
                text={'最大水深'}
              />
            </View>
            <View style={styles.flex2}>
              <FunctionalTextIcon
                iconName={'ios-chevron-forward-outline'}
                iconType={ICONTYPE.IONICONS}
                onPress={() => Alert.alert('Choose Date')}
                size={SIZE.ICON}
                text={maxDepth.value}
              />
            </View>
          </View>
        </Card>

        {/** ActivityDetail */}
        <Card>
          <View style={styles.directionRow}>
            <View style={styles.flex}>
              <IconText
                iconName={'ios-calendar-outline'}
                iconType={ICONTYPE.IONICONS}
                size={SIZE.ICON}
                text={'活動詳細'}
              />
            </View>
            <View style={styles.flex2}>
              <FunctionalTextIcon
                iconName={'ios-chevron-forward-outline'}
                iconType={ICONTYPE.IONICONS}
                onPress={() => Alert.alert('Choose Date')}
                size={SIZE.ICON}
                text={activityDetail.value}
              />
            </View>
          </View>
        </Card>

        {/** ChooseTag */}
        <Card>
          <View style={styles.directionRow}>
            <View style={styles.flex}>
              <IconText
                iconName={'ios-calendar-outline'}
                iconType={ICONTYPE.IONICONS}
                size={SIZE.ICON}
                text={'タグ'}
              />
            </View>
            <View style={styles.flex2}>
              <FunctionalTextIcon
                iconName={'ios-chevron-forward-outline'}
                iconType={ICONTYPE.IONICONS}
                onPress={() => Alert.alert('Choose Date')}
                size={SIZE.ICON}
                text={tags.value}
              />
            </View>
          </View>
        </Card>

        {/** ChooseImage */}
        <Card>
          <View style={styles.directionRow}>
            <View style={styles.flex}>
              <IconText
                iconName={'ios-calendar-outline'}
                iconType={ICONTYPE.IONICONS}
                size={SIZE.ICON}
                text={'Images'}
              />
            </View>
            <View style={styles.flex2}>
              <FunctionalTextIcon
                iconName={'ios-chevron-forward-outline'}
                iconType={ICONTYPE.IONICONS}
                onPress={() => Alert.alert('Choose Date')}
                size={SIZE.ICON}
                text={imageListUrl.value}
              />
            </View>
          </View>
        </Card>

        {/** Dive Time */}
        <Card>
          <Card.Content>
            <IconText
              iconName={'ios-timer-outline'}
              iconType={ICONTYPE.IONICONS}
              size={SIZE.ICON}
              text={'Dive Time'}
            />

            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Entry-Time</DataTable.Title>
                <DataTable.Title>Exit-Time</DataTable.Title>
                <DataTable.Title>Dive-Time</DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>
                  <FunctionalTextIcon
                    iconName={'ios-chevron-down-outline'}
                    iconType={ICONTYPE.IONICONS}
                    onPress={() => setEntryDiveTimeModal(!entryDiveTimeModal)}
                    size={SIZE.ICON}
                    text={formatTime(entryTime.value)}
                  />
                </DataTable.Cell>
                <DataTable.Cell>
                  <FunctionalTextIcon
                    iconName={'ios-chevron-down-outline'}
                    iconType={ICONTYPE.IONICONS}
                    onPress={() => setExitDiveTimeModal(!exitDiveTimeModal)}
                    size={SIZE.ICON}
                    text={formatTime(exitTime.value)}
                  />
                </DataTable.Cell>
                <DataTable.Cell>
                  {calcTime(exitTime.value, entryTime.value)}Minute
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Card.Content>
        </Card>

        {/** Tank Pressure */}
        <Card>
          <Card.Content>
            <IconText
              iconName={'diving-scuba-tank'}
              iconType={ICONTYPE.MATERIALCOMMUNITYICONS}
              size={SIZE.ICON}
              text={'Tank Pressure'}
            />
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>開始時タンク圧</DataTable.Title>
                <DataTable.Title>終了時タンク圧</DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>
                  <FunctionalTextIcon
                    iconName={'ios-chevron-down-outline'}
                    iconType={ICONTYPE.IONICONS}
                    onPress={() =>
                      setEntryTankPressureModal(!entryTankPressureModal)
                    }
                    size={SIZE.ICON}
                    text={entryPressure.value + ' kg/cm²'}
                  />
                </DataTable.Cell>
                <DataTable.Cell>
                  <FunctionalTextIcon
                    iconName={'ios-chevron-down-outline'}
                    iconType={ICONTYPE.IONICONS}
                    onPress={() =>
                      setExitTankPressureModal(!entryTankPressureModal)
                    }
                    size={SIZE.ICON}
                    text={exitPressure.value + ' kg/cm²'}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Card.Content>
        </Card>

        {/* 都道府県 ダイアログ*/}
        <Dialog
          visible={prefectureModal}
          onDismiss={() => setPrefectureModal(!prefectureModal)}>
          <SafeAreaView>
            <Card>
              <Card.Content>
                <Picker
                  selectedValue={location.value}
                  enabled={true}
                  mode={'dropdown'}
                  onValueChange={(itemValue, itemIndex) =>
                    location.onChangeText(itemValue)
                  }>
                  <Picker.Item label="北海道" value="北海道" />
                  {/* <Picker.Item label="青森" value="青森" />
                <Picker.Item label="岩手" value="岩手" />
                <Picker.Item label="宮城" value="宮城" />
                <Picker.Item label="秋田" value="秋田" />
                <Picker.Item label="山形" value="山形" />
                <Picker.Item label="福島" value="福島" />
                <Picker.Item label="茨城" value="茨城" /> */}
                  <Picker.Item label="千葉" value="千葉" />
                  <Picker.Item label="神奈川" value="神奈川" />
                  {/* <Picker.Item label="新潟" value="新潟" />
                <Picker.Item label="富山" value="富山" />
                <Picker.Item label="石川" value="石川" /> */}
                  <Picker.Item label="福井" value="福井" />
                  <Picker.Item label="静岡" value="静岡" />
                  <Picker.Item label="愛知" value="愛知" />
                  <Picker.Item label="三重" value="三重" />
                  <Picker.Item label="滋賀" value="滋賀" />
                  <Picker.Item label="京都" value="京都" />
                  <Picker.Item label="兵庫" value="兵庫" />
                  <Picker.Item label="和歌山" value="和歌山" />
                  <Picker.Item label="鳥取" value="鳥取" />
                  <Picker.Item label="島根" value="島根" />
                  <Picker.Item label="岡山" value="岡山" />
                  <Picker.Item label="広島" value="広島" />
                  <Picker.Item label="山口" value="山口" />
                  <Picker.Item label="香川" value="香川" />
                  <Picker.Item label="徳島" value="徳島" />
                  <Picker.Item label="愛媛" value="愛媛" />
                  <Picker.Item label="高知" value="高知" />
                  <Picker.Item label="福岡" value="福岡" />
                  <Picker.Item label="大分" value="大分" />
                  <Picker.Item label="宮崎" value="宮崎" />
                  <Picker.Item label="鹿児島" value="鹿児島" />
                  <Picker.Item label="熊本" value="熊本" />
                  <Picker.Item label="佐賀" value="佐賀" />
                  <Picker.Item label="長崎" value="長崎" />
                  <Picker.Item label="沖縄" value="沖縄" />
                </Picker>
              </Card.Content>
              <Dialog.Actions>
                <Button
                  onPress={() => {
                    setPrefectureModal(!prefectureModal);
                  }}>
                  OK
                </Button>
              </Dialog.Actions>
            </Card>
          </SafeAreaView>
        </Dialog>

        {/* 日付 ダイアログ　*/}
        <Dialog visible={dateModal} onDismiss={() => setDateModal(!dateModal)}>
          <SafeAreaView>
            <Card>
              <DateTimePicker
                mode="date"
                value={date.value}
                display="inline"
                onChange={onDateChange}></DateTimePicker>
              <Dialog.Actions>
                <Button
                  onPress={() => {
                    date.onChangeText(new Date());
                  }}>
                  Now
                </Button>
                <Button
                  onPress={() => {
                    setDateModal(!dateModal);
                  }}>
                  OK
                </Button>
              </Dialog.Actions>
            </Card>
          </SafeAreaView>
        </Dialog>

        {/* ダイブタイム(Entry)　ダイアログ */}
        <Dialog
          visible={entryDiveTimeModal}
          onDismiss={() => setEntryDiveTimeModal(!entryDiveTimeModal)}>
          <SafeAreaView>
            <Card>
              <DateTimePicker
                mode="time"
                display="spinner"
                is24Hour={true}
                value={entryTime.value}
                onChange={onEntryTimeChange}></DateTimePicker>
              <Dialog.Actions>
                <Button
                  onPress={() => {
                    setEntryDiveTimeModal(!entryDiveTimeModal);
                  }}>
                  OK
                </Button>
              </Dialog.Actions>
            </Card>
          </SafeAreaView>
        </Dialog>

        {/* ダイブタイム(Exit)ダイアログ */}
        <Dialog
          visible={exitDiveTimeModal}
          onDismiss={() => setExitDiveTimeModal(!exitDiveTimeModal)}>
          <SafeAreaView>
            <Card>
              <DateTimePicker
                mode="time"
                display="spinner"
                is24Hour={true}
                value={exitTime.value}
                onChange={onExitTimeChange}></DateTimePicker>
              <Dialog.Actions>
                <Button
                  onPress={() => {
                    setExitDiveTimeModal(!exitDiveTimeModal);
                  }}>
                  OK
                </Button>
              </Dialog.Actions>
            </Card>
          </SafeAreaView>
        </Dialog>

        {/* 開始タンク圧ダイアログ */}
        <Dialog
          visible={entryTankPressureModal}
          onDismiss={() => setEntryTankPressureModal(!entryTankPressureModal)}>
          <SafeAreaView>
            <Card>
              <Picker
                selectedValue={entryPressure.value}
                enabled={true}
                mode={'dropdown'}
                onValueChange={(itemValue, itemIndex) =>
                  entryPressure.onChangeText(itemValue)
                }>
                <Picker.Item label="200Bar" value="200" />
                <Picker.Item label="190Bar" value="190" />
                <Picker.Item label="180Bar" value="180" />
                <Picker.Item label="170Bar" value="170" />
                <Picker.Item label="160Bar" value="160" />
                <Picker.Item label="150Bar" value="150" />
                <Picker.Item label="140Bar" value="140" />
                <Picker.Item label="130Bar" value="130" />
                <Picker.Item label="120Bar" value="120" />
                <Picker.Item label="110Bar" value="110" />
                <Picker.Item label="100Bar" value="100" />
                <Picker.Item label="90Bar" value="90" />
                <Picker.Item label="80Bar" value="80" />
                <Picker.Item label="70Bar" value="70" />
                <Picker.Item label="60Bar" value="60" />
                <Picker.Item label="50Bar" value="50" />
                <Picker.Item label="40Bar" value="40" />
                <Picker.Item label="30Bar" value="30" />
                <Picker.Item label="20Bar" value="20" />
                <Picker.Item label="10Bar" value="10" />
                <Picker.Item label="0Bar" value="0" />
              </Picker>
              <Dialog.Actions>
                <Button
                  onPress={() => {
                    setEntryTankPressureModal(!entryTankPressureModal);
                  }}>
                  OK
                </Button>
              </Dialog.Actions>
            </Card>
          </SafeAreaView>
        </Dialog>

        {/* 終了タンク圧ダイアログ */}
        <Dialog
          visible={exitTankPressureModal}
          onDismiss={() => setExitTankPressureModal(!exitTankPressureModal)}>
          <SafeAreaView>
            <Card>
              <Picker
                selectedValue={exitPressure.value}
                enabled={true}
                mode={'dropdown'}
                onValueChange={(itemValue, itemIndex) =>
                  exitPressure.onChangeText(itemValue)
                }>
                <Picker.Item label="200Bar" value="200" />
                <Picker.Item label="190Bar" value="190" />
                <Picker.Item label="180Bar" value="180" />
                <Picker.Item label="170Bar" value="170" />
                <Picker.Item label="160Bar" value="160" />
                <Picker.Item label="150Bar" value="150" />
                <Picker.Item label="140Bar" value="140" />
                <Picker.Item label="130Bar" value="130" />
                <Picker.Item label="120Bar" value="120" />
                <Picker.Item label="110Bar" value="110" />
                <Picker.Item label="100Bar" value="100" />
                <Picker.Item label="90Bar" value="90" />
                <Picker.Item label="80Bar" value="80" />
                <Picker.Item label="70Bar" value="70" />
                <Picker.Item label="60Bar" value="60" />
                <Picker.Item label="50Bar" value="50" />
                <Picker.Item label="40Bar" value="40" />
                <Picker.Item label="30Bar" value="30" />
                <Picker.Item label="20Bar" value="20" />
                <Picker.Item label="10Bar" value="10" />
                <Picker.Item label="0Bar" value="0" />
              </Picker>
              <Dialog.Actions>
                <Button
                  onPress={() => {
                    setExitTankPressureModal(!exitTankPressureModal);
                  }}>
                  OK
                </Button>
              </Dialog.Actions>
            </Card>
          </SafeAreaView>
        </Dialog>
      </ScrollView>
    </SafeAreaView>
  );
}
