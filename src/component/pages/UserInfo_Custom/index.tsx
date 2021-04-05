import React, {useState} from 'react';
import {UserInformation} from '../../../interface/UserInfo/userInfomation';
import {formatDate} from '../../../lib/format-date';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Context as UiContext, Status} from '../../../contexts/ui';
import {COLOR} from '../../../constants/theme';
import {LabelValueContainer, TextField} from '../../atoms';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  Modal,
  Colors,
  Paragraph,
  Dialog,
  Portal,
  Button,
  Provider,
  Card,
  Avatar,
  Title,
  RadioButton,
} from 'react-native-paper';
import {useControlledComponent} from 'lib/hooks';
import {USER_INFO} from '../../../constants/path';
import {Value} from 'react-native-reanimated';

const styles = StyleSheet.create({
  dialogContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
  },
  directionRow: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    paddingBottom: hp('1%'),
    borderBottomWidth: 0.5,
    // backgroundColor:'yellow',
  },
  ItemsBaselign: {
    alignItems: 'baseline',
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  testBackground: {
    backgroundColor: 'rgba(152,226,245,0.3)',
  },

  headerCancel: {
    flex: 1,
    // backgroundColor:'blue'
  },
  headerSave: {
    flex: 1,
    // backgroundColor:'green',
  },
  headerTitle: {
    flex: 50,
    textAlign: 'center',
    fontSize: hp('2%'),
    // backgroundColor:'red',
  },
  cardContainer: {
    marginTop: 0,
    flex: 2,
  },
  userName: {
    paddingLeft: 10,
    fontSize: 20,
  },
  imageIconcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  nameText: {
    color: COLOR.WHITE,
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    marginTop: 30,
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

export default function UserInfoCustom({navigation, route}: any) {
  const {user} = route.params;
  console.log('UserInfoCustom');
  console.log(navigation.isFocused());
  console.log(route);

  // BirthDay-Checked Dialog
  const [date, setDate] = useState(new Date(user.birthDay));
  const [show, setShow] = useState(false);
  const onChange = (event: Event, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(date);
  };
  const showDatePicker = () => {
    setShow(!show);
  };

  // Checked Sex RaddioButton
  const [showRadioButton, setShowRadioButton] = React.useState(false);
  const [checked, setChecked] = React.useState('');

  function showRadio() {
    setShowRadioButton(!showRadioButton);
  }

  // プロフィール編集情報を格納(Mock)
  const returnCoverImageUrl = useControlledComponent(user.coverImageUrl);
  const returnAvatarImageUrl = useControlledComponent(user.avatarImageUrl);
  const returnUsername = useControlledComponent(user.userName);
  const returnUserprofile = useControlledComponent(user.profile);
  const returnUsersex = useControlledComponent(user.sex);
  const returnUserbirthday = useControlledComponent(formatDate(date));
  const returnUseractivityArea = useControlledComponent(user.activityArea);
  const returnUserlicense = useControlledComponent(user.license);

  //　ログインST
  const {setApplicationState} = React.useContext(UiContext);
  //　ログアウト処理
  const signOut = React.useCallback(async () => {
    setApplicationState(Status.UN_AUTHORIZED);
  }, [setApplicationState]);

  // 編集破棄ダイアログ
  // 編集破棄
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const returnInit = () => finishEdit();
  const hideDialog = () => setVisible(false);

  const source = React.useMemo(
    () => require('../../../../assets/avatar.jpg'),
    [],
  );

  function finishEdit() {
    setVisible(false);
    navigation.goBack();
  }

  function saveEdit() {
    const userinfo: UserInformation = {
      id: 1,
      coverImageUrl: 'https://picsum.photos/700',
      avatarImageUrl: 'https://picsum.photos/700',
      userName: {returnUsername},
      profile: {returnUserprofile},
      sex: {returnUsersex},
      birthDay: {returnUserbirthday},
      activityArea: {returnUseractivityArea},
      license: {returnUserlicense},
      followCount: 20,
      followerCount: 30,
      totalDive: 50,
    };
    navigation.goBack({user: userinfo});
  }
  //　編集可能か否かでコンポーネントを切り替え
  return (
    <SafeAreaView>
      <View style={styles.directionRow}>
        <Button
          icon="cancel"
          style={styles.headerCancel}
          color={Colors.black}
          mode="outlined"
          onPress={showDialog}>
          破棄
        </Button>
        <Title style={styles.headerTitle}>プロフィール編集</Title>
        <Button
          icon="check-outline"
          style={styles.headerSave}
          color={Colors.black}
          mode="outlined"
          onPress={() => {
            saveEdit();
          }}>
          保存
        </Button>
      </View>
      <ScrollView>
        <Card style={styles.cardContainer}>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Content>
            <Avatar.Image
              size={70}
              source={{uri: 'https://picsum.photos/700'}}
            />
          </Card.Content>
        </Card>
        <View style={styles.textContainer}>
          <TextField
            label="名前"
            value={returnUsername.value}
            onChangeText={returnUsername.onChangeText}
            style={styles.text}
          />
          <TextField
            label="自己紹介"
            value={returnUserprofile.value}
            multiline={true}
            onChangeText={returnUserprofile.onChangeText}
            style={styles.text}
          />
          <TouchableOpacity onPress={showRadio}>
            <TextField
              label="性別"
              disabled={true}
              value={checked}
              onChangeText={returnUsersex.onChangeText}
              style={styles.text}
            />
          </TouchableOpacity>
          <TextField
            label="活動エリア"
            value={returnUseractivityArea.value}
            onChangeText={returnUseractivityArea.onChangeText}
            style={styles.text}
          />
          <TextField
            label="ダイバーランク"
            value={returnUserlicense.value}
            onChangeText={returnUserlicense.onChangeText}
            style={styles.text}
          />
          <TouchableOpacity onPress={showDatePicker}>
            <TextField
              label="生年月日"
              disabled={true}
              value={formatDate(date)}
              onChangeText={returnUserbirthday.onChangeText}
              style={styles.text}
            />
          </TouchableOpacity>
          {show && (
            <Provider>
              <Portal>
                <Dialog visible={show} onDismiss={hideDialog}>
                  <View style={[styles.directionRow, styles.ItemsBaselign]}>
                    <TouchableOpacity onPress={showDatePicker}>
                      <Dialog.Title>OK</Dialog.Title>
                    </TouchableOpacity>
                  </View>
                  <Dialog.Content>
                    <DateTimePicker
                      value={date}
                      mode={'date'}
                      display="spinner"
                      onChange={onChange}
                    />
                  </Dialog.Content>
                </Dialog>
              </Portal>
            </Provider>
          )}
          {showRadioButton && (
            <Provider>
              <Portal>
                <Dialog visible={showRadioButton} onDismiss={hideDialog}>
                  <TouchableOpacity onPress={showRadio}>
                    <Dialog.Title>OK</Dialog.Title>
                  </TouchableOpacity>
                  <View>
                    <RadioButton.Group
                      onValueChange={(value) => setChecked(value)}
                      value={checked}>
                      <RadioButton.Item label="" value="" />
                      <RadioButton.Item label="man" value="man" />
                      <RadioButton.Item label="woman" value="woman" />
                    </RadioButton.Group>
                  </View>
                </Dialog>
              </Portal>
            </Provider>
          )}
        </View>
        <Provider>
          <View style={styles.dialogContainer}>
            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Caution</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>
                    編集した内容を、破棄してよろしいですか？
                  </Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog} style={styles.button}>
                    いいえ
                  </Button>
                  <Button onPress={returnInit} style={styles.button}>
                    はい
                  </Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </Provider>
      </ScrollView>
    </SafeAreaView>
  );
}
