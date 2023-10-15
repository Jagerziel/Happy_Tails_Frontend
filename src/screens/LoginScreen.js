// Import React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Import Constants
import { colors } from '../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../data/functions/normalizeScaling.js';
import { styleMaster } from '../constants/stylesMaster.js';

function LoginScreen(props) {
    function handlePress ( target ) {
        console.log(`${target} button pressed`)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to Happy Tails</Text>
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
    heading: {
        fontFamily: 'RalewayBold',
        fontSize: scale_V(52),
        color: colors.black
    },
    button: {

    }
});
  