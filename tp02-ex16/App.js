import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from './Components/FeedScreen';
import ProfileScreen from './Components/ProfileScreen';
import TravelPostScreen from './Components/TravelPostScreen';
import FriendsScreen from './Components/FriendsScreen';
import SettingsScreen from './Components/SettingsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function FeedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Post da Viagem" component={TravelPostScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Feed">
        <Drawer.Screen name="Feed" component={FeedNavigator} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
        <Drawer.Screen name="Amigos" component={FriendsScreen} />
        <Drawer.Screen name="Configurações" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
