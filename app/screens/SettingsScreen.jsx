<<<<<<< HEAD
import React from 'react'
import { View, Text } from 'react-native'

export default function SettingsScreen() {
    return (
        <View>
            <Text>SettingsScreen</Text>
        </View>
    )
}
=======
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const SettingsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            You are on Setting Screen
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details')}>
            <Text>Open Detail Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}>
            <Text>Open Profile Screen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default SettingsScreen;
>>>>>>> 3f892994592535e8b2c9cfcde13951cf2af531b4
