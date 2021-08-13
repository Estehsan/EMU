import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Heading from '../component/basic/Heading';
import Background from './../component/basic/Background';
const Profile = () => {
  return (
    <Background>
      <View style={styles.header}>
        <Heading>hailo</Heading>
      </View>
      <View style={styles.Bio}>
        <Heading>hailo</Heading>
      </View>
      <View style={styles.Socials}>
        <Heading>hailo</Heading>
      </View>
      <View style={styles.Videos}>
        <Heading>hailo</Heading>
      </View>
    </Background>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {flex: 1, backgroundColor: 'red'},
  Bio: {flex: 1, backgroundColor: 'green'},
  Socials: {flex: 1, backgroundColor: 'grey'},
  Videos: {flex: 1, backgroundColor: 'blue'},
});
