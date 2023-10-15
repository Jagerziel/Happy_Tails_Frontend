// Import React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Import Constants
import { colors } from '../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../data/functions/normalizeScaling.js';
import { styleMaster } from '../constants/stylesMaster.js';

// Components
import LoginScreenButton from '../components/shared/LoginScreenButton.js';

function LoginScreen(props) {
    function handlePress ( target ) {
        console.log(`${target} button pressed`)
    }
    return (
        <View style={[styleMaster.parent, styles.container]}>
            <View style={styles.subContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Welcome to Happy Tails</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <LoginScreenButton 
                        text={'Create an Account'} 
                        handlePress={() => handlePress('Create Account')}
                    />
                </View>
            </View>

        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        // borderWidth: 2,
        height: '100%',
        width: '100%',
    },
    headingContainer: {
        borderWidth: 2,
        paddingTop: scale_mod(84),
        paddingBottom: scale_mod(80),
    },
    heading: {
        fontFamily: 'RalewayBold',
        fontSize: scale_V(52),
        color: colors.black,
        textAlign: 'center',
    },
    buttonContainer: {
        borderWidth: 2,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    }
});
  