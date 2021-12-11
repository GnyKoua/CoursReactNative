import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Damier from './damier';

export default function AppForReactNative() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      // backgroundColor: "red"
    }}>
      <View style={{
        flex: 0.33,
        // backgroundColor: "green"
      }}>
        <Damier />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
