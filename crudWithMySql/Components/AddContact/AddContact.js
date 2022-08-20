import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function AddContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const saveDetails = e => {
    e.preventDefault();
    if (!name || !email || !contact) {
      alert('Please enter values');
    } else {
      alert('values added');
    }
    setName(''),
      setEmail(''),
      setContact(''),
      console.log('details saved', name, email, contact);
  };

  return (
    <ScrollView>
      <View>
        <Text style={styles.mainHeading}>add contact Details</Text>
      </View>
      <View style={styles.formInput}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter name.."
          value={name}
          onChangeText={newText => setName(newText)}
          defaultValue={name}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter email.."
          value={email}
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter contact.."
          onChangeText={newText => setContact(newText)}
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
