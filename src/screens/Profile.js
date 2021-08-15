import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import Icon from 'react-native-vector-icons/Ionicons';
import IconB from 'react-native-vector-icons/AntDesign';
import Heading from './../component/basic/Heading';
import Paragraph from './../component/basic/Paragraph';

import {Avatar} from 'react-native-paper';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const renderNavBar = () => (
  <View style={styles.navContainer}>
    <View style={styles.statusBar} />
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
        <Icon name="filter" size={25} color="#fff" />
      </TouchableOpacity>
      <Heading>Profile</Heading>

      <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
        <IconB name="user" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>
);

const renderContent = () => {
  return (
    <View style={styles.body}>
      {Array.from(Array(30).keys()).map(i => (
        <View
          key={i}
          style={{padding: 15, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Item {i + 1}</Text>
        </View>
      ))}
    </View>
  );
};

const title = () => {
  return (
    <View style={styles.Top}>
      <View style={styles.ProfileContainer}>
        <Avatar.Image
          size={80}
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />
      </View>
      <Text style={{color: 'white', fontSize: 25}}>Profile </Text>
      <Text style={{color: 'white', fontSize: 25}}>Profile </Text>

      <Paragraph>saidsaihdashdsahduashduash </Paragraph>
    </View>
  );
};

const Profile = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ReactNativeParallaxHeader
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={500}
        extraScrollHeight={20}
        alwaysShowTitle={false}
        navbarColor="#000"
        titleStyle={styles.titleStyle}
        title={title()}
        backgroundImageScale={1.2}
        backgroundColor={'#000'}
        renderNavBar={renderNavBar}
        renderContent={renderContent}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        scrollViewProps={{
          onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
          onScrollEndDrag: () => console.log('onScrollEndDrag'),
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Top: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'red',
    width: Dimensions.get('window').width,
  },
  contentContainer: {
    flexGrow: 1,
    // backgroundColor: '#000',
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    // backgroundColor: '#000',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Profile;
