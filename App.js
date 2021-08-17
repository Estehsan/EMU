// import 'react-native-gesture-handler';

import React, {Profiler, useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import {Button, Provider} from 'react-native-paper';
import {theme} from './src/theme';
import SplashScreen from 'react-native-splash-screen';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/SimpleLineIcons';
import IconB from 'react-native-vector-icons/EvilIcons';
import IconC from 'react-native-vector-icons/Feather';
import IconD from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GetStarted from './src/auth/GetStarted';
import Login from './src/auth/Login';
import LoginSocial from './src/auth/LoginSocial';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Messages from './src/screens/Messages';
import Discover from './src/screens/Discover';
import Upload from './src/screens/Upload';
import Info from './src/screens/TabBar/Info';
import Feed from './src/screens/TabBar/Feed';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Top Tab
const Bar = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Bar.Navigator>
      <Bar.Screen name="Info" component={Info} />
      <Bar.Screen name="Feed" component={Feed} />
    </Bar.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="GetStarted">
          <Stack.Screen name="Home" component={MyTabs} />
          <Stack.Screen name="Messages" component={MyTabs} />
          <Stack.Screen name="Discover" component={MyTabs} />
          <Stack.Screen name="Profile" component={MyTabs} />
          <Stack.Screen name="Upload" component={MyTabs} />

          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoginSocial" component={LoginSocial} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        activeTintColor: '#fff',
        tabStyle: {backgroundColor: '#000'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <IconA name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({color}) => (
            <IconB name="search" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarIcon: ({color}) => (
            <View style={{borderTopColor: 'red', borderTopWidth: 3}}>
              <Image
                source={require('./src/assets/images/Icon.png')}
                style={{height: 40, width: 40}}
                resizeMode="contain"
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({color}) => (
            <IconC name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <IconD name="ios-person-outline" size={25} color="#fff" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
