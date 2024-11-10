import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Person from './Components/Person.jsx';
import { persons } from './Utils/utils.jsx'

export default function App() {
  
  return (
    <View style={styles.container}>
      {
        persons.map((person, index) =>
        <Person key={index} person={person}/>)
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#ccc',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
   },
});
