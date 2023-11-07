// Import React
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Components
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { colors } from "../constants/colorPalette.js";
import ReturnArrowSVG from "../assets/return_arrow_blue.svg"

function HomeAppointmentDetailsScreen(props) {
    const [ showUpcomming, setShowUpcomming ] = useState(true)



    // Navigation
    const navigation = useNavigation();
    const route = useRoute();

    function handleReturnToPrev () {
        navigation.navigate("HomeScreen")
    }

    function handleUpcommingToggle ( currVal ) {
        if ( currVal === true ) setShowUpcomming(true)
        if ( currVal === false ) setShowUpcomming(false)
    }
    
    return (
        <SafeAreaView style={[styleMaster.parent, styles.container]}>
            <View style={[styleMaster.subParent]}>
            <View style={styles.returnContainer}>
                <TouchableOpacity onPress={() => handleReturnToPrev()}>
                    <ReturnArrowSVG />
                </TouchableOpacity>
            </View>
            <View style={styles.headerContainer}>
              <Text style={[styleMaster.defaultFont, styles.headerText]}>Appointments</Text>
            </View>
            <View style={styles.appointmentToggleContainer}>
                <View style={[styles.appointmentToggleItem, {
                        borderBottomColor: showUpcomming ? colors.primary : colors.grayscale02
                    }]}
                >
                    <TouchableWithoutFeedback 
                        onPress={() => handleUpcommingToggle(true)} 
                        disabled={showUpcomming}
                    >
                            <Text style={[styleMaster.defaultFont, styles.appointmentToggleItemText, {
                                color: showUpcomming ? colors.primary : colors.grayscale02
                            }]}>Upcomming</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={[styles.appointmentToggleItem, {
                        borderBottomColor: !showUpcomming ? colors.primary : colors.grayscale02
                    }]}
                >
                    <TouchableWithoutFeedback 
                        onPress={() => handleUpcommingToggle(false)}
                        disabled={!showUpcomming}
                    >
                            <Text style={[styleMaster.defaultFont, styles.appointmentToggleItemText, {
                                color: !showUpcomming ? colors.primary : colors.grayscale02
                            }]}>Past</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            
            
            <Text>Home Appointment Details Screen</Text>
            
            </View>
            <Navigation />
        </SafeAreaView>
    );
}

export default HomeAppointmentDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
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
    fontSize: scale_V(32),
    fontFamily: "RalewayBold",
  },
  appointmentToggleContainer: {
    // borderWidth: 2,
    display: "flex",
    flexDirection: "row",
  },
  appointmentToggleItem: {
    // borderWidth: 2,
    width: '50%',
    borderBottomWidth: 3,
  },
  appointmentToggleItemText: {
    textAlign: 'center',
  },

});
