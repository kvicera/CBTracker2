import * as React from 'react';
//import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {View, TextField, Button, Text} from 'react-native-ui-lib';

import BasicListSample from './rnuilib_test/BasicListSample'

function HomeScreen({navigation}) {
  return (
    <View flex paddingH-25 paddingT-120>
      <Text blue50 text20>
        Welcome
      </Text>
      <TextField text50 placeholder="username" dark10 />
      <TextField text50 placeholder="password" secureTextEntry dark10 />
      <View marginT-100 center>
        <Button text70 white background-orange30 label="Login" />
        <Button link text70 orange30 label="Sign Up" marginT-20 />
      </View>
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <BasicListSample />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}