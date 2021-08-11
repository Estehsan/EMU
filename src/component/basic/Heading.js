import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme';

const Heading = props => {
  return <Text style={styles.Title} {...props} />;
};

export default Heading;

const styles = StyleSheet.create({
  Title: {
    fontFamily: 'SFUIText-Bold',
    fontSize: 21,
    color: theme.colors.tblack,
    lineHeight: 21,
    fontWeight: '700',
    color: theme.colors.background,
    paddingVertical: 8,
  },
});
