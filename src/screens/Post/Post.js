import React from 'react';
import {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Video from 'react-native-video';
import Heading from './../../component/basic/Heading';
import Paragraph from './../../component/basic/Paragraph';
import LParagraph from './../../component/basic/LParagaph';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Avatar} from 'react-native-paper';

const Post = props => {
  const {post} = props;
  const [pause, setPause] = useState(false);

  const onPause = () => {
    setPause(!pause);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPause}>
        <View>
          <Video
            style={styles.Video}
            resizeMode="cover"
            repeat={true}
            paused={pause}
            source={{
              uri: post.videoUri,
            }}
          />

          <View style={styles.Footer}>
            <View style={styles.Details}>
              <View style={styles.lDetails}>
                <View style={styles.hot}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '500',
                      fontSize: 15,
                    }}>
                    Hot
                  </Text>
                </View>
                {/* <Heading>@{post.user.username}</Heading> */}
                <LParagraph>#shooting #building #sniper</LParagraph>
                <LParagraph>{post.description}</LParagraph>
              </View>
              <View style={styles.rDetails}>
                <Avatar.Image
                  size={50}
                  source={{
                    uri: post.user.imageUri,
                  }}
                />
              </View>
            </View>
            <View style={styles.ButtonContainer}>
              <View style={styles.ThreeIcons}>
                <LParagraph> {post.comments} Comments</LParagraph>
                <Fontisto name="share-a" size={40} color="#fff" />

                <Text style={styles.CommentText}>Comment</Text>
              </View>
              <View style={styles.ThreeIcons}>
                <LParagraph> {post.shares} Shares </LParagraph>
                <Fontisto name="share-a" size={40} color="#fff" />
                <Text style={styles.CommentText}>Share</Text>
              </View>
              <View style={styles.ThreeIcons}>
                <LParagraph> {post.claws} Claws</LParagraph>
                <Icon name="comments" size={40} color="#fff" />
                <Text style={styles.CommentText}>Claw</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Post;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: '100%',
    flex: 1,
  },
  Video: {position: 'absolute', top: 0, bottom: 0, right: 0, left: 0},
  Footer: {
    height: Dimensions.get('window').height,
    paddingBottom: 80,
    justifyContent: 'flex-end',
    padding: 10,
  },
  Details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ButtonContainer: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
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
  CommentText: {
    color: '#fff',
    fontFamily: 'SFUIText-Bold',
    fontSize: 13,
  },
  ThreeIcons: {
    alignItems: 'center',
  },
});
