import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigation from '../components/Navigation';

function LearningScreen(props) {
    return (
        <View style={styles.container}>
            <Text>This is the Learning Screen</Text>
            <Navigation />
        </View>
    );
}

export default LearningScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  