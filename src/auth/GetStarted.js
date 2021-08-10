import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Background from '../component/basic/Background';
import Heading from '../component/basic/Heading';
import Btn from '../component/basic/Btn';
import Paragraph from '../component/basic/Paragraph';

const GetStarted = ({navigation}) => {
  return (
    <Background>
      <Heading>Sign up for EMU Gaming</Heading>
      <Paragraph>
        Create and post your gaming videos, gain more claws, follow other
        accounts etc.
      </Paragraph>

      <Btn mode="outlined" onPress={() => navigation.navigate('Login')}>
        Login
      </Btn>
      <Btn mode="outlined">Register</Btn>
      <Btn mode="outlined">Register</Btn>
      <Btn mode="outlined">Register</Btn>
    </Background>
  );
};

export default GetStarted;

const styles = StyleSheet.create({});
