// Import React
import React, { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";


// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import TextInputField from "../../shared/TextInputField.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";
import SymptomsItem from "./SymptomsItem.js";

function Booking01( { bookComponent, setBookComponent, bookingData, setBookingData, symptoms, setSymptoms } ) {

    const [ disableNext, setDisableNext ] = useState(false)

    console.log(symptoms)

    function handleReturnToPrev () {
        setBookComponent({...bookComponent, "BookingMain": true, "Booking01": false}) // navigate
    }

    function handleNext () {
        setBookComponent({...bookComponent, "Booking01": false, "Booking02": true}) // navigate
    }

    return (
        <SafeAreaView style={[styles.container, styleMaster.parent]}>
            <View style={[styleMaster.subParent, styles.subContainer]}>
                <View>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity  
                            style={styles.returnContainer} 
                            onPress={() => handleReturnToPrev()}
                        >
                            <ReturnArrowSVG />
                        </TouchableOpacity>
                        <Text style={[styleMaster.defaultFont, styles.headerText]}>
                            Booking Appointment
                        </Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={[styleMaster.defaultFont, styles.titleText]}>How can we help?</Text>
                    </View>
                    <View style={styles.symptomsParentContainer}>
                        <FlatList
                            keyExtractor={(symptoms) => symptoms.idx} // Key
                            data={symptoms} // Data
                            renderItem={(data) => <SymptomsItem data={data} symptoms={symptoms} setSymptoms={setSymptoms}/>} // Component to be rendered
                            contentContainerStyle={styles.symptomsContainer}
                            numColumns={3}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <LoginScreenButton
                    text={"Next"}
                    handlePress={() => handleNext()}
                    disabled={disableNext}
                    />
                </View>
            </View>
        </SafeAreaView>
    )

    
}

export default Booking01

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        flex: 1,
        backgroundColor: colors.grayscale06,
      },
      subContainer: {
        display: "flex",
        justifyContent: 'space-between'
      },
      headerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: scale_mod(65),
      },
      returnContainer: {
        // borderWidth: 2,
        width: scale_mod(20)
      },
      headerText: {
        width: '100%',
        includeFontPadding: false,
        textAlign: "center",
        textAlign: "center",
        paddingRight: scale_mod(20), //Offsets space taken by return arrow
        fontFamily: "RalewayBold",
        fontSize: scale_V(17),
      },
      titleContainer: {
        paddingBottom: scale_mod(40),
      },
      titleText: {
        fontSize: scale_V(26),
        fontFamily: "RalewayBold"
      },
      symptomsParentContainer: {
        width: '100%',
        display: "flex",
      },
      symptomsContainer: {
        borderWidth: 2,
        flexDirection: 'column', 
        
      },
      buttonContainer: {
        alignSelf: "center",
        paddingBottom: scale_mod(34),
      }
})