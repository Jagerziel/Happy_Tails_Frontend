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

// Import Assets
import ReturnArrowSVG from "../assets/return_arrow_blue.svg"

// State Management
import { useSelector, useDispatch } from "react-redux";


const symptoms = [
  "Vaccination", "Vomiting", "Heartworm/Flea/Tick", "Diarrhea", "Limping", 
  "Eye", "Ear", "Skin", "Itching", "Other"
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

  const [ petSelected, setPetSelected ] = useState({})
  const [ disableNext, setDisableNext ] = useState(true)
  
  
  // React Redux
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.userData.data)
  const petData = useSelector((state) => state.petData.data);
  // console.log(userData["_id"])
  
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

  const itemSeparator = () => <View style={{ marginVertical: scale_mod(24) }} />; // Gap for Flatlist

  function handleReturnToPrev () {
    navigation.navigate("HomeScreen")
    console.log('Return to Home Button Pressed')
  }


  function petSelection ( target ) {
    let updatedValues = Object.keys(petSelected)
    let updatedValuesObj = {}
    for (let i = 0; i < updatedValues.length; i++) {
      if (target === updatedValues[i]) updatedValuesObj[updatedValues[i]] = true
      else updatedValuesObj[updatedValues[i]] = false
    }
    setPetSelected(updatedValuesObj)
    setDisableNext(false)
  }


  return (
    <>
      { bookComponent.BookingMain &&
      <SafeAreaView style={[styles.container, styleMaster.parent]}>
        <View style={[styleMaster.subParent]}>
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
          <View style={styles.buttonContainer}>
            <LoginScreenButton
              text={"Next"}
              handlePress={() => handleAddPet("Next")}
              disabled={disableNext}
            />
          </View>
        </View>
        <Navigation />
      </SafeAreaView>}
    </>
  )
}

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
  },
  headerContainer: {
    // borderWidth: 2,
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
  petsContainer: {
    // borderWidth: 2,
    height: scale_mod(474),
    borderRadius: scale_mod(7),
    marginBottom: scale_mod(24),
  },
  buttonContainer: {
    alignSelf: "center"
  }
});
