import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomePage(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 24, marginBottom: 10}}>Home Page</Text>
      <Button title="Details" onPress={() => navigation.navigate('Details', {message: 'Hello from Home Screen'})} />
    </View>
  );
}