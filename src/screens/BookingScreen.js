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


const symptoms = [
  { name: "Vaccination", status: false },
  { name: "Vomiting", status: false },
  { name: "Heartworm/Flea/Tick", status: false },
  { name: "Diarrhea", status: false },
  { name: "Limping", status: false },
  { name: "Eye", status: false },
  { name: "Ear", status: false },
  { name: "Skin", status: false },
  { name: "Itching", status: false },
  { name: "Other", status: false }
]

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
      { name: "Vaccination", status: false },
      { name: "Vomiting", status: false },
      { name: "Heartworm/Flea/Tick", status: false },
      { name: "Diarrhea", status: false },
      { name: "Limping", status: false },
      { name: "Eye", status: false },
      { name: "Ear", status: false },
      { name: "Skin", status: false },
      { name: "Itching", status: false },
      { name: "Other", status: false }
    ]
  )

  const [ petSelected, setPetSelected ] = useState({})
  const [ currPetSelectionID, setCurrPetSelectionID ] = useState("")
  const [ disableNext, setDisableNext ] = useState(true)
  
  
  // React Redux
  const dispatch = useDispatch()
  const userDataID = useSelector((state) => state.userData.data["_id"])
  const petData = useSelector((state) => state.petData.data);
  // console.log(userDataID)
  
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


  function petSelection ( target ) {
    let updatedValues = Object.keys(petSelected)
    let updatedValuesObj = {}
    for (let i = 0; i < updatedValues.length; i++) {
      if (target === updatedValues[i]) {
        updatedValuesObj[updatedValues[i]] = true
        setCurrPetSelectionID(updatedValues[i])
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
    marginBottom: scale_mod(70),
    display: "flex",
    justifyContent: 'space-between'
  },
  headerContainer: {
    // flex: 1,
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
  petsContainer: {
    // borderWidth: 2,
    height: scale_mod(400),
    borderRadius: scale_mod(7),
    marginBottom: scale_mod(24),
  },
  buttonContainer: {
    alignSelf: "center",
    paddingBottom: scale_mod(34),
  }
});
