// Import React
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import TextInputField from "../../shared/TextInputField.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";
import DateTimePicker from "../../shared/DateTimePicker.js";

function Booking02( { bookComponent, setBookComponent, bookingData, setBookingData } ) {

    const [ disableNext, setDisableNext ] = useState(false)

    function handleReturnToPrev () {
        setBookComponent({...bookComponent, "Booking01": true, "Booking02": false}) // navigate
    }

    function handleNext () {
        setBookComponent({...bookComponent, "Booking02": false, "Booking03": true}) // navigate
    }

    function handleDate(date) {
      setBookingData({...bookingData, date: date})
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
                  <View style={styles.titleContainer}>
                      <Text style={[styleMaster.defaultFont, styles.titleText]}>What day works for you?</Text>
                  </View>
                  <View style={styles.datePickerContainer}>
                    <DateTimePicker 
                      name={"Select a day"}
                      handleDate={date => handleDate(date)}
                      maxDateToday={null}
                      minDateToday={new Date()}
                    />
                    </View>
                  <View style={styles.timePickerContainer}>
                    <View style={styles.timePickerHeaderContainer}>
                      <View>
                        <Text style={[styleMaster.defaultFont, styles.timePickerHeader]}>Time</Text>
                      </View>
                      <View>

                      </View>
                    </View>
                    <View>

                    </View>
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

export default Booking02

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        flex: 1,
        backgroundColor: colors.grayscale06,
      },
      subContainer: {
        // borderWidth: 2,
        display: "flex",
        justifyContent: 'space-between',
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
      titleContainer: {
        paddingBottom: scale_mod(40),
      },
      titleText: {
        fontSize: scale_V(26),
        fontFamily: "RalewayBold"
      },
      datePickerContainer: {
        // borderWidth: 2,
      },
      timePickerContainer: {
        borderWidth: 2,
        marginTop: scale_mod(36),
        paddingTop: scale_mod(16),
        paddingBottom: scale_mod(36),
        paddingLeft: scale_mod(16),
        paddingRight: scale_mod(16),
        width: scale_mod(343),
        aspectRatio: 1.11/1,
        backgroundColor: colors.white,
        borderRadius: 13,
      },
      timePickerHeaderContainer: {
        borderWidth: 2,
        width: `100%`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      timePickerHeader: {
        fontFamily: "RobotoBold",
        fontSize: scale_mod(20),
      },
      buttonContainer: {
        alignSelf: "center",
        paddingBottom: scale_mod(34),
      }
})