import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewCVScreen = () => {
  const [cvDetails, setCVDetails] = useState(null);

  useEffect(() => {
    const getCVDetails = async () => {
      try {
        // Retrieve CV details from local storage
        const storedCVDetails = await AsyncStorage.getItem('cvDetails');

        if (storedCVDetails) {
          setCVDetails(JSON.parse(storedCVDetails));
        }
      } catch (error) {
        console.error('Error retrieving CV details:', error);
      }
    };

    getCVDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CV Preview</Text>
      {cvDetails ? (
        <View style={styles.cvContainer}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Text>{`Name: ${cvDetails.firstName} ${cvDetails.lastName}`}</Text>
          <Text>{`Phone Number: ${cvDetails.phoneNumber}`}</Text>

          <Text style={styles.sectionTitle}>Education</Text>
          <Text>{`Degree: ${cvDetails.education}`}</Text>

          <Text style={styles.sectionTitle}>Experience</Text>
          <Text>{`Job Title: ${cvDetails.experience}`}</Text>
        </View>
      ) : (
        <Text>No CV details available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#3498db',
  },
  cvContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default ViewCVScreen;



