import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, { Marker } from 'expo-map';
import * as Location from 'expo-location';

export default function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [comsatsAttockLocation, setComsatsAttockLocation] = useState({
    latitude: 33.7739,
    longitude: 72.8283,
  });

  useEffect(() => {
    // Request permission to access user's location
    const requestLocationPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }

        // Get user's current location
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      {userLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            ...userLocation,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Marker for user's location */}
          <Marker
            coordinate={userLocation}
            title="Your Location"
            description="This is where you are"
          />

          {/* Marker for COMSATS Attock */}
          <Marker
            coordinate={comsatsAttockLocation}
            title="COMSATS Attock"
            description="COMSATS Institute of Information Technology, Attock Campus"
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
