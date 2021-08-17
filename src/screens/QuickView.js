import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Heading from './../component/basic/Heading';

import Paragraph from './../component/basic/Paragraph';
import H3 from './../component/basic/H3';
import H2 from './../component/basic/H2';

const data1 = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1597938430467-c7a5f65c24f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1599747920141-e7e5901de37e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=299&q=80',
  },
];

const QuickView = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Slider}>
        <FlatList
          data={data1}
          snapToAlignment={'start'}
          horizontal
          snapToInterval={Dimensions.get('window').width}
          showsHorizontalScrollIndicator={true}
          decelerationRate={'fast'}
          renderItem={({item}) => (
            <Image
              resizeMode="cover"
              source={{uri: item.img}}
              style={{
                height: '100%',
                width: Dimensions.get('window').width,
                borderBottomWidth: 30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}
            />
          )}
        />
      </View>
      <View style={styles.Content}>
        <Avatar.Image
          size={70}
          style={{
            backgroundColor: '#4DE8F4',
            justifyContent: 'center',
            alignContent: 'center',
            marginVertical: 14,
            height: 72,
            width: 72,
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
          }}
        />
        <Heading>@NAGEENSHAH</Heading>
        <Paragraph style={{color: '#fff'}}>Twitch @asds</Paragraph>
        <View style={styles.Btn}>
          <H2 style={{color: '#fff'}}>PS5 🟢</H2>
        </View>
      </View>
    </View>
  );
};

export default QuickView;

const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#000', opacity: 0.9},
  Slider: {
    flex: 2,
    backgroundColor: '#000',
    opacity: 0.9,
    width: Dimensions.get('window').width,
  },
  Content: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.9,
    alignItems: 'center',
    padding: 15,
  },
  Btn: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#9F9F9F',
  },
});
