import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Heading from '../component/basic/Heading';
import {theme} from '../theme';
import Background from './../component/basic/Background';
import Paragraph from './../component/basic/Paragraph';
import LParagraph from './../component/basic/LParagaph';
import H2 from './../component/basic/H2';

const MessageList = ({item}) => {
  return (
    <View style={styles.MessageTab}>
      <Image
        source={{
          uri: item.picture,
        }}
        style={{height: 60, width: 60, borderRadius: 10}}
      />
      <View style={styles.Message}>
        <H2 style={{color: '#fff'}}>{item.Name}</H2>
        <LParagraph>{item.lastmsg}</LParagraph>
      </View>
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  MessageTab: {
    height: 80,
    paddingHorizontal: 10,
    backgroundColor: '#272727',
    width: '100%',
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  Message: {padding: 20},
});
