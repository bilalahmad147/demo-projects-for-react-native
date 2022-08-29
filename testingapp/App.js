import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.mainView}>
        <Text>hello world</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'pink'
  },
});

export default App;
