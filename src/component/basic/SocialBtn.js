import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../theme';

const SocialBtn = ({children, text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Icon}>{children}</View>
      <View style={styles.Content}>
        <Text style={styles.text}>{text} </Text>
      </View>
    </View>
  );
};

export default SocialBtn;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    borderColor: theme.colors.tgrey,
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  Icon: {width: '10%'},
  Content: {width: '90%', alignItems: 'center'},
  text: {
    fontFamily: 'SFUIText-Bold',
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
  },
});
