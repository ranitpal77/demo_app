import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import Chats from '../screens/Chats';

const Tab = createBottomTabNavigator();

const StartNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={Home} name="Home" />
      <Tab.Screen component={Profile} name="Profile" />
      <Tab.Screen component={Settings} name="Settings" />
      <Tab.Screen component={Chats} name="Chats" />
    </Tab.Navigator>
  );
};

export default startNavigation

const styles = StyleSheet.create({})