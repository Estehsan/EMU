import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Background from '../component/basic/Background';
import Heading from '../component/basic/Heading';
import Btn from '../component/basic/Btn';
import Paragraph from '../component/basic/Paragraph';
import SocialBtn from '../component/basic/SocialBtn';

import Icon from 'react-native-vector-icons/AntDesign';
import Fb from 'react-native-vector-icons/EvilIcons';
import Google from 'react-native-vector-icons/AntDesign';

import LoginSocial from './LoginSocial';
import {theme} from '../theme';
import {color} from 'react-native-reanimated';

const GetStarted = ({navigation}) => {
  return (
    <Background>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.Top}>
          <Heading>Sign up for EMU Gaming</Heading>
          <Paragraph></Paragraph>
          <Paragraph>
            Create and post your gaming videos, gain more claws, follow other
            accounts etc.
          </Paragraph>
          <Paragraph></Paragraph>
        </View>
        <View>
          <SocialBtn text="Use Phone or Email">
            <Icon name="user" size={25} color="#fff" />
          </SocialBtn>
          <SocialBtn text="Continue With Facebook">
            <Fb name="sc-facebook" size={30} color="#fff" />
          </SocialBtn>
          <SocialBtn text="Use Phone or Email">
            <Icon name="apple1" size={25} color="#fff" />
          </SocialBtn>
          <SocialBtn text="Continue With Google">
            <Google name="google" size={25} color="#fff" />
          </SocialBtn>
        </View>
        <View style={{marginTop: 10}}>
          <Icon name="down" size={25} color="#fff" />
        </View>
      </View>

      <View style={styles.Footer}>
        <View style={styles.FooterA}>
          <Paragraph>
            By signing up, you agree to our
            <Paragraph style={{color: '#fff'}}> Terms of Service </Paragraph>
            and acknowledge thatf you have readour{' '}
            <Paragraph style={{color: '#fff'}}>Privacy Policy</Paragraph> to
            learn how we collect, use and share your data.
          </Paragraph>
        </View>
        <View style={styles.FooterB}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginSocial')}>
            <Heading
              style={{
                fontFamily: 'SFUIText-SemiBold',
                fontSize: 20,
                color: '#fff',
              }}>
              Don’t have an account?
              <Heading style={{color: 'red'}}> Sign up</Heading>
            </Heading>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    // backgroundColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    bottom: 0,
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  FooterA: {flex: 1},
  FooterB: {
    justifyContent: 'center',
    backgroundColor: theme.colors.combination,
    alignItems: 'center',
    flex: 1,
    width: Dimensions.get('window').width,
  },
});
