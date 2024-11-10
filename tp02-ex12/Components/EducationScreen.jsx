import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EducationScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formação Acadêmica</Text>
            <Text style={styles.text}>Curso: Engenharia da Computação</Text>
            <Text style={styles.text}>Instituição: Instituto Infnet</Text>
            <Text style={styles.text}>Ano de Conclusão: 2028</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
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
