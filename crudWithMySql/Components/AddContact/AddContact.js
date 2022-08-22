import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

let AddContact = () => {
  const [name, setNewName] = useState('');
  const [email, setNewEmail] = useState('');
  const [contact, setNewContact] = useState('');

  const saveDetails = async e => {
    e.preventDefault();
    if (!name || !email || !contact) {
      alert('Please enter values');
    } else {
      axios
        .post('http://192.168.18.83:5000/api/post', {name, email, contact})
        .then(setNewName(''), setNewEmail(''), setNewContact(''));
    }
  };

  return (
    <ScrollView>
      <View>
        <Text style={styles.mainHeading}>Add contact Details</Text>
      </View>
      <View style={styles.formInput}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter name.."
          onChangeText={text => setNewName(text)}
          defaultValue={name}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter email.."
          onChangeText={text => setNewEmail(text)}
          defaultValue={email}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter contact.."
          onChangeText={text => setNewContact(text)}
          defaultValue={contact}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={saveDetails}>
          <Text>Save Details</Text>
        </TouchableOpacity>
      </View>
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
  formInput: {
    alignContent: 'center',
    padding: 10,
  },
  inputStyle: {
    margin: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#B7bdc1',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});

export default AddContact;
