import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskList({ tasks, onRemoveTask }) {
    return (
        <View style={styles.container}>
            {tasks.map((task, index) => (
                <View key={index} style={styles.taskContainer}>
                    <Text style={styles.taskText}>{task}</Text>
                    <TouchableOpacity onPress={() => onRemoveTask(index)} style={styles.deleteButton}>
                        <Text style={styles.deleteText}>Remover</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    taskText: {
        fontSize: 16,
    },
    deleteButton: {
        backgroundColor: '#ff4d4d',
        padding: 5,
        borderRadius: 5,
    },
    deleteText: {
        color: '#fff',
    },
});
