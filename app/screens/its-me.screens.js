import React from 'react';
import { View, Text } from 'react-native';
import styles from './its-me.stylesheet';
import globalstyles from './globalstylesheet.stylesheet';

export default function ItsMeScreen(props) {
  const { navigation } = props;
  return (
    <View>
      <Text>Its Me Screen</Text>
    </View>
  )
}