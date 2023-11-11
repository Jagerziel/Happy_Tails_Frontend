// Import React
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
        ec_name: "",
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
        ec_name: false,
        ec_phone: false,
        image: false,
    })

    const [ lastSelected, setLastSelected ] = useState("")

    const [ disabled, setDisabled ] = useState(true)
    let textInputArr = Object.values(textInputData)

    useEffect(() => {
        setDisabled(checkOneField(textInputArr))
    }, [textInputData])

    // Navigation
    const navigation = useNavigation();
    const route = useRoute();

    function handleReturnToPrev () {
        navigation.navigate("SettingsScreen")
    }

    function handleEditData( field ) {
        console.log(editUserData)
        if (lastSelected !== "") {
            setEditUserData({...editUserData, [lastSelected]: false, [field]: true})
        } else {
            setEditUserData({...editUserData, [field]: true})
        }
        setLastSelected(field)
    }

    function handleTextInput ( key, text ) {
        setTextDataInput({...textInputData, [key]: text})
    }

    function handleSaveUser () {
        /* 
        **************************************************
        UPDATE STORED USER DATA
        **************************************************
        */
        console.log('User Information Saved')
        navigation.navigate("SettingsScreen")
    }

    return (
        <SafeAreaView style={[styleMaster.parent, styles.container]}>
            <ScrollView 
                style={[styleMaster.subParent]}
                keyboardShouldPersistTaps={"handled"}
            >
                <View style={styles.returnContainer}>
                    <TouchableOpacity onPress={() => handleReturnToPrev()}>
                        <ReturnArrowSVG />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={[styleMaster.defaultFont, styles.headerText]}>User Info</Text>
                </View>
                <View style={styles.inputContainer}>
                    {
                        !editUserData.first_name ?    
                        <TouchableOpacity onPress={() => handleEditData('first_name')}>
                            <StaticInputFieldCustom 
                                name={'Testing Static Input Field'}
                            />
                        </TouchableOpacity> :
                        <TextInputField 
                            name={"first_name"} 
                            placeholder={"First Name"} 
                            handleTextInput={handleTextInput}
                        />
                    }
                </View>

                <View style={[styles.inputContainer, {paddingTop: scale_mod(32)}]}>
                    <LoginScreenButton 
                        text={'Save'} 
                        handlePress={() => {
                            handleSaveUser()
                        }}
                        disabled={disabled}
                    />
                </View>
            
            </ScrollView>
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
    logoutText: {
        fontFamily: "RobotoLight",
        color: colors.black,
        paddingRight: scale_mod(7),
    },
    title: {
        fontSize: scale_V(21),
        fontFamily: "RalewayBold",
        paddingTop: scale_mod(28),
        paddingBottom: scale_mod(8),
    },
    inputContainer: {
        // paddingTop: scale_mod(8),
    }
});
