import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import ProfilPage from './app/screens/ProfilPage';
import { StyleSheet, View } from 'react-native';
=======
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
>>>>>>> main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ProfilPage />
    </View>
  );
}
