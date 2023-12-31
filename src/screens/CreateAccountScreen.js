// Import React
import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Constants
import { colors } from '../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../data/functions/normalizeScaling.js';
import { styleMaster } from '../constants/stylesMaster.js';

// Components
import LoginScreenButton from '../components/shared/LoginScreenButton.js';
import ReturnArrow from '../components/shared/ReturnArrrow.js';

function CreateAccountScreen(props) {
    const navigation = useNavigation()
    const route = useRoute()

    function handlePress ( target ) {
        if (target === 'Create with Email') {
            navigation.navigate("CreateAccountEmailScreen")
        }
        console.log(`${target} button pressed`)
    }

    return (
        <View style={[styleMaster.parent, styles.container]}>
            <View style={styles.subContainer}>
                <View style={styles.returnContainer}>
                    <ReturnArrow 
                        navLink={"LoginScreen"}
                        height={21}
                        width={12}
                    />
                </View>
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
        backgroundColor: colors.grayscale06,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        // borderWidth: 2,
        height: '100%',
        width: '100%',
    },
    returnContainer: {
        paddingTop: scale_mod(23),
        paddingLeft: scale_mod(15)
    },
    headingContainer: {
        // borderWidth: 2,
        paddingTop: scale_mod(40),
        paddingBottom: scale_mod(80),
    },
    heading: {
        fontFamily: 'RalewayBold',
        fontSize: scale_V(48),
        color: colors.darkBlue02,
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
});
  