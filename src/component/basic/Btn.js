import React, {Component, StrictMode} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button as PaperBtn} from 'react-native-paper';
import {blue100} from 'react-native-paper/lib/typescript/styles/colors';
import {theme} from '../../theme';

const Btn = ({mode, ...props}) => {
  return (
    <PaperBtn
      icon="camera"
      style={styles.Button}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  );
};

export default Btn;

const styles = StyleSheet.create({
  Button: {
    paddingVertical: 10,
    paddingHorizontal: '10%',
    borderColor: '#fff',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },

  text: {
    fontFamily: 'SFUIText-Bold',
    fontSize: 15,
    color: '#fff',
  },
});
