import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Header />
      <View>
        <Text>Hello World</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
