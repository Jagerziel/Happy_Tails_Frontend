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
import TextInputField from '../components/shared/TextInputField.js';
import ReturnArrow from '../components/shared/ReturnArrrow.js';

function LoginAccountScreen(props) {
    const [ textInputData, setTextDataInput ] = useState({
        email: "",
        password: ""
    })

    // Navigation
    const navigation = useNavigation() 
    const route = useRoute() 

    function handleTextInput ( key, text ) {
        setTextDataInput({...textInputData, [key]: text})
    }

    function handleEmailLogin () {
        navigation.navigate("HomeScreen")
        console.log(textInputData)
    }

    function handlePress ( target ) {
        console.log(`${target} button pressed`)
    }

    return (
        <View style={[styleMaster.parent, styles.container]}>
            <View style={styles.subContainer}>
                <View style={styles.skipContainer}>
                    <ReturnArrow 
                        navLink={"LoginScreen"}
                        height={21}
                        width={12}
                    />
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Log In</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TextInputField 
                        placeholder={'Email'}
                        handleTextInput={handleTextInput}
                        name={"email"}
                    />
                    <View style={styles.padding}></View>
                    <TextInputField 
                        placeholder={'Password'}
                        handleTextInput={handleTextInput}
                        name={"password"}
                    />
                    <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => handlePress('Forgot Password')}>
                        <Text style={[styleMaster.defaultFont, styles.forgotPassword]}>Forgot your Password?</Text>
                    </TouchableOpacity>
                    <LoginScreenButton 
                        text={'Log In'} 
                        handlePress={() => handleEmailLogin()}
                    />
                    <View style={styles.padding}></View>
                    <View style={styles.divider}></View>
                    <View style={styles.padding}></View>
                    <LoginScreenButton 
                        text={'Create with Google'} 
                        handlePress={() => handlePress('Continue with Google')}
                    />
                    <View style={styles.padding}></View>
                    <LoginScreenButton 
                        text={'Continue with Facebook'} 
                        handlePress={() => handlePress('Continue with Facebook')}
                    />
                    <View style={styles.padding}></View>
                    <LoginScreenButton 
                        text={'Continue with Apple'} 
                        handlePress={() => handlePress('Continue with Apple')}
                    />
                </View>
            </View>

        </View>
    );
}

export default LoginAccountScreen;

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
    buttonContainer: {
        // borderWidth: 2,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    padding: {
        paddingTop: scale_mod(24),
    },
    divider: {
        borderWidth: 0.5,
        borderColor: colors.grayscale03,
        width: scale_mod(328),
    },
    forgotPasswordContainer: {
        // borderWidth: 2,
        width: scale_mod(328),
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingRight: scale_mod(17),
        height: scale_mod(27),
        
    },
    forgotPassword: {
        color: colors.grayscale03,
        fontSize: scale_V(13),
    },
    skipContainer: {
        paddingLeft: scale_mod(15)
    }
});
  