import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Thumbnail = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: 1,
        }}
        source={{
          uri: 'https://wearesocial-net.s3.amazonaws.com/wp-content/uploads/2020/11/gamer_room.jpg',
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Thumbnail;

const styles = StyleSheet.create({
  container: {
    width: '30%',
    height: 400,
    backgroundColor: 'blue',
  },
});
