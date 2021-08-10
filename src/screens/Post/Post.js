import React from 'react';
import {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Video from 'react-native-video';
const Post = () => {
  const [pause, setPause] = useState(false);

  const onPause = () => {
    setPause(!pause);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPause}>
        <Video
          style={styles.Video}
          resizeMode="cover"
          repeat={true}
          paused={pause}
          source={{
            uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
          }}
        />
      </TouchableWithoutFeedback>
      <Text>Post</Text>
    </View>
  );
};
export default Post;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Video: {position: 'absolute', top: 0, bottom: 0, right: 0, left: 0},
});
