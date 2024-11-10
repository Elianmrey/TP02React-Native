import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CategoryList from './Components/CategoryList';
import TaskList from './Components/TaskList';
import TaskInput from './Components/TaskInput';

export default function App() {
  const [categories] = useState(['Mercado', 'Farmácia', 'Estudos']);
  const [tasks, setTasks] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  const addTask = (task) => {
    if (selectedCategory) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [selectedCategory]: [...(prevTasks[selectedCategory] || []), task],
      }));
    }
  };

  const removeTask = (taskIndex) => {
    if (selectedCategory) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [selectedCategory]: prevTasks[selectedCategory].filter((_, index) => index !== taskIndex),
      }));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <CategoryList categories={categories} onSelectCategory={setSelectedCategory} />
      {selectedCategory && (
        <>
          <TaskList tasks={tasks[selectedCategory] || []} onRemoveTask={removeTask} />
          <TaskInput onAddTask={addTask} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
});
