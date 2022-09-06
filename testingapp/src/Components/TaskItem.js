import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
// import {MaterialIcons} from 'react-native-vector-icons';

const TaskItem = ({index, task, deleteTask}) => {
  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.task}>{task}</Text>
        <TouchableOpacity onPress={() => deleteTask()}>
          <Text style={styles.delete}>DEL</Text>
          {/* <MaterialIcons style={styles.delete} name="delete" size={18} color='#fff' /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  indexContainer: {
    backgroundColor: '#3E3364',
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  index: {
    color: '#fff',
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: '#3E3364',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
  },
  task: {
    color: '#fff',
    width: '90%',
    fontSize: 16,
  },
  delete: {
    marginRight: 10,
    color: 'white',
  },
});

export default TaskItem;
