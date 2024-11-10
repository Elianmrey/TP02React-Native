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
    padding: 30,
    backgroundColor: '#ccc',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
   },
});
