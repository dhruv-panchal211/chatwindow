import React, {PureComponent} from 'react';
import {FlatList, Text, View, StyleSheet, Image, StatusBar} from 'react-native';
import { FAB } from 'react-native-paper';

const Messages = [
  {
    id: '1',
    userName: 'Johanna Stewart',
    userImg: require('../Image/1.jpg'),
    messageTime: '8:00 am',
    messageText:
      'Hey There, this is my test for a post of my social app in react native.',
  },
  {
    id: '2',
    userName: 'Samuel Joyce',
    userImg: require('../Image/2.jpg'),
    messageTime: '8:00 am',
    messageText:
      'Hey There, this is my test for a post of my social app in react native.',
  },
  {
    id: '3',
    userName: '+44 7418 31058',
    userImg: require('../Image/3.jpg'),
    messageTime: '8:00 am',
    messageText:
      'Hey There, this is my test for a post of my social app in react native.',
  },
  {
    id: '4',
    userName: 'Elva Barker',
    userImg: require('../Image/4.jpg'),
    messageTime: '8:00 am',
    messageText:
      'Hey There, this is my test for a post of my social app in react native.',
  },
  {
    id: '5',
    userName: 'Elmer Snyder',
    userImg: require('../Image/5.jpg'),
    messageTime: '8:00 am',
    messageText:
      'Hey There, this is my test for a post of my social app in react native.',
  },
  {
    id: '6',
    userName: 'Amanda Brown',
    userImg: require('../Image/6.jpg'),
    messageTime: '8:00 am',
    messageText:
      'Hey There, this is my test for a post of my social app in react native.',
  },
  {
    id: '7',
    userName: 'Annie Stewart',
    userImg: require('../Image/1.jpg'),
    messageTime: '8:00 am',
    messageText:
      'Hey There, this is my test for a post of my social app in react native.',
  },
];

export default class Chats extends PureComponent {
  render() {
    return (
        
      <View style={styles.container}>
      <StatusBar backgroundColor= "#00BFFF" />
        <FlatList
          data={Messages}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.card}>
                <View  style={styles.UserInfo}>
                    <View style={styles.UserImgWrapper}>
                        <Image
                        source={item.userImg}
                        style={styles.UserImg}
                        ></Image>
                    </View>

                    <View style={styles.TextSection}>
                        <View style={styles.UserInfoText}>
                            <View style={styles.UserName}><Text>{item.userName}</Text></View>
                            <View style={styles.PostTime}><Text>{item.messageTime}</Text></View>
                        </View>
                        <View style={styles.MessageText}><Text>{item.messageText}</Text>
                        </View>
                    </View>
                </View>
            </View>
          )}></FlatList>

<FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems : 'center',
  },
  card: {
      marginLeft: 20
  },
  UserInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  UserImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  UserImg: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  TextSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  UserInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  UserName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  PostTime: {
    fontSize: 10,
    color: '#331',
  },
  MessageText: {
    fontSize: 10,
    color: '#333333',
  },
  flatListStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 24,
    padding: 8,
    borderRadius: 10,
  },
  fab: {
    position: 'absolute',
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
