<<<<<<< HEAD
import React from 'react'
import { View, Text } from 'react-native'

export default function ProfileScreen() {
    return (
        <View>
            <Text>ProfileScreen</Text>
        </View>
    )
}
=======
import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const ProfileScreen = () => {
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
            You are on Profile Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
>>>>>>> 3f892994592535e8b2c9cfcde13951cf2af531b4
