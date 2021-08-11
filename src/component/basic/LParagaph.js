import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme';

const LParagraph = props => {
  return <Text style={styles.TextAll} {...props} />;
};

export default LParagraph;

const styles = StyleSheet.create({
  TextAll: {
    fontFamily: 'SFUIText-Light',
    lineHeight: 21,
    color: theme.colors.silver,
    fontWeight: '500',
    fontSize: 13,
  },
});
