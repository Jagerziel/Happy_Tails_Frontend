// Import React
import React, { useState, useMemo } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Components
import Navigation from "../components/shared/Navigation.js";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { colors } from "../constants/colorPalette.js";
import ReturnArrowSVG from "../assets/return_arrow_blue.svg"
import { sortByDateAndTime } from "../data/functions/sortData.js";

// State Management
import { useSelector, useDispatch } from "react-redux";

function HomeVaccinationsViewAllScreen(props) {





    return (
        <SafeAreaView style={[styleMaster.parent, styles.container]}>
            <Text>TESTING</Text>
        </SafeAreaView>
    );
}

export default HomeVaccinationsViewAllScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grayscale06,
    }
})