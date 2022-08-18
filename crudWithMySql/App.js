import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    setData(result);
  };
  console.log(data);

  useEffect(() => {
    fetchData().catch(err => console.log(err));
  }, []);

  return (
    <View>
      <Text style={styles.mainHeading}>Students Details</Text>
      {data.map((item, index) => {
        return (
          <View key={item.id}>
            <Text>{index + 1} -- {item.name}</Text>
          </View>
        );
      })}
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
  mainHeading: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;
