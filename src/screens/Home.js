import React from 'react';
import {
  Dimensions,
  FlatList,
  Flatlist,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Post from './Post/Post';

const data1 = [
  {
    id: '1',
    videoUri:
      'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
    user: {
      id: '4',
      username: 'nageen',
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg',
    },
    description: 'hahahah oh boy @borat',
    songName: 'NF - The search',
    songImage:
      'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
    claws: 123,
    comments: 23,
    shares: 44,
  },
  {
    id: '2',
    videoUri:
      'https://www.appsloveworld.com/wp-content/uploads/2018/10/640.mp4',
    user: {
      id: '3',
      username: 'Shah',
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg',
    },
    description: 'hahahah oh boy @borat',
    songName: 'NF - The search',
    songImage:
      'https://influencermarketinghub.com/wiki/wp-content/uploads/2020/08/1657369265111046_c5_720x720.jpeg',
    claws: 152,
    comments: 5213,
    shares: 12,
  },
  {
    id: '3',
    videoUri:
      'https://www.appsloveworld.com/wp-content/uploads/2018/10/Sample-Mp4-Videos.mp4',
    user: {
      id: '3',
      username: 'naga',
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg',
    },
    description: 'asdsad oh boy @borat',
    songName: 'NF - The Wwo',
    songImage:
      'https://influencermarketinghub.com/wiki/wp-content/uploads/2020/08/1657369265111046_c5_720x720.jpeg',
    claws: 152,
    comments: 5213,
    shares: 12,
  },
];

const Home = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <FlatList
        data={data1}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        decelerationRate={'fast'}
        snapToAlignment={'start'}
        disableIntervalMomentum
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={50}
        removeClippedSubviews={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {backgroundColor: '#000'},
});
