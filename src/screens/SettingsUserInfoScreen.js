// Import React
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Components
import Navigation from "../components/shared/Navigation";
import TextInputField from "../components/shared/TextInputField.js"
import StaticInputFieldToggle from "../components/shared/StaticInputFieldToggle.js";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { colors } from "../constants/colorPalette.js";

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


    // Navigation
    const navigation = useNavigation();
    const route = useRoute();

    function handleTextInput ( key, text ) {
        setTextDataInput({...textInputData, [key]: text})
    }
    console.log(textInputData)

    function handleSaveUser () {
        /* 
        **************************************************
        UPDATE STORED USER DATA
        **************************************************
        */
        console.log('User Information Saved')
    }


    return (
        <SafeAreaView style={[styleMaster.parent, styles.container]}>
        <ScrollView style={[styleMaster.subParent]}>
            <View style={styles.headerContainer}>
            <Text style={[styleMaster.defaultFont, styles.headerText]}>User Info</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInputField 
                    name={"first_name"} 
                    placeholder={"First Name"} 
                    handleTextInput={handleTextInput}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInputField 
                    name={"last_name"} 
                    placeholder={"Last Name"} 
                    handleTextInput={handleTextInput}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInputField 
                    name={"phone"} 
                    placeholder={"Phone"} 
                    handleTextInput={handleTextInput}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInputField 
                    name={"email"} 
                    placeholder={"Email"} 
                    handleTextInput={handleTextInput}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInputField 
                    name={"address"} 
                    placeholder={"Address"} 
                    handleTextInput={handleTextInput}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInputField 
                    name={"city"} 
                    placeholder={"City"} 
                    handleTextInput={handleTextInput}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInputField 
                    name={"state"} 
                    placeholder={"State"} 
                    handleTextInput={handleTextInput}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInputField 
                    name={"zip"} 
                    placeholder={"Postal Code"} 
                    handleTextInput={handleTextInput}
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
        backgroundColor: "#eee",
        alignItems: "center",
        // justifyContent: "center",
    },
    headerContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        paddingBottom: scale_mod(4),
    },
    headerText: {
        fontSize: scale_V(32),
        fontFamily: "RalewayBold",
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
        paddingTop: scale_mod(8),
    }
});
