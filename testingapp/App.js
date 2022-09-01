import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  let names = ['bilal', 'zubair', 'talha', 'ali', 'bil'];
  let shortListed = [];
  let rejected = [];
  for (let value of names) {
    if (value.length > 4) {
      shortListed.push(value);
    } else {
      rejected.push(value);
    }
  }

  console.log(shortListed);
  console.log(rejected);

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
    textAlign: 'center',
  },
});

export default App;
