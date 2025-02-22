import { Text, StyleSheet } from "react-native";

export default function ValueCount({count}) {
  return (
    <Text style={styles.counterText}>Count: {count}</Text>
  );
}

const styles = StyleSheet.create({
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});