import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Avatar, Paragraph} from 'react-native-paper';
import H2 from './basic/H2';
import H3 from './basic/H3';
import H4 from './basic/H4';

import Heading from './basic/Heading';

const ListOfComment = props => {
  const {comments} = props;
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.Image}>
          <Avatar.Image
            size={40}
            source={{
              uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            }}
          />
        </View>
        <View style={styles.Content}>
          <H3>{comments.name}</H3>
          <H2 numberOfLines={1} ellipsizeMode={'tail'}>
            {comments.message}
          </H2>
          <H4>{comments.date}</H4>
        </View>
      </View>
      <View style={styles.right}>
        <Image
          source={require('./../assets/images/claw.png')}
          style={{height: 40, width: 40}}
          resizeMode="contain"
        />
        <H3>{comments.claws}</H3>
      </View>
    </View>
  );
};

export default ListOfComment;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#000',
    height: 80,
    display: 'flex',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  left: {
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  right: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Content: {
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
});
