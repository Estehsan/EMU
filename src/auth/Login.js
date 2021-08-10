import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Paragraph from '../component/basic/Paragraph';

import Background from '../component/basic/Background';
import Heading from '../component/basic/Heading';
import TInput from '../component/basic/TInput';
import Btn from '../component/basic/Btn';

const Login = () => {
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
      <Heading>Welcome</Heading>
      <TInput
        label="Email"
        value={email.value}  
        error={email.error}
        errorText={email.error}
        onChangeText={e => {
          setEmail({value: e, error: ''});
        }}
        value={email.value}
      />
      <TInput
        label="Password"
        value={password.value}
        error={password.error}
        onChangeText={e => {
          setpassword({value: e, error: ''});
        }}
        secureTextEntry
      />
      <Btn mode="contained" onPress={onLoginPress}>
        Login
      </Btn>
    </Background>
  );
};

export default Login;

const styles = StyleSheet.create({});
