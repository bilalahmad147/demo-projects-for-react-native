import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import TaskItem from './src/Components/TaskItem';
import TextInputField from './src/Components/TextInputField';

const App = () => {
  const [tasks, setTasks] = useState(['bilal', 'zubair']);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  const deleteTask = deleteIndex => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem
                index={index + 1}
                task={task}
                deleteTask={() => deleteTask(index)}
              />
            </View>
          );
        })}
      </ScrollView>
      <TextInputField addTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});

export default App;
