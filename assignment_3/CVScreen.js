import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CVScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');

  const handleSaveCV = async () => {
    try {
      // Validate if required fields are filled
      if (!firstName || !lastName) {
        Alert.alert('Error', 'First Name and Last Name are required.');
        return;
      }

      // Save CV details to local storage
      const cvDetails = {
        firstName,
        lastName,
        phoneNumber,
        education,
        experience,
      };

      // Store in AsyncStorage
      await AsyncStorage.setItem('cvDetails', JSON.stringify(cvDetails));

      // Inform the user that the CV has been saved
      Alert.alert('Success', 'CV details saved successfully.');

      // You can also navigate to another screen or perform additional actions here
    } catch (error) {
      console.error('Error saving CV details:', error);
      Alert.alert('Error', 'Failed to save CV details. Please try again.');
    }
  };

  const handlePreview = () => {
    // Navigate to the 'ViewCV' screen
    navigation.navigate('ViewCV');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create CV</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Education"
        value={education}
        onChangeText={setEducation}
      />
      <TextInput
        style={styles.input}
        placeholder="Experience"
        value={experience}
        onChangeText={setExperience}
      />
      <Button title="Save CV" onPress={handleSaveCV} />
      <Button title="Preview" onPress={handlePreview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#3498db',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
});

export default CVScreen;



