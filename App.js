import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  '`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.',
]); // Ignore log notification by message
LogBox.ignoreLogs([
  '`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.',
]); // Ignore log notification by message
// LogBox.ignoreAllLogs()//Ignore all log notifications

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {View} from 'react-native-ui-lib';

import HomeScreen from './src/components/HomeScreen';
import AboutScreen from './src/components/AboutScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function AddButtonScreen() {
  return <HomeScreen />;
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'heart-half' : 'heart-half-outline';
          } else if (route.name === 'Add') {
            iconName = 'add-circle';
          }

          if (route.name === 'Add') {
            return (
              <View style={styles.middleButton}>
                <Ionicons name={iconName} size={58} color="#3d76f4" />
              </View>
            );
          } else {
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        tabBarStyle: styles.bottomBar,
        headerShown: false,
        tabBarActiveTintColor: '#3d76f4',
        tabBarInactiveTintColor: '#677074',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Add"
        component={AddButtonScreen}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
            alert('Default behavior prevented');
          },
        }}
      />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    borderTopWidth: 0,
    shadowColor: '#ffffff',
    height: 60,
    backgroundColor: '#ffffff',
  },
  middleButton: {
    position: 'absolute',
    paddingBottom: 3,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
