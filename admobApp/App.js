import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 32,
    backgroundColor: 'pink',
  },
});

export default App;
