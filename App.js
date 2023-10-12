// React Native
import { 
  StyleSheet, 
  Text,
  View, 
} from 'react-native';
import React, { useState } from 'react';
// Screens
import AboutUsScreen from './src/screens/AboutUsScreen.js';
import BookingScreen from './src/screens/BookingScreen.js';
import HomeScreen from './src/screens/HomeScreen.js'
import MyPetsScreen from './src/screens/MyPetsScreen.js';
import LoginScreen from './src/screens/LoginScreen.js'
import UpdatePetScreen from './src/screens/UpdatePetScreen.js'
import UserProfileScreen from './src/screens/UserProfileScreen.js'
import SettingsScreen from './src/screens/SettingsScreen.js';
import VaccinationScreen from './src/screens/VaccinationScreen.js'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Fonts
const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='HomeScreen'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="MyPetsScreen" component={MyPetsScreen}/>
          <Stack.Screen name="BookingScreen" component={BookingScreen}/>
          <Stack.Screen name="AboutUsScreen" component={AboutUsScreen}/>
          <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="UpdatePetScreen" component={UpdatePetScreen}/>
          <Stack.Screen name="UserProfileScreen" component={UserProfileScreen}/>
          <Stack.Screen name="VaccinationScreen" component={VaccinationScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
