import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  const [count, setCount] = useState(20);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setMessage('Hello, world!');
    }
  }, [count]);

  const renderContent = () => {
    if (count >= 6 && count <= 20) {
      return (
        <Image
          source={{ uri: 'https://i.imgur.com/llF5iyg.gif' }}
          style={styles.image}
        />
      );
    } else if (count <= 5 && count > 0) {
      return <Text style={styles.text}>Almost there!</Text>;
    } else {
      return <Text style={styles.text}>{message}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
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
