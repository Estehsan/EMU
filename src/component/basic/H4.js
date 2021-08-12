import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme';

const H4 = props => {
  return <Text style={styles.TextAll} {...props} />;
};

export default H4;

const styles = StyleSheet.create({
  TextAll: {
    fontFamily: 'SFUIText-Semibold',
    lineHeight: 21,
    fontSize: 13,
    opacity: 0.5,
    color: '#fff',
    fontWeight: '200',
  },
});
