import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  return (
    <View>
      <Text>Welcome</Text>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{backgroundColor: '#abc123', padding: 10, margin: 10}}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{color: '#fff'}}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
