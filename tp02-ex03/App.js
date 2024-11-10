import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Item from './Components/Item';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Item item="Item A" />
      <Item item="Item B" />
      <Item item="Item C" />
      <Item item="Item D" />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'center',
    marginTop: 50,
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    display:'flex',
  },
});
