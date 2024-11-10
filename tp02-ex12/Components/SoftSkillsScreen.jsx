import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SoftSkillsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Soft Skills</Text>
            <Text style={styles.text}>Comunicação</Text>
            <Text style={styles.text}>Trabalho em Equipe</Text>
            <Text style={styles.text}>Resolução de Problemas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
