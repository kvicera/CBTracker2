import {LogBox} from 'react-native'
LogBox.ignoreLogs([
  '`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.',
]) // Ignore log notification by message
LogBox.ignoreLogs([
  '`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.',
]) // Ignore log notification by message
// LogBox.ignoreAllLogs()//Ignore all log notifications

import * as React from 'react'
//import {Button, View} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'

import {View, TextField, Button, Text} from 'react-native-ui-lib'

import BasicListSample from './rnuilib_test/BasicListSample'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

function AddButtonScreen({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      // Prevent default behavior
      e.preventDefault();

      alert('Default behavior prevented');
      // Do something manually
      // ...
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>asd</Text>
    </View>
  )
}
function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  )
}
function NotificationsScreen({navigation}) {
  return <BasicListSample />
}

const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName=' '
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'About') {
            iconName = focused ? 'heart-half' : 'heart-half-outline'
          } else if (route.name === ' ') {
            iconName = 'add-circle'
          }

          if (route.name === ' ') {
            // You can return any component that you like here!
            return(
            <View style={styles.middleButton}>
              <Ionicons name={iconName} size={58} color='#3d76f4' />
            </View>)
          } else {
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
          }
        },
        tabBarStyle: {
          height: 60
        },
        tabBarActiveTintColor: '#3d76f4',
        tabBarInactiveTintColor: '#677074',
      })}>
      <Tab.Screen name='Home' component={SettingsScreen} />
      <Tab.Screen name=' ' component={AddButtonScreen} />
      <Tab.Screen name='About' component={NotificationsScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  middleButton: {
    position: 'absolute',
    paddingBottom: 5,
    bottom: 0, // space from bottombar
    // height: 58,
    // width: 58,
    // borderRadius: 58,
    // backgroundColor: '#5a95ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
