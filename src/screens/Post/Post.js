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
import Heading from './../../component/basic/Heading';
import Paragraph from './../../component/basic/Paragraph';
import LParagraph from './../../component/basic/LParagaph';
import Icons from 'react-native-vector-icons/FontAwesome';
import {Avatar} from 'react-native-paper';

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

      <View style={styles.Footer}>
        <View style={styles.Details}>
          <View style={styles.lDetails}>
            <View style={styles.hot}>
              <Text style={{color: 'white', fontWeight: '500', fontSize: 15}}>
                Hot
              </Text>
            </View>
            <Heading>@nageenamahi</Heading>
            <LParagraph>#shooting #building #sniper</LParagraph>
            <LParagraph>Jump (Remix)</LParagraph>
          </View>
          <View style={styles.rDetails}>
            <Avatar.Image
              size={50}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg',
              }}
            />
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <View style={styles.Comment}>
            <Text stle={stles.CommentText}>Claw</Text>
            <Icon name="comments" size={22} />
          </View>
          <View style={styles.Share}>
            <Text stle={stles.CommentText}>Claw</Text>
          </View>
          <View style={styles.Claw}>
            <Text stle={stles.CommentText}>Claw</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Post;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: '100%',
  },
  Video: {position: 'absolute', top: 0, bottom: 0, right: 0, left: 0},
  Footer: {height: '100%', justifyContent: 'flex-end', padding: 10},
  Details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  lDetails: {},
  rDetails: {},
  hot: {
    backgroundColor: 'red',
    width: 40,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 4,
  },
});
