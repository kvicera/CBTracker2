import React from 'react';
import {StyleSheet} from 'react-native';

import {View, Text} from 'react-native-ui-lib';
import {Colors, Card, CardProps, Button} from 'react-native-ui-lib';

const cardImage = require('../../assets/card_bg.png');

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Summary() {
  return (
    <View marginT-20 padding-20 style={styles.container}>
      <Card flex height={160} onPress={() => {}} useNative activeOpacity={1} activeScale={0.96}>
        {/* <Card.Section
          style={{backgroundColor: '#407aff'}}
          padding-20
          flex-3
          content={[
            {text: 'Wallet', text70: true, white: true, style: {paddingBottom: 5}},
            {text: '0.0450 SKILL', text50: true, white: true, style: {paddingBottom: 5}},
            {text: '0.1376 BNB', text50: true, white: true},
          ]}
          contentStyle={{alignItems: 'flex-start'}}
        /> */}
        {/* <Card.Section
          bg-white
          padding-20
          flex
          content={[{text: 'All site', text70: true, grey10: true}]}
          contentStyle={{alignItems: 'center', margin: 0, padding: 0}}
        /> */}
        <View padding-20 style={{borderRadius: 15, flex: 1, backgroundColor: '#407aff'}}>
          <View>
            <Text white style={{paddingBottom: 10}}>Assets</Text>
            <Text white={true} text60>0.0123 SKILL (28.21 PHP)</Text>
            <Text grey10 text90>0.0123 UNCLAIMED</Text>
            <Text></Text>
            <Text white={true} text70>0.1376 BNB (3307.95 PHP)</Text>
          </View>
          <View>

          </View>
        </View>
      </Card>
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
});
