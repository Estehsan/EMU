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

const LoginSocial = ({navigation}) => {
  return (
    <Background>
      <View
        style={{
          flex: 4,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.Top}>
          <Heading>Log in to your account</Heading>
          <Paragraph></Paragraph>
          <Paragraph>
            Log in to post your gaming videos,gain more claws, follow your
            accounts etc.
          </Paragraph>
          <Paragraph></Paragraph>
        </View>
        <View style={{marginBottom: 10}}>
          <SocialBtn onPress="" text="Use Phone or Email">
            <Icon name="user" size={25} color="#fff" />
          </SocialBtn>
          <SocialBtn onPress="" text="Continue With Facebook">
            <Fb name="sc-facebook" size={25} color="#fff" />
          </SocialBtn>
          <SocialBtn onPress="" text="Use Phone or Email">
            <Icon name="apple1" size={25} color="#fff" />
          </SocialBtn>
          <SocialBtn onPress="" text="Continue With Google">
            <Google name="google" size={25} color="#fff" />
          </SocialBtn>
        </View>
        <View>
          <Icon name="down" size={25} color="#fff" />
        </View>
      </View>

      <View style={styles.Footer}>
        <TouchableOpacity
          style={styles.Footerbg}
          onPress={() => navigation.navigate('Login')}>
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
    </Background>
  );
};

export default LoginSocial;

const styles = StyleSheet.create({
  Top: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Footer: {
    display: 'flex',
    flex: 1,
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    bottom: 0,
    alignItems: 'center',
  },
  Footerbg: {
    backgroundColor: '#3B3B3B',
    bottom: 0,
    height: '60%',
    paddingTop: 22,
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
});
