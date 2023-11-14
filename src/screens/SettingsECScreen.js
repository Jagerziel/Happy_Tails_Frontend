// Import React
import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
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
import { updateUserData } from '../store/reducers/userDataReducer.js'

// Import API Call
import { updateUser } from "../server/user.js";

function SettingsECScreen(props) {
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
        ec_relationship: "",
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
        ec_relationship: false,
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

    function handleTextInput ( key, text ) {
        setTextDataInput({...textInputData, [key]: text})
    }

    async function handleSaveEC () {
        /* 
        **************************************************
        UPDATE STORED USER DATA
        **************************************************
        */
        // Update  
        let updatedData = ({
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            phone: userData.phone,
            address: userData.address,
            state: userData.state,
            city: userData.city,
            zip: userData.zip,
            image: userData.image,
            password: userData.password,
            ec_first_name: textInputData.ec_first_name === "" ? userData.ec_first_name : textInputData.ec_first_name, 
            ec_last_name: textInputData.ec_last_name === "" ? userData.ec_last_name : textInputData.ec_last_name, 
            ec_relationship: textInputData.ec_relationship === "" ? userData.ec_relationship : textInputData.ec_relationship, 
            ec_phone: textInputData.ec_phone === "" ? userData.ec_phone : textInputData.ec_phone, 
            
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
            ec_relationship: "",
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
            ec_relationship: false,
            image: false,
        })

        setShowDeleteButton(true)

        console.log('Emergency Contact Information Saved')
    }

    function handleDeleteECAlert () {
        Alert.alert('Are you sure you want to delete Emergency Contact?', `The contact info can’t be restored once deleted`,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Request Cancelled'),
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => handleDeleteEC()
                }
            ]
        )
    }

    async function handleDeleteEC () {
        // Update  
        let updatedData = ({
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            phone: userData.phone,
            address: userData.address,
            state: userData.state,
            city: userData.city,
            zip: userData.zip,
            image: userData.image,
            password: userData.password,
            ec_first_name: "", 
            ec_last_name: "", 
            ec_relationship: "", 
            ec_phone: "", 
            
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
            ec_relationship: "",
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
            ec_relationship: false,
            image: false,
        })

        setShowDeleteButton(false)

        console.log('handleDeleteEC button pressed')
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
                    <View style={styles.titleContainer}>
                        <Text style={[styles.defaultFont, styles.titleText]}>
                            {'Emergency \nContact'}
                        </Text>
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
                                !editUserData.ec_first_name ?    
                                <TouchableOpacity onPress={() => handleEditData('ec_first_name')}>
                                    <StaticInputFieldCustom 
                                        name={textInputData['ec_first_name'] === "" ? userData.ec_first_name : textInputData['ec_first_name']}
                                    />
                                </TouchableOpacity> :
                                <TextInputField 
                                    name={"ec_first_name"} 
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
                                !editUserData.ec_last_name ?    
                                <TouchableOpacity onPress={() => handleEditData('ec_last_name')}>
                                    <StaticInputFieldCustom 
                                        name={textInputData['ec_last_name'] === "" ? userData.ec_last_name : textInputData['ec_last_name']}
                                    />
                                </TouchableOpacity> :
                                <TextInputField 
                                    name={"ec_last_name"} 
                                    placeholder={"Last Name"} 
                                    handleTextInput={handleTextInput}
                                />
                            }
                        </View>
                        <View style={styles.headerContainer}>
                            <Text style={[styleMaster.defaultFont, styles.headerText]}>
                                Relationship
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            {
                                !editUserData.ec_relationship ?    
                                <TouchableOpacity onPress={() => handleEditData('ec_relationship')}>
                                    <StaticInputFieldCustom 
                                        name={textInputData['ec_relationship'] === "" ? userData.ec_relationship : textInputData['ec_relationship']}
                                    />
                                </TouchableOpacity> :
                                <TextInputField 
                                    name={"ec_relationship"} 
                                    placeholder={"Relationship"} 
                                    handleTextInput={handleTextInput}
                                />
                            }
                        </View>
                        <View style={styles.headerContainer}>
                            <Text style={[styleMaster.defaultFont, styles.headerText]}>
                                Phone Number
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            {
                                !editUserData.ec_phone ?    
                                <TouchableOpacity onPress={() => handleEditData('ec_phone')}>
                                    <StaticInputFieldCustom 
                                        name={textInputData['ec_phone'] === "" ? userData.ec_phone : textInputData['ec_phone']}
                                    />
                                </TouchableOpacity> :
                                <TextInputField 
                                    name={"ec_phone"} 
                                    placeholder={"Phone Number"} 
                                    handleTextInput={handleTextInput}
                                />
                            }
                        </View>
                        <View style={[styles.inputContainer, {paddingTop: scale_mod(32)}]}>
                            { showDeleteButton ?
                                <TouchableOpacity 
                                    onPress={() => handleDeleteECAlert()}

                                >
                                    <Text style={[styleMaster.defaultFont, styles.deleteText]}>Delete EC</Text>
                                </TouchableOpacity> :
                                <LoginScreenButton 
                                    text={'Save'} 
                                    handlePress={() => {
                                        handleSaveEC()
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

export default SettingsECScreen;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        flex: 1,
        backgroundColor: colors.grayscale06,
        alignItems: "center",
    },
    returnContainer: {
        alignSelf: 'flex-start',
        paddingBottom: scale_mod(12),
    },
    titleContainer: {
        paddingBottom: scale_mod(32),
    },
    titleText: {
        fontFamily: 'RalewayBold',
        fontSize: scale_V(32),
        color: colors.darkBlue,
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
})