import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import AddContact from './Components/AddContact/AddContact';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.mainHeading}>Employs List</Text>
      </View>
      <Home />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    padding: 20,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 15,
  },
});

export default App;
