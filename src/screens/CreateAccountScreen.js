// Import React
import React from 'react';
import { TouchableOpacity, StyleSheet, Text,  View } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Constants
import { colors } from '../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../data/functions/normalizeScaling.js';
import { styleMaster } from '../constants/stylesMaster.js';

// Components
import LoginScreenButton from '../components/shared/LoginScreenButton.js';

function CreateAccountScreen(props) {
    const navigation = useNavigation()
    const route = useRoute()

    function handlePress ( target ) {
        if (target === 'Create with Email') {
            navigation.navigate("CreateAccountEmailScreen")
        }
        console.log(`${target} button pressed`)
    }

    function handleSkip () {
        navigation.navigate("LoginScreen")
    }

    return (
        <View style={[styleMaster.parent, styles.container]}>
            <View style={styles.subContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Happy Tails</Text>
                </View>
                <View style={styles.buttonContainer}>
                <LoginScreenButton 
                        text={'Create with Google'} 
                        handlePress={() => handlePress('Create with Google')}
                    />
                    <View style={styles.padding}></View>
                    <LoginScreenButton 
                        text={'Create with Facebook'} 
                        handlePress={() => handlePress('Create with Facebook')}
                    />
                    <View style={styles.padding}></View>
                    <LoginScreenButton 
                        text={'Create with Apple'} 
                        handlePress={() => handlePress('Create with Apple')}
                    />
                    <View style={styles.padding}></View>
                    <LoginScreenButton 
                        text={'Create with Email'} 
                        handlePress={() => handlePress('Create with Email')}
                    />
                    <View style={styles.padding}></View>
                    <View style={styles.skipContainer}>
                        <TouchableOpacity onPress={() => handleSkip()}>
                            <Text style={[styleMaster.defaultFont, styles.skipText]}>Later</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
}

export default CreateAccountScreen;

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
        // borderWidth: 2,
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
        // borderWidth: 2,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    padding: {
        paddingTop: scale_mod(24),
    },
    skipContainer: {
        paddingTop: scale_mod(8),
        paddingBottom: scale_mod(8),
    },
    skipText: {

    }
});
  