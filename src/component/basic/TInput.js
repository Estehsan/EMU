import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput as Input, TextInput} from 'react-native-paper';
import {theme} from '../../theme';
import Paragraph from './Paragraph';

const TInput = ({errorText, description, iconName, ...props}) => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        color="red"
        // underlineColor="transparent"
        left={<TextInput.Icon name={iconName} color={'#fff'} />}
        outlineColor={theme.colors.silver}
        underlineColor={theme.colors.silver}
        mode="outlined"
        selectionColor={theme.colors.silver}
        {...props}
      />
      {description && !errorText ? <Paragraph>{description}</Paragraph> : null}
      {errorText ? <Paragraph>{errorText}</Paragraph> : null}
    </View>
  );
};

export default TInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  input: {
    borderRadius: 100,
    fontSize: 50,
    color: '#fff',
    backgroundColor: theme.colors.primary,
  },
});
