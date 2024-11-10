import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LanguageScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Idiomas</Text>
            <Text style={styles.text}>Português: Avançado</Text>
            <Text style={styles.text}   >Inglês: Intermediário</Text>
            <Text style={styles.text}>Espanhol: Nativo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'orange',
    },
    text: {
        fontSize: 18,
        marginBottom: 5,
        color: '#FFF',
    }
});
