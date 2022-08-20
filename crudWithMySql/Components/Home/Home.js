import React, {useState, useEffect} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios.get('http://192.168.18.18:5000/api/get').then(response => {
      setData(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const list = () => {
    return data.map(element => {
      return (
        <View key={element.id} style={{margin: 10}}>
          <Text>
            {element.id}- Name: {element.name}
          </Text>
          <Text>
            Email:{element.email} Contact:{element.contact}
          </Text>
          <View style={styles.fixToText}>
            <Button
              title="Edit"
              onPress={() => Alert.alert('Left button pressed')}
            />
            <Button
              title="Details"
              onPress={() => Alert.alert('Right button pressed')}
            />
          </View>
        </View>
      );
    });
  };

  return <ScrollView>{list()}</ScrollView>;
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
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Home;
