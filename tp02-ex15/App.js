import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemCard from './Components/ItemCard';
import AffinityScreen from './Components/AffinityScreen';

export default function App() {
  const items = ['The Matrix', 'Interstellar', 'Inception', 'The Dark Knight', 'Gladiator'];
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [userResponses, setUserResponses] = useState([]);
  const [showAffinity, setShowAffinity] = useState(false);

  const handleResponse = (response) => {
    setUserResponses([...userResponses, { item: items[currentItemIndex], response }]);
    const nextItemIndex = currentItemIndex + 1;
    if (nextItemIndex < items.length) {
      setCurrentItemIndex(nextItemIndex);
    } else {
      setShowAffinity(true);
    }
  };

  if (showAffinity) {
    return <AffinityScreen userResponses={userResponses} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gostou do item?</Text>
      <ItemCard item={items[currentItemIndex]} onResponse={handleResponse} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
