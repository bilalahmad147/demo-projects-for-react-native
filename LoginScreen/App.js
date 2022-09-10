import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import FacebookLogin from './src/Components/FacebookLogin';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.sectionContainer}>
        <Text>hello world</Text>
        <FacebookLogin />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
