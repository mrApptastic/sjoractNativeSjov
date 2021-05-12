import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  const [ text, setText ] = useState('')


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fars fede dillermandse</Text>
      <Text style={styles.subTitle}>Dette er bare en test</Text>
      <TextInput
        style={{height: 40, width: "80%"}}
        placeholder="When do you want to set status?" 
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
