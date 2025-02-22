import { View } from 'react-native';
import BusinessCard from './components/BusinessCard.js';

export default function App() {
  return (
    <View>
      <BusinessCard text="Name: Laura Maria" />
      <BusinessCard text="Phone Number: (62)983452175" />
      <BusinessCard text="Email: lauramncorrea@gmail.com" />
    </View>
  );
}



