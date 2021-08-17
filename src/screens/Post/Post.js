import React from 'react';
import {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Video from 'react-native-video';

import Heading from './../../component/basic/Heading';
import Paragraph from './../../component/basic/Paragraph';
import LParagraph from './../../component/basic/LParagaph';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Avatar} from 'react-native-paper';
import ListOfComment from '../../component/ListOfComment';

const listOfComments = [
  {
    name: 'Monsta',
    claws: '112',
    date: '330',
    message: 'Oh , Hi',
    img: '',
  },
  {
    name: 'Summer',
    claws: '320',
    date: 'June 10, 2021',
    message: 'Hello',
    img: '',
  },
  {
    name: 'Nageena',
    claws: '40',
    date: 'Jan 10, 2021',

    message: 'There?',
    img: '',
  },
];

const Post = props => {
  const {post} = props;
  const [pause, setPause] = useState(false);

  const onPause = () => {
    setPause(!pause);
  };

  const sheetRef = React.createRef(null);
  const fall = new Animated.Value(2);

  const renderContent = () => (
    <View
      style={{
        backgroundColor: '#000',
        padding: 16,
        height: 700,
      }}>
      <View style={styles.renderTop}>
        <Heading></Heading>

        <Paragraph>124 Comment </Paragraph>
        <TouchableOpacity onPress={() => sheetRef.current.snapTo(1)}>
          <Heading>X</Heading>
        </TouchableOpacity>
      </View>
      <View style={styles.ListOfComments}>
        <FlatList
          data={listOfComments}
          renderItem={({item}) => <ListOfComment comments={item} />}
        />
      </View>
    </View>
  );

  return (
    <>
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
                  <Heading>@{post.user.username}</Heading>
                  <LParagraph style={{color: '#fff'}}>
                    #shooting #building #sniper
                  </LParagraph>
                  <LParagraph style={{color: '#fff'}}>
                    <Image
                      source={require('./../../assets/images/claw.png')}
                      style={{height: 10, width: 10}}
                    />
                    {post.description}
                  </LParagraph>
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
                  <Image
                    source={require('./../../assets/images/comment.png')}
                    style={{height: 50, marginVertical: 8, width: 50}}
                    resizeMode="contain"
                  />

                  <Text style={styles.CommentText}>Comment</Text>
                </View>
                <TouchableOpacity
                  onPress={() => sheetRef.current.snapTo(0)}
                  style={styles.ThreeIcons}>
                  <LParagraph> {post.shares} Shares </LParagraph>
                  <Image
                    source={require('./../../assets/images/share.png')}
                    style={{height: 50, marginVertical: 8, width: 50}}
                    resizeMode="contain"
                  />
                  <Text style={styles.CommentText}>Share</Text>
                </TouchableOpacity>
                <View style={styles.ThreeIcons}>
                  <LParagraph> {post.claws} Claws</LParagraph>
                  <Image
                    source={require('./../../assets/images/claw.png')}
                    style={{height: 45, marginVertical: 8, width: 45}}
                    resizeMode="contain"
                  />
                  <Text style={styles.CommentText}>Claw</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <BottomSheet
          ref={sheetRef}
          snapPoints={[330, 0]}
          initialSnap={1}
          enabledBottomClamp={true}
          callbackNode={fall}
          enabledGestureInteraction={true}
          borderRadius={10}
          renderContent={renderContent}
        />
      </View>
    </>
  );
};
export default Post;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: '100%',
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
    marginVertical: 15,
  },
  renderTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
