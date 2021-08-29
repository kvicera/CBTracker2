import React from 'react';
import {StyleSheet} from 'react-native';

import {View, Text, Avatar} from 'react-native-ui-lib';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <View padding-20 style={styles.container}>
      <View style={styles.headerText}>
        <Text text60T>Welcome,</Text>
        <Text text60>Thorfinn <Ionicons name='shield-checkmark' size={16} color="#3d76f4" /></Text>
      </View>
      <View padding0>
        <Avatar
          containerStyle={styles.avatar}
          {...{
            // title: 'Initials',
            // label: 'TF',
            // badgeProps: {backgroundColor: 'red'},
            title: 'Smaller size, Badge ("offline")',
            size: 40,
            source: {
              uri: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=134&q=80',
            },
            // badgeProps: {size: 'pimpleBig', backgroundColor: Colors.dark50},
            //badgePosition: 'BOTTOM_LEFT'
          }}
          // onPress={() => this.onAvatarPress(example)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  avatar: {
    marginVertical: 3,
  },
  headerText: {
    flex: 1,
  },
});
