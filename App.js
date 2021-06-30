import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

