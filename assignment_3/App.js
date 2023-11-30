import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/Screens/HomeScreen';
import LoginScreen from './components/Screens/LoginScreen';
import SignUpScreen from './components/Screens/SignUpScreen';
import CVScreen from './components/Screens/CVScreen';
import ViewCVScreen from './components/Screens/ViewCVScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="CV"
          component={CVScreen}
          options={{ title: 'Your CV' }}
        />
        <Stack.Screen
          name="ViewCV"
          component={ViewCVScreen}
          options={{ title: 'View CV' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;


