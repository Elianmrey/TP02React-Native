import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PersonalInfoScreen() {
    return (
        <View style={styles.container}>
            <Image  style={styles.avatar} source={require('../assets/avatar.png')} />
            <Text style={styles.title}>Informações Pessoais</Text>
            <Text  style={styles.text}>Nome: Elian M. Reyes</Text>
            <Text style={styles.text}>Idade: 31 anos</Text>
            <Text style={styles.text}>Profissão: Desenvolvedor</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'orange',
    },
    text: {
        fontSize: 18,
        margin: 10, 
        color: 'white'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20
    }
});
