import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Thumbnail = ({link}) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: '100%',
        }}
        source={{
          uri:
            link ||
            'https://play-lh.googleusercontent.com/Knw_hAyujH2PKqKtOEM5r8oJ_U-enugflHPpAMUr2T1R6Fp3AUPMYlLKm476BYwNt3Wl',
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default Thumbnail;

const styles = StyleSheet.create({
  container: {
    width: '30%',
    margin: 5,
    maxHeight: 110,
    backgroundColor: 'blue',
  },
});
