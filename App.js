import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { StyleSheet, View } from 'react-native';
=======
<<<<<<< HEAD
import ProfilPage from './app/screens/ProfilPage';
import { StyleSheet, View } from 'react-native';
=======
import { StyleSheet, Text, View } from 'react-native';
>>>>>>> 3f892994592535e8b2c9cfcde13951cf2af531b4

import MainPage from './app/screens/MainPage';
import { AppProvider } from './app/AppProvider';

import Navbar from './app/Navbar';

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <MainPage />
      </View>
    </AppProvider>
  );
}
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 3f892994592535e8b2c9cfcde13951cf2af531b4

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

