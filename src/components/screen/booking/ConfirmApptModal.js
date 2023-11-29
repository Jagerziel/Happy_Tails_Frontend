// Import React
import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Constants
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling";
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { weekday } from "../../../data/data/data.js";

// Import Components
import LoginScreenButtonCustom from "../../shared/LoginScreenButtonCustom.js";
import LoginScreenButtonWhiteCustom from "../../shared/LoginScreenButtonWhiteCustom.js";

// API Call
import { createAppointment } from "../../../server/appointment.js";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { updateAppointmentData } from "../../../store/reducers/appointmentDataReducer.js";

function ConfirmApptModal( { 
    modalController, 
    setModalController, 
    modalName, 
    currPetSelectionNameType, 
    bookingData, 
    setBookingData,
    bookComponent,
    setBookComponent,
    resetSymptoms
}){
    // Handle Date Objects
    const reformatDate = `${bookingData.date.slice(5,7)}/${bookingData.date.slice(8, 10)}/${bookingData.date.slice(0,4)}`
    const dateForParse = bookingData.date.replaceAll("/","-")
    const convertDate = new Date(Date.parse(`${dateForParse}T00:00:00`))
    const dayOfWeek = weekday[convertDate.getDay()]

    // Navigation
    const navigation = useNavigation()
    const route = useRoute()

    // React Redux
    const dispatch = useDispatch()
    const prevAppointmentData = useSelector((state) => state.appointmentData.data)
    
    async function handleBooking ( key ) {
        const appointmentConfirmed = await {...bookingData, status: "Confirmed"}
        /*
        UPDATE DATABASE
        UPDATE REDUX
        */

        // Add new appointment to database
        const createNewAppointment = await createAppointment(appointmentConfirmed)
        
        // console.log(createNewAppointment)
        // Create shallow copy of current Appointment Data with newly created appointment
        let updatedAppointmentData = [...prevAppointmentData, createNewAppointment]
        // Store data in redux
        await dispatch(updateAppointmentData(updatedAppointmentData))

        // Resets Symptom selection so previous selections do not appear when booking another appointment
        resetSymptoms()

        // Reset Booking component useState data
        await setBookingData({
            type: "",
            date: "",
            time: "",
            status: "",
            notes: "",
            user_id: "",
            pet_id: "",
        })
        // Navigate
        if (key === "Home") {
            console.log('Home button clicked')
            navigation.navigate("HomeScreen")
        }
        
        if (key === "Book Another") {
            console.log('Book Another Appt button clicked')
            await setBookComponent({...bookComponent, BookingMain: true, Booking03: false})
        }
    }


    return (
        <Modal
                animationType="fade"
                transparent={true}
                visible={modalController[modalName]}
                onRequestClose={() => 
                    setModalController({...modalController, [modalName] : false})}
            >
            <View style={styles.modalPositioning}>
                <View style={styles.modal}>
                    <View style={styles.contentContainer}>
                        <View style={styles.textHolder}>
                            <Text style={[styleMaster.defaultFont, styles.title]}>
                                {`Appointment for ${currPetSelectionNameType.name} successfully booked! `}
                            </Text>
                        </View>
                        <View style={styles.textHolder}>
                            <Text style={[styleMaster.defaultFont, styles.contentLeft]}>See You:</Text>
                            <Text style={[styleMaster.defaultFont, styles.contentRight, { fontFamily: "RobotoRegular"}]}>
                                {`${dayOfWeek}, ${reformatDate} \nat ${bookingData.time}`}
                            </Text>
                        </View>
                        <View style={styles.textHolder}>
                            <Text style={[styleMaster.defaultFont, styles.contentLeft]}>Address:</Text>
                            <Text style={[styleMaster.defaultFont, styles.contentRight]}>
                                {`4140 Parker Rd. Allentown, \nNew Mexico 31134`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <LoginScreenButtonCustom
                            text={"Home"}
                            handlePress={() => handleBooking("Home")}
                            disabled={false}
                            width={297}
                        />
                        <View style={styles.buttonSpacer}></View>
                        <LoginScreenButtonWhiteCustom
                            text={"Book Another Appointment"}
                            handlePress={() => handleBooking("Book Another")}
                            width={297}
                        />
                    </View>
                </View>                 
            </View>
        </Modal>
    );
}

export default ConfirmApptModal;

const styles = StyleSheet.create({
    modalPositioning: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.20)',
    },
    modal : {
        // borderWidth: 2,
        backgroundColor: colors.white,
        width: scale_mod(328),
        aspectRatio: 0.816/1,
        paddingTop: scale_mod(16),
        paddingBottom: scale_mod(34),
        paddingLeft: scale_mod(16),
        paddingRight: scale_mod(16),
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    contentContainer: {
        // borderWidth: 2,
        flex: 1,
        width: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textHolder: {
        // borderWidth: 2,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        paddingTop: scale_mod(16),
    },
    title: {
        // borderWidth: 2,
        fontFamily: 'RalewayBold',
        fontSize: scale_V(21),
        paddingBottom: scale_mod(8),
        color: colors.darkBlue02,
        width: '100%',
        textAlign: "center",
    },
    contentLeft: {
        // borderWidth: 2,
        fontSize: scale_V(15),
        width: scale_mod(70),
        fontFamily: "RobotoLight",
    },
    contentRight: {
        // borderWidth: 2,
        fontSize: scale_V(15),
        flex: 1, 
        flexWrap: 'wrap',
        fontFamily: "RobotoLight",
        height: scale_mod(36),
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
    },
    buttonSpacer: {
        paddingTop: scale_mod(16),
    },








})