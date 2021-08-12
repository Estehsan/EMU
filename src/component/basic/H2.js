import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme';

const H2 = props => {
  return <Text style={styles.Title} {...props} />;
};

export default H2;

const styles = StyleSheet.create({
  Title: {
    fontFamily: 'SFUIText-Bold',
    fontSize: 17,
    color: theme.colors.tblack,
    lineHeight: 21,
    fontWeight: '700',
    color: theme.colors.background,
    paddingVertical: 3,
    flexWrap: 'wrap',
  },
});
