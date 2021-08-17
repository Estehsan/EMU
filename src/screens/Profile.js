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
import H2 from './../component/basic/H2';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Avatar} from 'react-native-paper';
import ProfileInfo from '../component/ProfileInfo';
import Info from './TabBar/Info';
import Feed from './TabBar/Feed';
import {color} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

// Top Tab
const Bar = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Bar.Navigator
      tabBarLabel={{color: '#fff'}}
      tabBarIndicator={{color: '#fff'}}
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarIndicatorStyle: {backgroundColor: '#fff'},
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Bar.Screen name="Video" component={Feed} />

      <Bar.Screen name="Shares" component={Info} />
    </Bar.Navigator>
  );
}

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
      <Feed />
    </View>
  );
};
// Content of Profile Top is here
const title = () => {
  return <ProfileInfo />;
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
