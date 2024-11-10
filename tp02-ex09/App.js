import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Home';
import DetailsScreen from './Screens/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Postagens' }}
        />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: 'Detalhes da Postagem' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
