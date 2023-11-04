// Import React
import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";
import { timeSelectionAM, timeSelectionPM } from "../../../data/data/data.js";
import Calendar from '../../../assets/calendar.svg'
import Clock from '../../../assets/clock.svg'

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import LoginScreenButtonWhite from "../../shared/LoginScreenButtonWhite.js"
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";
import ConfirmApptModal from "./CancelApptModal.js";
import CancelApptModal from "./CancelApptModal.js";

function Booking03( { bookComponent, setBookComponent, bookingData, setBookingData, currPetSelectionNameType } ) {

  [ modalController, setModalController ] = useState({
    confirmModalOpen: false,
    cancelModalOpen: true,
  })

  function handleReturnToPrev () {
    setBookComponent({...bookComponent, "Booking02": true, "Booking03": false}) // navigate
  }

  function handleConfirmAppt () {
    console.log("Appointment Confirmed")
    /*  
    ADD DATA TO DB AND TO REDUX.  RESET USESTATE.  NAVIGATE HOME.
    */
  }
  function handleCancelAppt () {
    console.log("Appointment Cancelled")
    setModalController({...modalController, cancelModalOpen: true})
    /*
    RESET USESTATE.  NAVIGATE HOME.
    */

  }

  console.log(bookingData)

  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
      <View style={[styleMaster.subParent, styles.subContainer]}>
        <View style={styles.contentContainer}>
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
          <View style={styles.confirmationContainer}>
            <View>
              <View style={styles.titleContainer}>
                {
                  currPetSelectionNameType.type === "Dog" ?
                  <Image source={require(`../../../assets/temp_pet_pic_dog.jpg`)} style={styles.petImg}/> :

                  <Image source={require(`../../../assets/temp_pet_pic_cat.jpg`)} style={styles.petImg}/>
                }                
                <Text style={[styleMaster.defaultFont, styles.titleText]}>{currPetSelectionNameType.name}</Text>
              </View>
              <View style={styles.lineBreak}></View>
              <View style={styles.dateTimeContainer}>
                <View style={styles.dateTime}>
                  <Calendar height={scale_mod(27)} width={scale_mod(29)}/>
                  <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>
                    {`${bookingData.date.slice(5,7)}/${bookingData.date.slice(8,10)}/${bookingData.date.slice(0,4)}`}
                  </Text>
                </View>
                <View style={styles.dateTime}>
                  <Clock height={scale_mod(24)} width={scale_mod(24)}/>
                  <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{bookingData.time}</Text>
                </View>
              </View>
              <View style={[styles.detailsContainer]}>
                <Text 
                  style={[styleMaster.defaultFont, styles.detailsTitle]}
                  numberOfLines={1}
                >
                  Type of visit:
                </Text>
                <View style={styles.detailsContentContainer}>
                  <Text 
                    style={[styleMaster.defaultFont, styles.detailsContent]}
                    numberOfLines={1}
                  >
                    {bookingData.type}
                  </Text>
                </View>
              </View>
              <View style={[styles.detailsContainer]}>
                <Text 
                  style={[styleMaster.defaultFont, styles.detailsTitle]}
                  numberOfLines={1}
                >
                  Notes:
                </Text>
                <View style={styles.detailsContentContainer}>
                  <Text 
                    style={[styleMaster.defaultFont, styles.detailsContent]}
                    numberOfLines={3}
                  >
                    {bookingData.notes} 
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <LoginScreenButton
                text={"Confirm Appointment"}
                handlePress={() => handleConfirmAppt()}
                disabled={false}
              />
              <View style={styles.buttonSpacer}></View>
              <LoginScreenButtonWhite
                text={"Cancel"}
                handlePress={() => handleCancelAppt()}
              />
            </View>
          </View>
        </View>
      </View>
      <CancelApptModal
        modalController={modalController}
        setModalController={setModalController}
        modalName={"cancelModalOpen"}

      />
    </SafeAreaView>
  )
}

export default Booking03

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        flex: 1,
        backgroundColor: colors.grayscale06,
      },
      subContainer: {
        // borderWidth: 2,
        display: "flex",
        alignContent: "center",
      },
      contentContainer: {
        // borderWidth: 2,
        display: "flex",
        alignItems: "center",
      },
      headerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: scale_mod(65),
        width: '100%',
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
      confirmationContainer: {
        // borderWidth: 2,
        display: "flex",
        justifyContent: "space-between",
        width: scale_mod(344),
        aspectRatio: .72/1,
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingTop: scale_mod(24),
        paddingBottom: scale_mod(34),
      },
      titleContainer: {
        // borderWidth: 2,
        marginLeft: scale_mod(16),
        marginRight: scale_mod(16),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

      },
      petImg: {
        height: scale_mod(100),
        width: scale_mod(100),
        resizeMode: 'cover',
        borderRadius: scale_mod(7),
      },
      titleText: {
        fontSize: scale_V(26),
        fontFamily: "RobotoBold",
        paddingLeft: scale_mod(16),
      },
      lineBreak: {
        marginTop: scale_mod(16),
        marginBottom: scale_mod(18),
        marginLeft: scale_mod(16),
        marginRight: scale_mod(16),
        borderWidth: 0.5,
        borderColor: "#E4E4E4"
      },
      dateTimeContainer: {
        // borderWidth: 2,
        marginLeft: scale_mod(16),
        marginRight: scale_mod(16),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      dateTime: {
        // borderWidth: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

      },
      dateTimeText: {
        fontFamily: "RalewayRegular",
        fontSize: scale_V(15),
        includeFontPadding: false,
        alignSelf: "center",
        paddingLeft: scale_mod(8),
      },
      detailsContainer: {
        // borderWidth: 2,
        marginLeft: scale_mod(16),
        marginRight: scale_mod(16),
        display: "flex",
        flexDirection: "row",
        marginTop: scale_mod(24),
      },
      detailsTitle: {
        paddingRight: scale_mod(8),
        fontFamily: "RalewayBold",
        fontSize: scale_V(14),
        color: colors.grayscale02,
      },
      detailsContentContainer: {
        // borderWidth: 2,
        flex: 1,
        maxHeight: scale_mod(60),
      },
      detailsContent: {
        color: colors.grayscale02,
        fontFamily: "RobotoLight",
        fontSize: scale_mod(15),
      },
      buttonContainer: {
        alignSelf: "center",
      },
      buttonSpacer: {
        paddingTop: scale_mod(16),
      },
})