import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch('http://192.168.18.83:5000/api/get');
    const result = await response.json();
    return setData(result);
  };
  console.log(data);
  console.log(data[0]);
  console.log(data[1]);
  useEffect(() => {
    fetchData().catch(err => console.log(err));
  }, []);


  const list = () => {
    return data.map((element) => {
      return (
        <View key={element.id} style={{margin: 10}}>
          <Text>{element.id}-   Name:  {element.name}</Text>
          <Text>Email:{element.email}   Contact:{element.contact}</Text>
        </View>
      );
    });
  };

  return (
    <ScrollView>
      {list()}
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

export default Home;
