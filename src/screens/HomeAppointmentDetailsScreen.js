// Import React
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Dimensions } from "react-native";

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

    // Dimensions
    const apptContainerHeight = Dimensions.get('window').height - scale_mod(315)

    function handleReturnToPrev () {
        navigation.navigate("HomeScreen")
    }




    function handleUpcommingToggle ( currVal ) {
        if ( currVal === true ) setShowUpcomming(true)
        if ( currVal === false ) setShowUpcomming(false)
    }
    
    return (
        <SafeAreaView style={[styleMaster.parent, styles.container]}>
            <View style={[styleMaster.subParent, styles.subContainer]}>
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
                <ScrollView style={[styles.appointmentsContainer, { maxHeight: apptContainerHeight}]}>

                </ScrollView>
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
  subContainer: {
    // borderWidth: 2,
    display: "flex",
    alignItems: "center",
    paddingLeft: scale_mod(16),
    paddingRight: scale_mod(16),
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
    paddingBottom: scale_mod(24),
    alignSelf: "flex-start",
  },
  headerText: {
    fontSize: scale_V(32),
    fontFamily: "RalewayBold",
  },
  appointmentToggleContainer: {
    // borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    paddingBottom: scale_mod(33)
  },
  appointmentToggleItem: {
    // borderWidth: 2,
    width: '50%',
    // width: scale_mod(172),
    borderBottomWidth: 3,
  },
  appointmentToggleItemText: {
    textAlign: 'center',
    fontSize: scale_V(18),
    fontFamily: "RalewayBold"
  },
  appointmentsContainer: {
    borderWidth: 2,
    width: '100%',
  },

});
