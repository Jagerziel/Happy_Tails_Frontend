// React Native
import { 
  StyleSheet, 
  Text,
  View, 
} from 'react-native';
import React, { useState, useCallback } from 'react';
// Screens
import AboutUsScreen from './src/screens/AboutUsScreen.js';
import BookingScreen from './src/screens/BookingScreen.js';
import CreateAccountScreen from './src/screens/CreateAccountScreen.js';
import CreateAccountEmailScreen from './src/screens/CreateAccountEmailScreen.js';
import HomeScreen from './src/screens/HomeScreen.js'
import MyPetsScreen from './src/screens/MyPetsScreen.js';
import MyPetsDetailsScreen from './src/screens/MyPetsDetailsScreen.js';
import LoginScreen from './src/screens/LoginScreen.js'
import LoginAccountScreen from './src/screens/LoginAccountScreen.js';
import UpdatePetScreen from './src/screens/UpdatePetScreen.js'
import UserProfileScreen from './src/screens/UserProfileScreen.js'
import SettingsScreen from './src/screens/SettingsScreen.js';
import SettingsChangePINScreen from './src/screens/SettingsChangePINScreen.js';
import VaccinationScreen from './src/screens/VaccinationScreen.js'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Fonts
import { useFonts } from 'expo-font';
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'RalewayBlack': require('./src/assets/fonts/Raleway-Black.ttf'),
    'RalewayBlackItalic': require('./src/assets/fonts/Raleway-BlackItalic.ttf'),
    'RalewayBold': require('./src/assets/fonts/Raleway-Bold.ttf'),
    'RalewayExtraBold': require('./src/assets/fonts/Raleway-ExtraBold.ttf'),
    'RalewayExtraBoldItalic': require('./src/assets/fonts/Raleway-Regular.ttf'),
    'RalewayExtraLight': require('./src/assets/fonts/Raleway-ExtraLight.ttf'),
    'RalewayExtraLightItalic': require('./src/assets/fonts/Raleway-ExtraLightItalic.ttf'),
    'RalewayItalic': require('./src/assets/fonts/Raleway-Italic.ttf'),
    'RalewayLight': require('./src/assets/fonts/Raleway-Light.ttf'),
    'RalewayLightItalic': require('./src/assets/fonts/Raleway-LightItalic.ttf'),
    'RalewayMedium': require('./src/assets/fonts/Raleway-Medium.ttf'),
    'RalewayMediumItalic': require('./src/assets/fonts/Raleway-MediumItalic.ttf'),
    'RalewayRegular': require('./src/assets/fonts/Raleway-Regular.ttf'),
    'RalewaySemiBold': require('./src/assets/fonts/Raleway-SemiBold.ttf'),
    'RalewaySemiBoldItalic': require('./src/assets/fonts/Raleway-SemiBoldItalic.ttf'),
    'RalewayThin': require('./src/assets/fonts/Raleway-Thin.ttf'),
    'RalewayThinItalic': require('./src/assets/fonts/Raleway-ThinItalic.ttf'),
    'RobotoBold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'RobotoBlack': require('./src/assets/fonts/Roboto-Black.ttf'),
    'RobotoLight': require('./src/assets/fonts/Roboto-Light.ttf'),
    'RobotoRegular': require('./src/assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='LoginScreen'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="LoginAccountScreen" component={LoginAccountScreen}/>
          <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen}/>
          <Stack.Screen name="CreateAccountEmailScreen" component={CreateAccountEmailScreen}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="MyPetsScreen" component={MyPetsScreen}/>
          <Stack.Screen name="MyPetsDetailsScreen" component={MyPetsDetailsScreen}/>
          <Stack.Screen name="BookingScreen" component={BookingScreen}/>
          <Stack.Screen name="AboutUsScreen" component={AboutUsScreen}/>
          <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
          <Stack.Screen name="SettingsChangePINScreen" component={SettingsChangePINScreen}/>
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
