import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CategoryList({ categories, onSelectCategory }) {
    return (
        <View style={styles.container}>
            {categories.map((category) => (
                <TouchableOpacity key={category} style={styles.button} onPress={() => onSelectCategory(category)}>
                    <Text style={styles.buttonText}>{category}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
