import { View, Text, StyleSheet } from 'react-native';

export default function LanguageScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Idiomas</Text>
            <Text style={styles.text}>Português: Nativo</Text>
            <Text style={styles.text}>Inglês: Avançado</Text>
            <Text style={styles.text}>Espanhol: Intermediário</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'orange',
    },
    text: {
        color: '#FFF',
    }
});
