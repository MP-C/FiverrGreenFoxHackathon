import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainPage from './app/screens/MainPage';

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
