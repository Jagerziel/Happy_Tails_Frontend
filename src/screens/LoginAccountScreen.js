// Import React
import React, { useEffect, useState } from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text,  View } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Constants
import { colors } from '../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../data/functions/normalizeScaling.js';
import { styleMaster } from '../constants/stylesMaster.js';
import { checkAllFields } from '../data/functions/conditionalButton.js';

// Components
import LoginScreenButton from '../components/shared/LoginScreenButton.js';
import TextInputField from '../components/shared/TextInputField.js';
import ReturnArrow from '../components/shared/ReturnArrrow.js';

// Import API
import { getUserByEmail } from '../server/user.js';

// Load User Data
import { loadUser } from '../server/loadUser.js';

// State Management
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from '../store/reducers/userDataReducer.js';
import { updatePetData } from '../store/reducers/petDataReducer.js';
import { updateAppointmentData } from '../store/reducers/appointmentDataReducer.js';
import { updateVaccinationsData } from '../store/reducers/vaccinationsDataReducer.js';


function LoginAccountScreen(props) {
    const [ textInputData, setTextDataInput ] = useState({
        email: "",
        password: ""
    })
    
    const [ emailExistsError , setEmailExistsError ] = useState({
        email: "",
        password: "",
    })
    // React Redux
    const dispatch = useDispatch()

    // Conditional Button Disabling Awaiting Completion of All Inputs
    const [ disabled, setDisabled ] = useState(true)
    let textInputArr = Object.values(textInputData)

    useEffect(() => {
        setDisabled(checkAllFields(textInputArr))
    }, [textInputData])

    // Navigation
    const navigation = useNavigation() 
    const route = useRoute() 

    function handleTextInput ( key, text ) {
        setTextDataInput({...textInputData, [key]: text})
    }

    async function handleEmailLogin () {
        try {
            const emailData = await getUserByEmail(textInputData.email)
            if (emailData[0].exists === false) {
                setEmailExistsError({
                    email: "Email does not exist", 
                    password: ""}
                )
                setDisabled(true)
            } 
            if (emailData[0].exists === true) {
                if (emailData[1].password !== textInputData.password) {
                    setEmailExistsError({
                        email: "", 
                        password: "Password Incorrect"}
                    )
                    setDisabled(true)
                } else {
                    /* 
                    **************************************************
                    LOAD ALL USER DATA
                    **************************************************
                    */
                    // console.log(emailData[1]["_id"])
                    // Load User Data
                    const userData = await loadUser(emailData[1]["_id"])
                    // console.log(userData)

                    // Store Data - Redux
                    dispatch(updateUserData(userData.user))
                    dispatch(updatePetData(userData.pet))
                    dispatch(updateVaccinationsData(userData.vaccinations))
                    dispatch(updateAppointmentData(userData.appointment))
                    navigation.navigate("HomeScreen")
                }
            }
        } catch (error) {
            Alert.alert(`Error!`,`An error has occurred.  Please try again later.`)
            console.log(error)
        }
    }

    function handlePress ( target ) {
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
                    <Text style={styles.heading}>Log In</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TextInputField 
                        placeholder={'Email'}
                        handleTextInput={handleTextInput}
                        name={"email"}
                    />
                    <View style={styles.paddingWithError}>
                        <Text style={[styleMaster.errorText]}>
                            {emailExistsError.email}
                        </Text>
                    </View>
                    <TextInputField 
                        placeholder={'Password'}
                        handleTextInput={handleTextInput}
                        name={"password"}
                        passwordField={true}
                    />
                    <View style={styles.passwordContainer}>
                        <View style={[styles.paddingWithError, { width: scale_mod(130)}]}>
                            <Text style={[styleMaster.errorText]}>
                                {emailExistsError.password}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => handlePress('Forgot Password')}>
                            <Text style={[styleMaster.defaultFont, styles.forgotPassword]}>Forgot your Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <LoginScreenButton 
                        text={'Log In'} 
                        handlePress={() => handleEmailLogin()}
                        disabled={disabled}
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
        // borderWidth: 2,
        paddingBottom: scale_mod(24),
    },
    paddingWithError: {
        // borderWidth: 2,
        width: scale_mod(328),
        paddingBottom: scale_mod(8),
        textAlign: 'left',
    },
    divider: {
        borderWidth: 0.5,
        borderColor: colors.grayscale03,
        width: scale_mod(328),
    },
    passwordContainer: {
        // borderWidth: 2,
        width: scale_mod(328),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: "space-between"
    },
    forgotPasswordContainer: {
        // borderWidth: 2,
        display: 'flex',
        // paddingRight: scale_mod(17),
        height: scale_mod(27),
        
    },
    forgotPassword: {
        // borderWidth: 2,
        color: colors.grayscale03,
        fontSize: scale_V(13),
        includeFontPadding: false,
    },
});
  