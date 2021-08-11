import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Background from '../component/basic/Background';
import Heading from '../component/basic/Heading';
import Btn from '../component/basic/Btn';
import Paragraph from '../component/basic/Paragraph';

const GetStarted = ({navigation}) => {
  return (
    <Background>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.Top}>
          <Heading>Sign up for EMU Gaming</Heading>
          <Paragraph>
            Create and post your gaming videos, gain more claws, follow other
            accounts etc.
          </Paragraph>
        </View>
        <View>
          <Btn mode="outlined" onPress={() => navigation.navigate('Login')}>
            Use Phone or Email
          </Btn>
          <Btn mode="outlined">Continue With Facebook</Btn>
          <Btn mode="outlined">Continue With Apple</Btn>
          <Btn mode="outlined">Continue With Google</Btn>
        </View>
      </View>
      <View style={styles.Footer}>
        <Heading>hailo</Heading>
        <Heading>hailo</Heading>
      </View>
    </Background>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  Top: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Footer: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    bottom: 0,
  },
});
