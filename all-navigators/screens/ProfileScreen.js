import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Profile Screen</Text>
      <Button title="Go To Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}
