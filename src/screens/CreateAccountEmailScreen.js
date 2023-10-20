// Import React
import React, { useState } from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Constants
import { colors } from '../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../data/functions/normalizeScaling.js';
import { styleMaster } from '../constants/stylesMaster.js';

// Components
import LoginScreenButton from '../components/shared/LoginScreenButton.js';
import TextInputField from '../components/shared/TextInputField.js';
import ReturnArrow from '../components/shared/ReturnArrrow.js';

function CreateAccountEmailScreen(props) {
    // Navigation
    const navigation = useNavigation()
    const route = useRoute()

    const [ textInputData, setTextDataInput ] = useState({
        fName: "",
        lName: "",
        email: "",
        password: ""
    })

    function handleCreateUser ( target ) {
        navigation.navigate("HomeScreen")
        console.log(`${target} button pressed`)
    }

    function handleTextInput (key, text) {
        setTextDataInput({...textInputData, [key]: text})
    }

    return (
        <View style={[styleMaster.parent, styles.container]}>
            <View style={styles.subContainer}>
                <View style={styles.returnContainer}>
                    <ReturnArrow 
                        navLink={"CreateAccountScreen"}
                        height={21}
                        width={12}
                    />
                </View>
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
    returnContainer: {
        paddingTop: scale_mod(23),
        paddingLeft: scale_mod(15),
    },
    headingContainer: {
        // borderWidth: 2,
        paddingTop: scale_mod(40),
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
});
  