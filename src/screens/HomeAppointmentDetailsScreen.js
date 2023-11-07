// Import React
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Components
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { colors } from "../constants/colorPalette.js";
import ReturnArrowSVG from "../assets/return_arrow_blue.svg"

function HomeAppointmentDetailsScreen(props) {
    // Navigation
    const navigation = useNavigation();
    const route = useRoute();

    function handleReturnToPrev () {
        navigation.navigate("HomeScreen")
    }
    
    return (
        <SafeAreaView style={[styleMaster.parent, styles.container]}>
            <ScrollView style={[styleMaster.subParent]}>
                <Text>Home Appointment Details Screen</Text>
            
            </ScrollView>
            <Navigation />
        </SafeAreaView>
    );
}

export default HomeAppointmentDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
    // alignItems: "center",
    // justifyContent: "center",
  },

});
