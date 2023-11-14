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
    return (
        <View>
            <Text>EC Screen</Text>
        </View>
    );
}

export default SettingsECScreen;

const styles = StyleSheet.create({
    
})