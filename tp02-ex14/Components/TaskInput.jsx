import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function TaskInput({ onAddTask }) {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nova tarefa"
                value={task}
                onChangeText={setTask}
                placeholderTextColor="#fff"
            />
            <Button title="Adicionar" onPress={handleAddTask} color="#4CAF50" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    input: {
        flex: 1,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        padding: 8,
        marginRight: 10,
        color: '#fff',
        
    },
 
});
