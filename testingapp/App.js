import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f669c',
  },
  heading: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 30,
    textAlign: 'center'
  },
});

export default App;
