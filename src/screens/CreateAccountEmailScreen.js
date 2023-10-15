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

function CreateAccountEmailScreen(props) {
    const [ textInputData, setTextDataInput ] = useState({
        fName: "",
        lName: "",
        email: "",
        password: ""
    })

    // Navigation
    const navigation = useNavigation()
    const route = useRoute()

    function handleCreateUser ( target ) {
        navigation.navigate("HomeScreen")
        console.log(`${target} button pressed`)
    }

    function handleTextInput (key, text) {
        setTextDataInput({...textInputData, [key]: text})
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
                    <TextInputField 
                        placeholder={'First Name'}
                        handleTextInput={handleTextInput}
                        name={"fName"}
                    />
                    <View style={styles.padding}></View>
                    <TextInputField 
                        placeholder={'Last Name'}
                        handleTextInput={handleTextInput}
                        name={"lName"}
                    />
                    <View style={styles.padding}></View>
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
                    <View style={styles.padding}></View>
                    <LoginScreenButton 
                        text={'Create an account'} 
                        handlePress={() => handleCreateUser(`${textInputData.fName} ${textInputData.lName} created as a user`)}
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
  