// Import React
import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
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

    // Navigation
    const navigation = useNavigation();
    const route = useRoute();

    function handleReturnToPrev () {
        navigation.navigate("SettingsScreen")
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
                    <ScrollView
                        keyboardShouldPersistTaps={"handled"}
                        showsVerticalScrollIndicator={false}
                    >




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
        flex: 1,
        backgroundColor: colors.grayscale06,
        alignItems: "center",
        // justifyContent: "center",
    },
    returnContainer: {
        alignSelf: 'flex-start',
        paddingBottom: scale_mod(12),
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