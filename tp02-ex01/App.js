import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Item from './Components/Item';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Item item="Item A" />
      <Item item="Item B" />
      <Item item="Item C" />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: 50,
    border: '2px solid black',
    gap: 20,
    
  },
});
