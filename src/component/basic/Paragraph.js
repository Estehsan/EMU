import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme';

const Paragraph = props => {
  return <Text style={styles.TextAll} {...props} />;
};

export default Paragraph;

const styles = StyleSheet.create({
  TextAll: {
    fontFamily: 'SFUIText-Regular',
    lineHeight: 21,
    color: theme.colors.silver,
    fontWeight: '500',
    textAlign: 'center', // <-- the magic
  },
});
