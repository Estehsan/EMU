import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import {theme} from '../../theme';

const TInput = ({errorText, description, ...props}) => {
  return (
    <View style={styles.container}>
      <Input
        styles={styles.input}
        selectionColor={theme.colors.accent}
        underlineColor="transparent"
        outlineColor={theme.colors.backdrop}
        mode="outlined"
        {...props}
      />
      {description && !errorText ? <Text>{description}</Text> : null}
      {errorText ? <Text>{errorText}</Text> : null}
    </View>
  );
};

export default TInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  input : {
    borderRadius: 100,
  },
});
