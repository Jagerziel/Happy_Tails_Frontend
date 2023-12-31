// Import React
import React, { useState, useMemo } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Dimensions } from "react-native";

// Import Components
import AppointmentDetailItemHome from "../components/screen/AppointmentDetailItemHome.js";
import AppointmentModalCancelHome from "../components/screen/AppointmentModalCancelHome.js";
import Navigation from "../components/shared/Navigation.js";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { colors } from "../constants/colorPalette.js";
import ReturnArrowSVG from "../assets/return_arrow_blue.svg"
import { sortByDateAndTime } from "../data/functions/sortData.js";

// State Management
import { useSelector, useDispatch } from "react-redux";

function HomeAppointmentDetailsScreen(props) {
    const [ showUpcomming, setShowUpcomming ] = useState(true)
    const [ modalController, setModalController ] = useState({
        cancelButton: false,
        cancelConfirmButton: false,
        rescheduleButtom: false,
    })

    // Navigation
    const navigation = useNavigation();
    const route = useRoute();

    // Dimensions
    const apptContainerHeight = Dimensions.get('window').height - scale_mod(315)
 
    // Redux 
    const dispatch = useDispatch(); // useDispatch
    const petData = useSelector((state) => state.petData.data);
    const appointmentData = useSelector((state) => state.appointmentData.data); // Retrieve Appointment data

    // Shortened Information to pass as props to get Pet Names tied to Appointments and Vaccinations
    const petIDs = useMemo(() => {
        const ids = {}
        for (let i = 0; i < petData.length; i++) {
            ids[petData[i]["_id"]] = [petData[i]["name"], petData[i]["type"]] 
        }
        return ids
    }, [petData])
    // console.log(petIDs)
    // Sort Data - useMemo used to avoid sorting on every render
    const upcommingAppts = useMemo(() => {
        return sortByDateAndTime([...appointmentData], "after")
    }, [appointmentData])

    const pastAppts = useMemo(() => {
        return sortByDateAndTime([...appointmentData], "before")
    }, [appointmentData])

    const allAppts = useMemo(() => {
        return sortByDateAndTime([...appointmentData], "all")
    }, [appointmentData])
    // console.log(upcommingAppts)
    // console.log(pastAppts)

    const itemSeparator = () => <View style={{ marginVertical: scale_mod(16) }} />; // Gap for Flatlist

    function handleReturnToPrev () {
        navigation.navigate("HomeScreen")
    }

    function handleCancelAppt () {
        console.log("Appointment Cancelled Button Pressed")
        setModalController({...modalController, "cancelButton": true})
        /*  
        REMOVE DATA FROM DB AND TO REDUX.  RESET USESTATE.  NAVIGATE HOME.
        */
    }
  
    function handleRescheduleAppt () {
        console.log("Appointment Reschedule Button Pressed")
        /*  
        UPDATE DATA IN DB AND REDUX.  RESET USESTATE.  NAVIGATE HOME.
        */
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
                                }]}>{`Upcomming`}</Text>
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
                                }]}>{`Past`}</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View style={[styles.appointmentsContainer, { maxHeight: apptContainerHeight}]}>
                {
                    showUpcomming ?
                    <FlatList 
                        keyExtractor={(upcommingAppts) => upcommingAppts["_id"]} // Key
                        ItemSeparatorComponent={itemSeparator} // Gap between items
                        data={upcommingAppts} // Data
                        renderItem={(data) => <AppointmentDetailItemHome 
                            data={data} 
                            petIDs={petIDs}
                            handleCancelAppt={handleCancelAppt}
                            handleRescheduleAppt={handleRescheduleAppt}
                            modalController={modalController}
                            setModalController={setModalController}
                        />} // Component to be rendered
                        showsVerticalScrollIndicator = { false } // Removes Scrollbar
                        scrollEnabled={ true } // Enables Scrolling
                        vertical // Key to making flatlist scrollable
                    /> :
                    <FlatList 
                        keyExtractor={(pastAppts) => pastAppts["_id"]} // Key
                        ItemSeparatorComponent={itemSeparator} // Gap between items
                        data={pastAppts} // Data
                        renderItem={(data) => <AppointmentDetailItemHome 
                            data={data} 
                            petIDs={petIDs}
                            handleCancelAppt={handleCancelAppt}
                            handleRescheduleAppt={handleRescheduleAppt}
                            modalController={modalController}
                            setModalController={setModalController}
                        />} // Component to be rendered
                        showsVerticalScrollIndicator = { false } // Removes Scrollbar
                        scrollEnabled={ true } // Enables Scrolling
                        vertical // Key to making flatlist scrollable
                    />
                }
                </View>
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
    // borderWidth: 2,
    // borderColor: 'green',
    width: '100%', // Responsive Design
    // width: scale_mod(344) // As per Figma
  },

});
