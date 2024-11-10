import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExperienceScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Experiência Profissional</Text>
            <Text style={styles.text}>Empresa: Tech Falcon Solutions</Text>
            <Text style={styles.text}>Cargo: Desenvolvedor</Text>
            <Text style={styles.text}>Desde: 2021</Text>
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
