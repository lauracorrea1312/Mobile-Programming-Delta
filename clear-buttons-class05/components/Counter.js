import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(1);
  const minLimit = 1;
  const maxLimit = 10;

  const increment = () => {
    if (count < maxLimit) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > minLimit) {
      setCount(count - 1);
    }
  };

  const clear = () => {
      setCount(1);
  };

  const reset = () => {
    setCount(1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>

      <TouchableOpacity onLongPress={reset}>
        <Text
          style={
            styles.counter
          }
        >
          {count}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={increment}
        style={[styles.button, count === maxLimit && styles.disabledButton]}
        disabled={count === maxLimit}
      >
        <Text style={styles.buttonText}>
          {count === maxLimit ? "Limit Reached" : "Increase"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={decrease}
        style={[styles.button, count === minLimit && styles.disabledButton]}
        disabled={count === minLimit}
      >
        <Text style={styles.buttonText}>
          {count === minLimit ? "Limit Reached" : "Decrease"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={clear} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E2E",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F8F8F2",
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#89DDFF",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#89DDFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: "#89DDFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 10,
  },
  clearButton: {
    backgroundColor: "#89DDFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: "#89DDFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E1E2E",
  },
  clearButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E1E2E",
  },
  disabledButton: {
    backgroundColor: "#44475A",
    shadowColor: "transparent",
  },
});
