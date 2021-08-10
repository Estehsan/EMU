import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {theme} from '../../theme';

const Background = ({children}) => {
  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Background;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
