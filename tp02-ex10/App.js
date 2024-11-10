import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './Screens/ProductList';
import Cart from './Screens/Cart';


const Stack = createStackNavigator();

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList">
          {(props) => <ProductList {...props} addToCart={addToCart} />}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {(props) => <Cart {...props} cart={cart} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
