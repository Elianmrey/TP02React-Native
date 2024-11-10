import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }) {
    const { score } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.scoreText}>Pontuação Final: {score}</Text>
            <Button title="Reiniciar Quiz" onPress={() => navigation.navigate('Quiz')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    scoreText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
       
    },
});
