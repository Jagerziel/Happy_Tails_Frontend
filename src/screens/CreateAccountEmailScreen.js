// Import React
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text,  View } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Constants
import { colors } from '../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../data/functions/normalizeScaling.js';
import { styleMaster } from '../constants/stylesMaster.js';

// Components
import LoginScreenButton from '../components/shared/LoginScreenButton.js';
import TextInput from '../components/shared/TextInput.js';

function CreateAccountEmailScreen(props) {
    const [ textInput, setTextInput ] = useState("")

    // Navigation
    const navigation = useNavigation()
    const route = useRoute()

    function handlePress ( target ) {
        console.log(`${target} button pressed`)
    }

    function handleSkip () {
        navigation.navigate("CreateAccountScreen")
    }

    return (
        <View style={[styleMaster.parent, styles.container]}>
            <View style={styles.subContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Create an account</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginScreenButton 
                        text={'Create an account'} 
                        handlePress={() => handlePress('Create an account')}
                    />
                    <View style={styles.padding}></View>
                    <View style={styles.skipContainer}>
                        <TouchableOpacity onPress={() => handleSkip()}>
                            <Text style={[styleMaster.defaultFont, styles.skipText]}>Return</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
}

export default CreateAccountEmailScreen;

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
        fontSize: scale_V(32),
        color: colors.black,
        textAlign: 'center',
    },
    formContainer: {
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
        color: colors.grayscale03
    }
});
  