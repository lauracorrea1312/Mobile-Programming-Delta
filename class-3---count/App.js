import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Counter from './components/Counter.js';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Counter count={count} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)} 
      >
        <Text style={styles.buttonText}>Increase (Long press to reset)</Text>
      </TouchableOpacity>
       <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count - 1)}
        onLongPress={() => setCount(0)} 
      >
        <Text style={styles.buttonText}>Decrease (Long press to reset)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});