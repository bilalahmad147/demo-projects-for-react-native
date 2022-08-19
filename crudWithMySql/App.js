import React, {useState, useEffect} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState();

  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const result = await response.json();
  //   setData(result);
  // };
  // console.log(data);

  // useEffect(() => {
  //   fetchData().catch(err => console.log(err));
  // }, []);

  return (
    <ScrollView>
      <View>
        <Text style={styles.mainHeading}>Employ Details</Text>
      </View>
      <View style={styles.formInput}>
        <TextInput
        style={styles.inputStyle}
          placeholder="Enter name.."
          onChangeText={newText => setName(newText)}
        />
        <TextInput
        style={styles.inputStyle}
          placeholder="Enter email.."
          onChangeText={newText => setEmail(newText)}
        />
        <TextInput
        style={styles.inputStyle}
          placeholder="Enter contact.."
          onChangeText={newText => setContact(newText)}
        />
        <Button title='save'>Save</Button>
      </View>
      <View>
        <Button title='show'>Show Details</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    padding: 20,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 15,
  },
  formInput: {
    alignContent: 'center',
    padding: 10,
  },
  inputStyle: {
    margin: 10,
  }
});

export default App;
