import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Question({ question, options, onAnswer }) {
    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>{question}</Text>
            {options.map((option, index) => (
                <TouchableOpacity key={index} style={styles.optionButton} onPress={() => onAnswer(option)}>
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 16,
    },
    questionText: {
        fontSize: 20,
        marginBottom: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    optionButton: {
        backgroundColor: '#007bff',
        padding: 10,
        marginVertical: 8,
        width: '100%',
        borderRadius: 5,
    },
    optionText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});
