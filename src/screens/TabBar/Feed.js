import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Background from '../../component/basic/Background';
import Thumbnail from '../../component/Thumbnail';

const Feed = () => {
  return (
    <Background style={styles.container}>
      <View style={styles.Row}>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </View>
      <View style={styles.Row}>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </View>
    </Background>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
  Row: {
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: 'red',
    width: Dimensions.get('window').width,
  },
});
