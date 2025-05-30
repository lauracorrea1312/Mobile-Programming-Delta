import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  const [messageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageVisible(true);
    }, 15000);
  }, []);

  return (
    <View style={styles.container}>
      {messageVisible ? (
        <Text style={styles.text}>Hello, world!</Text>
      ) : (
        <Image
          source={{ uri: 'https://i.imgur.com/llF5iyg.gif' }}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: '#fff',
  },
  image: {
    width: 100,
    height: 100,
  },
});
