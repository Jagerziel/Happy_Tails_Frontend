// Import React
import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Components
import Navigation from "../components/shared/Navigation";
import LoginScreenButton from "../components/shared/LoginScreenButton.js";
import TextInputField from "../components/shared/TextInputField.js"
import StaticInputFieldCustom from "../components/shared/StaticInputFieldCustom.js";
import { checkOneField } from "../data/functions/conditionalButton.js";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { colors } from "../constants/colorPalette.js";
import ReturnArrowSVG from "../assets/return_arrow_blue.svg"

// Import State Management
import { useSelector, useDispatch } from "react-redux";
import { updateUserData, resetUserData } from '../store/reducers/userDataReducer.js'
import { resetPetData } from "../store/reducers/petDataReducer.js";
import { resetAppointmentData } from "../store/reducers/appointmentDataReducer.js";
import { resetVaccinationsData } from "../store/reducers/vaccinationsDataReducer.js";

// Import API Call
import { updateUser, deleteUser } from "../server/user.js";
import { deletePetsByUser } from "../server/pet.js";
import { deleteAppointmentsByUser } from "../server/appointment.js";
import { deleteVaccinationsByUser } from "../server/vaccinations.js";

function SettingsUserInfoScreen(props) {
    const [ textInputData, setTextDataInput ] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        address: "",
        state: "",
        city: "",
        zip: "",
        ec_first_name: "",
        ec_last_name: "",
        ec_phone: "",
        image: "",
    })

    const [ editUserData, setEditUserData ] = useState({
        first_name: false,
        last_name: false,
        email: false,
        phone: false,
        password: false,
        address: false,
        state: false,
        city: false,
        zip: false,
        ec_first_name: false,
        ec_last_name: false,
        ec_phone: false,
        image: false,
    })

    // Track last selected field
    const [ lastSelected, setLastSelected ] = useState("")
    // Status of whether update button should be disabled
    const [ disabled, setDisabled ] = useState(true)
    // Toggle between delete button and update button
    const [ showDeleteButton, setShowDeleteButton ] = useState(true)

    // Redux 
    const dispatch = useDispatch(); // useDispatch
    const userData = useSelector((state) => state.userData.data)

    useEffect(() => {
        let textInputArr = Object.values(textInputData)
        setDisabled(checkOneField(textInputArr))
    }, [textInputData])

    // Navigation
    const navigation = useNavigation();
    const route = useRoute();

    function handleReturnToPrev () {
        navigation.navigate("SettingsScreen")
    }

    function handleEditData( key ) {
        if (lastSelected !== "") {
            setEditUserData({...editUserData, [lastSelected]: false, [key]: true})
        } else {
            setEditUserData({...editUserData, [key]: true})
        }
        setLastSelected(key)
        if (showDeleteButton === true) setShowDeleteButton(false)
    }

    // function displayInfo ( key, defaultInfo ) {
    //     if ( textInputData[key] !== "" ) return textInputData[key]
    //     if ( userData[key] !== "") return userData[key]
    //     if ( userData[key] === "") return defaultInfo
    //     return "First Name"
    // }

    function handleTextInput ( key, text ) {
        setTextDataInput({...textInputData, [key]: text})
    }

    async function handleSaveUser () {
        /* 
        **************************************************
        UPDATE STORED USER DATA
        **************************************************
        */
        // Update  
        let updatedData = ({
            first_name: textInputData.first_name === "" ? userData.first_name : textInputData.first_name,
            last_name: textInputData.last_name === "" ? userData.last_name : textInputData.last_name,
            email: textInputData.email === "" ? userData.email : textInputData.email,
            phone: textInputData.phone === "" ? userData.phone : textInputData.phone,
            address: textInputData.address === "" ? userData.address : textInputData.address,
            state: textInputData.state === "" ? userData.state : textInputData.state,
            city: textInputData.city === "" ? userData.city : textInputData.city,
            zip: textInputData.zip === "" ? userData.zip : textInputData.zip,
            image: userData.image,
            password: userData.password,
            ec_name: userData.ec_name, 
            ec_notes: userData.ec_notes, 
            ec_phone: userData.ec_phone, 
            ec_relationship: userData.ec_relationship,
        })
        const updatedUser = await updateUser(updatedData, userData["_id"])


        dispatch(updateUserData(updatedUser))

        setTextDataInput({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            password: "",
            address: "",
            state: "",
            city: "",
            zip: "",
            ec_first_name: "",
            ec_last_name: "",
            ec_phone: "",
            image: "",
        })

        setEditUserData({
            first_name: false,
            last_name: false,
            email: false,
            phone: false,
            password: false,
            address: false,
            state: false,
            city: false,
            zip: false,
            ec_first_name: false,
            ec_last_name: false,
            ec_phone: false,
            image: false,
        })

        setShowDeleteButton(true)

        console.log('User Information Saved')
    }

    function handleDeleteUserAlert () {
        Alert.alert('Are you sure you want to delete your account?', `Once deleted, you won't be able to log in`,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Request Cancelled'),
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => handleDeleteUser()
                }
            ]
        )
    }

    async function handleDeleteUser () {
        // Delete from database
        const userIDToRemove = userData["_id"]
        await deleteUser(userIDToRemove)
        await deletePetsByUser(userIDToRemove)
        await deleteAppointmentsByUser(userIDToRemove)
        await deleteVaccinationsByUser(userIDToRemove)
        // Clear Redux Store (State Management)
        dispatch(resetUserData());
        dispatch(resetPetData());
        dispatch(resetVaccinationsData());
        dispatch(resetAppointmentData());
        // Navigate to Home Screen
        navigation.navigate("LoginScreen")
    }


    return (
        <SafeAreaView style={[styleMaster.parent, styles.container]}>
            <TouchableWithoutFeedback
                style={[styleMaster.subParent]}
                onPress={() => setEditUserData({...editUserData, [lastSelected]: false})}
            >
                <View style={[styleMaster.subParent]}>
                    <View style={styles.returnContainer}>
                        <TouchableOpacity onPress={() => handleReturnToPrev()}>
                            <ReturnArrowSVG />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        keyboardShouldPersistTaps={"handled"}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.headerContainer}>
                            <Text style={[styleMaster.defaultFont, styles.headerText]}>
                                First Name
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            {
                                !editUserData.first_name ?    
                                <TouchableOpacity onPress={() => handleEditData('first_name')}>
                                    <StaticInputFieldCustom 
                                        name={textInputData['first_name'] === "" ? userData.first_name : textInputData['first_name']}
                                    />
                                </TouchableOpacity> :
                                <TextInputField 
                                    name={"first_name"} 
                                    placeholder={"First Name"} 
                                    handleTextInput={handleTextInput}
                                />
                            }
                        </View>
                        <View style={styles.headerContainer}>
                            <Text style={[styleMaster.defaultFont, styles.headerText]}>
                                Last Name
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            {
                                !editUserData.last_name ?    
                                <TouchableOpacity onPress={() => handleEditData('last_name')}>
                                    <StaticInputFieldCustom 
                                        name={textInputData['last_name'] === "" ? userData.last_name : textInputData['last_name']}
                                    />
                                </TouchableOpacity> :
                                <TextInputField 
                                    name={"last_name"} 
                                    placeholder={"Last Name"} 
                                    handleTextInput={handleTextInput}
                                />
                            }
                        </View>
                        <View style={styles.headerContainer}>
                            <Text style={[styleMaster.defaultFont, styles.headerText]}>
                                Phone
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            {
                                !editUserData.phone ?    
                                <TouchableOpacity onPress={() => handleEditData('phone')}>
                                    <StaticInputFieldCustom 
                                        name={textInputData['phone'] === "" ? userData.phone : textInputData['phone']}
                                    />
                                </TouchableOpacity> :
                                <TextInputField 
                                    name={"phone"} 
                                    placeholder={"Phone"} 
                                    handleTextInput={handleTextInput}
                                />
                            }
                        </View>
                        <View style={styles.headerContainer}>
                            <Text style={[styleMaster.defaultFont, styles.headerText]}>
                                Email
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            {
                                !editUserData.email ?    
                                <TouchableOpacity onPress={() => handleEditData('email')}>
                                    <StaticInputFieldCustom 
                                        name={textInputData['email'] === "" ? userData.email : textInputData['email']}
                                    />
                                </TouchableOpacity> :
                                <TextInputField 
                                    name={"email"} 
                                    placeholder={"Email"} 
                                    handleTextInput={handleTextInput}
                                />
                            }
                        </View>
                        <View style={styles.headerContainer}>
                            <Text style={[styleMaster.defaultFont, styles.headerText]}>
                                Address
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            {
                                !editUserData.address ?    
                                <TouchableOpacity onPress={() => handleEditData('address')}>
                                    <StaticInputFieldCustom 
                                        name={textInputData['address'] === "" ? userData.address : textInputData['address']}
                                    />
                                </TouchableOpacity> :
                                <TextInputField 
                                    name={"address"} 
                                    placeholder={"Address"} 
                                    handleTextInput={handleTextInput}
                                />
                            }
                        </View>
                        <View style={styles.headerContainer}>
                            <Text style={[styleMaster.defaultFont, styles.headerText]}>
                                City
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            {
                                !editUserData.city ?    
                                <TouchableOpacity onPress={() => handleEditData('city')}>
                                    <StaticInputFieldCustom 
                                        name={textInputData['city'] === "" ? userData.city : textInputData['city']}
                                    />
                                </TouchableOpacity> :
                                <TextInputField 
                                    name={"city"} 
                                    placeholder={"City"} 
                                    handleTextInput={handleTextInput}
                                />
                            }
                        </View>
                        <View style={styles.headerContainer}>
                            <Text style={[styleMaster.defaultFont, styles.headerText]}>
                                State
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            {
                                !editUserData.state ?    
                                <TouchableOpacity onPress={() => handleEditData('state')}>
                                    <StaticInputFieldCustom 
                                        name={textInputData['state'] === "" ? userData.state : textInputData['state']}
                                    />
                                </TouchableOpacity> :
                                <TextInputField 
                                    name={"state"} 
                                    placeholder={"State"} 
                                    handleTextInput={handleTextInput}
                                />
                            }
                        </View>
                        <View style={styles.headerContainer}>
                            <Text style={[styleMaster.defaultFont, styles.headerText]}>
                                Postal Code
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            {
                                !editUserData.zip ?    
                                <TouchableOpacity onPress={() => handleEditData('zip')}>
                                    <StaticInputFieldCustom 
                                        name={textInputData['zip'] === "" ? userData.zip : textInputData['zip']}
                                    />
                                </TouchableOpacity> :
                                <TextInputField 
                                    name={"zip"} 
                                    placeholder={"Postal Code"} 
                                    handleTextInput={handleTextInput}
                                />
                            }
                        </View>
                        <View style={[styles.inputContainer, {paddingTop: scale_mod(32)}]}>
                            { showDeleteButton ?
                                <TouchableOpacity 
                                    onPress={() => handleDeleteUserAlert()}

                                >
                                    <Text style={[styleMaster.defaultFont, styles.deleteText]}>Delete User</Text>
                                </TouchableOpacity> :
                                <LoginScreenButton 
                                    text={'Save'} 
                                    handlePress={() => {
                                        handleSaveUser()
                                    }}
                                    disabled={disabled}
                                />
                            }
                        </View>
                    </ScrollView>
                    <View style={{paddingBottom: scale_mod(80)}}></View>
                </View>
            </TouchableWithoutFeedback>
            <Navigation />
        </SafeAreaView>
    );
}

export default SettingsUserInfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grayscale06,
        alignItems: "center",
        // justifyContent: "center",
    },
    returnContainer: {
        alignSelf: 'flex-start',
        paddingBottom: scale_mod(12),
    },
    headerContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        paddingBottom: scale_mod(4),
    },
    headerText: {
        fontSize: scale_V(14),  
        paddingTop: scale_mod(8),
        paddingBottom: scale_mod(4),
        fontFamily: "RalewayBold",
        color: colors.grayscale02,
    },
    inputContainer: {
        width: scale_mod(343)
    },
    deleteText: {
        fontSize: scale_V(13),
        color: colors.error,
        textDecorationLine: 'underline',
    },
});
