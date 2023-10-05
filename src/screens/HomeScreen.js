import React from 'react';
import { View , Text , StyleSheet } from 'react-native';

import Navigation from '../components/Navigation';

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text>This is the home screen</Text>
            <Navigation />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  