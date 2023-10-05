import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigation from '../components/Navigation';

function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <Text>This is the Login Screen</Text>
            <Navigation />
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  