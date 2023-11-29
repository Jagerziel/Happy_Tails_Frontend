// Import React
import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { colors } from "../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling";

// Components
import Navigation from "../components/shared/Navigation";
import PetItemBooking from "../components/screen/PetItemBooking.js";
import LoginScreenButton from "../components/shared/LoginScreenButton.js";
import Booking01 from "../components/screen/booking/Booking01.js";
import Booking02 from "../components/screen/booking/Booking02.js";
import Booking03 from "../components/screen/booking/Booking03.js";

// Import Assets
import ReturnArrowSVG from "../assets/return_arrow_blue.svg"

// State Management
import { useSelector, useDispatch } from "react-redux";

function BookingScreen(props) {
  
  const [ bookComponent, setBookComponent ] = useState({
    BookingMain: true,
    Booking01: false,
    Booking02: false,
    Booking03: false,
  })

  const [ bookingData, setBookingData ] = useState({
    type: "",
    date: "",
    time: "",
    status: "",
    notes: "",
    user_id: "",
    pet_id: "",
  })

  const [ symptoms , setSymptoms ] = useState(
    [
      { idx: 0, name: "Vaccination", status: false },
      { idx: 1, name: "Skin", status: false },
      { idx: 2, name: "Vomiting", status: false },
      { idx: 3, name: "Heartworm/Flea/Tick", status: false },
      { idx: 4, name: "Eye", status: false },
      { idx: 5, name: "Ear", status: false },
      { idx: 6, name: "Limping", status: false },
      { idx: 7, name: "Diarrhea", status: false },
      { idx: 8, name: "Itching", status: false },
      { idx: 9, name: "Other", status: false }
    ]
  )

  const [ petSelected, setPetSelected ] = useState({})
  const [ currPetSelectionID, setCurrPetSelectionID ] = useState("")
  const [ currPetSelectionNameType, setCurrPetSelectionNameType ] = useState({})
  const [ disableNext, setDisableNext ] = useState(true)
  
  
  // React Redux
  const dispatch = useDispatch()
  const userDataID = useSelector((state) => state.userData.data["_id"])
  const petData = useSelector((state) => state.petData.data);
  const appointmentData = useSelector((state) => state.appointmentData.data);
  // console.log(appointmentData)
  
  // Navigation
  const navigation = useNavigation() 
  const route = useRoute() 
  
  useEffect(() => {
    for (let i = 0; i < petData.length; i++) {
      setPetSelected((prev) => {
        return (
          {...prev, [petData[i]["_id"]]: false}
        )
      })
    }
  }, [])

  const itemSeparator = () => <View style={{ marginVertical: scale_mod(12) }} />; // Gap for Flatlist

  function handleReturnToPrev () {
    navigation.navigate("HomeScreen")
    console.log('Return to Home Button Pressed')
  }

  function resetSymptoms () {
    setSymptoms(
      [
        { idx: 0, name: "Vaccination", status: false },
        { idx: 1, name: "Skin", status: false },
        { idx: 2, name: "Vomiting", status: false },
        { idx: 3, name: "Heartworm/Flea/Tick", status: false },
        { idx: 4, name: "Eye", status: false },
        { idx: 5, name: "Ear", status: false },
        { idx: 6, name: "Limping", status: false },
        { idx: 7, name: "Diarrhea", status: false },
        { idx: 8, name: "Itching", status: false },
        { idx: 9, name: "Other", status: false }
      ]
    )
  }


  function petSelection ( target ) {
    let updatedValues = Object.keys(petSelected)
    let updatedValuesObj = {}
    for (let i = 0; i < updatedValues.length; i++) {
      if (target === updatedValues[i]) {
        updatedValuesObj[updatedValues[i]] = true
        setCurrPetSelectionID(updatedValues[i])
        setCurrPetSelectionNameType({name: petData[i].name, type: petData[i].type})
      }
      else {
        updatedValuesObj[updatedValues[i]] = false
      }
    }
    setPetSelected(updatedValuesObj)
    setDisableNext(false)
  }
  
  function handleNext () {
    setBookComponent({...bookComponent, "BookingMain": false, "Booking01": true}) // navigate
    setBookingData({...bookingData, user_id: userDataID, pet_id: currPetSelectionID}) // set ids for user and pet
  }

  return (
    <>
      { bookComponent.BookingMain &&
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
              <Text style={[styleMaster.defaultFont, styles.titleText]}>Choose a pet for appointment:</Text>
            </View>
            <View style={styles.petsContainer}>
              <View>
                <FlatList
                  keyExtractor={(petData) => petData["_id"]} // Key
                  ItemSeparatorComponent={itemSeparator} // Gap between items
                  data={petData} // Data
                  renderItem={(data) => <PetItemBooking data={data} petSelection={petSelection} petSelected={petSelected}/>} // Component to be rendered
                  showsVerticalScrollIndicator = { false } // Removes Scrollbar
                  scrollEnabled={ true } // Enables Scrolling
                  vertical // Key to making flatlist scrollable
                />
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
        <Navigation />
      </SafeAreaView>}
      {
        bookComponent.Booking01 && 
        <Booking01 
          bookComponent={ bookComponent }
          setBookComponent={ setBookComponent }
          bookingData={ bookingData }
          setBookingData={ setBookingData }
          symptoms={ symptoms }
          setSymptoms={ setSymptoms }
        />
      }
      {
        bookComponent.Booking02 && 
        <Booking02 
          bookComponent={ bookComponent }
          setBookComponent={ setBookComponent }
          bookingData={ bookingData }
          setBookingData={ setBookingData }
        />
      }
      {
        bookComponent.Booking03 && 
        <Booking03 
          bookComponent={ bookComponent }
          setBookComponent={ setBookComponent }
          bookingData={ bookingData }
          setBookingData={ setBookingData }
          currPetSelectionNameType={ currPetSelectionNameType }
          resetSymptoms={ resetSymptoms }
        />
      }
    </>
  )
}

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    flex: 1,
    backgroundColor: colors.grayscale06,
  },
  subContainer: {
    // borderWidth: 2,
    // borderColor: 'red',
    padding: scale_mod(24),
    marginBottom: scale_mod(70),
    display: "flex",
    justifyContent: 'space-between'
  },
  headerContainer: {
    // borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale_mod(34),
  },
  returnContainer: {
    // borderWidth: 2,
    width: scale_mod(20)
  },
  headerText: {
    width: '100%',
    includeFontPadding: false,
    textAlign: "center",
    paddingRight: scale_mod(20), //Offsets space taken by return arrow
    fontFamily: "RalewayBold",
    fontSize: scale_V(17),
    color: colors.darkBlue02,
  },
  titleContainer: {
    paddingBottom: scale_mod(24),
  },
  titleText: {
    fontSize: scale_V(26),
    fontFamily: "RalewayBold",
    color: colors.darkBlue02,
  },
  petsContainer: {
    // borderWidth: 2,
    height: scale_mod(440),
    borderRadius: scale_mod(7),
    marginBottom: scale_mod(24),
  },
  buttonContainer: {
    // borderWidth: 2,
    alignSelf: "center",
    paddingBottom: scale_mod(34),
  }
});
