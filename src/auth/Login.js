import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Paragraph from '../component/basic/Paragraph';

import Background from '../component/basic/Background';
import Heading from '../component/basic/Heading';
import TInput from '../component/basic/TInput';
import Btn from '../component/basic/Btn';

import Google from 'react-native-vector-icons/AntDesign';
import RedBtn from '../component/basic/RedBtn';

const Login = ({navigation}) => {
  const [name, setName] = useState({value: '', error: ''});

  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onLoginPress = () => {
    const EmailError = email.value ? '' : "Email Can't be empty";
    if (EmailError) {
      setEmail({...email, error: EmailError});
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.Top}>
          <Heading>Log in With Email</Heading>
          <Paragraph></Paragraph>
          <Paragraph>
            Log in to post your gaming videos,gain more claws, follow your
            accounts etc.
          </Paragraph>
          <Paragraph></Paragraph>
        </View>
        <TInput
          placeholder="Your Name"
          iconName="account"
          error={email.error}
          errorText={email.error}
          onChangeText={e => {
            setName({value: e, error: ''});
          }}
          value={email.name}
        />
        <TInput
          placeholder="Your Email"
          iconName="email-outline"
          error={email.error}
          errorText={email.error}
          onChangeText={e => {
            setEmail({value: e, error: ''});
          }}
          value={email.email}
        />
        <TInput
          placeholder="Enter Your Password"
          value={password.password}
          iconName="lock-open-outline"
          error={password.error}
          errorText={email.error}
          onChangeText={e => {
            setPassword({value: e, error: ''});
          }}
          secureTextEntry
        />
      </View>

      <View style={styles.Footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <RedBtn title="SignUp" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginSocial')}>
          <Heading
            style={{
              fontFamily: 'SFUIText-SemiBold',
              fontSize: 20,
              color: '#fff',
            }}>
            Don’t have an account?
            <Heading style={{color: 'red'}}> Login </Heading>
          </Heading>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Top: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'flex-end',
  },
  Footer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    bottom: 0,
    alignContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
});
