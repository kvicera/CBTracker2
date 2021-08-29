import React from 'react';
import {StyleSheet} from 'react-native';

import {View, Text} from 'react-native-ui-lib';

import Header from './HomeScreen/Header';
import Summary from './HomeScreen/Summary';

import BasicListSample from '../../rnuilib_test/BasicListSample';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Header />
      </View>
      <View style={styles.bodyView}>
        <View style={{flex: 1}}><Summary /></View>
        <View style={{flex: 2}}>
          <BasicListSample style={{flex: 1}}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  bodyView: {
    flex: 1,
    width: '100%',
  },
  headerView: {
    // backgroundColor: 'red',
    width: '100%',
    height: 60,
    top: 0
  },
});
