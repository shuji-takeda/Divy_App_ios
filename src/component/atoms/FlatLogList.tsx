import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  Card,
  Avatar,
  Title,
  Paragraph,
  Divider,
} from 'react-native-paper';
import {DiveLogs} from '../../interface/DiveLog/diveLogs';
import {width, height} from '../../lib/windows';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    width: width,
  },
  alignCenter: {
    alignItems: 'center',

    backgroundColor: 'rgba(152,226,100,0.3)',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  DirectionRow: {
    flexDirection: 'row',
  },
  padding: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
});

interface Props {
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
  Logs: DiveLogs[];
}

export default function FlatLogList(props: Props) {
  const {Logs, style, onPress} = props;
  const renderLogs = ({item}: {item: DiveLogs}) => {
    return (
      <View key={item.id}>
        <TouchableOpacity onPress={onPress}>
          <Card style={styles.contain}>
            <Card.Cover source={{uri: item.coverImageUrl}} />
            <Card.Content style={[styles.justifyCenter]}>
              <Title>{item.title}</Title>
            </Card.Content>
            <Card.Content style={[styles.DirectionRow]}>
              <Paragraph>{item.location}</Paragraph>
              <Paragraph> - </Paragraph>
              <Paragraph>{item.divePoint}</Paragraph>
            </Card.Content>
            <Card.Content style={[styles.DirectionRow]}>
              <Avatar.Image size={30} source={{uri: item.avatarImageUrl}} />
              <Title>{item.userName}</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <Divider />
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={Logs}
        renderItem={renderLogs}
        keyExtractor={(logs) => logs.id}
      />
      <Divider />
    </>
  );
}
