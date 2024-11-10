import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configurações do Aplicativo</Text>
            <Text style={styles.subtitle}>Futuramente</Text>
         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
        color: '#888',
        fontWeight: 'bold',
    },
});