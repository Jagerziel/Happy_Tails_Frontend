import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import TextInputField from "../../shared/TextInputField.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";

function AddPet10( { addPetData, setAddPetData, addPetComponents, setAddPetsComponents } ) {
  console.log(addPetData)

  function handleReturnToPrev () {
    setAddPetsComponents({...addPetComponents, AddPet09: true, AddPet10: false})
  }

  function handleAddPet () {
    /* 
    **************************************************
      POST new pet information to the database
    **************************************************
    */
    setAddPetsComponents({...addPetComponents, AddPet10: false, MyPetsScreen: true})
    setAddPetData({
      name: "",
      type: "",
      dob: "",
      breed: "",
      image: "",
      sex: "",
      weight: "",
      allergies: "",
      medications: "",
      laboratory: "",
      microchip: "",
      visit_history: "",
      primary_color: "",
      notes: "",
      primary_vet: "",
      user_id: "",
      spayed: "", //NEWLY ADDED FIELD
    })

    // Add Navigation
  }

  function handleAddAnotherPet () {
    /* 
    **************************************************
      POST new pet information to the database
    **************************************************
    */
    setAddPetsComponents({...addPetComponents, AddPet10: false, AddPet01: true})
    setAddPetData({
      name: "",
      type: "",
      dob: "",
      breed: "",
      image: "",
      sex: "",
      weight: "",
      allergies: "",
      medications: "",
      laboratory: "",
      microchip: "",
      visit_history: "",
      primary_color: "",
      notes: "",
      primary_vet: "",
      user_id: "",
      spayed: "", //NEWLY ADDED FIELD
    })
  }

  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
      <View style={[styleMaster.subParent, styles.subContainer]}>
        <View style={styles.returnContainer}>
          <TouchableOpacity onPress={() => handleReturnToPrev()}>
            <ReturnArrowSVG />
          </TouchableOpacity>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{`${addPetData.name} is all set up. Do you have any other pets?`}</Text>
        </View>
        <View >
          <View style={styles.photoPlaceholder}></View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <LoginScreenButton 
          text={`Nope, that's it!`}
          handlePress={() => handleAddPet()}
        />
        <TouchableOpacity 
          style={styles.addAnotherContainer} 
          onPress={() => handleAddAnotherPet()}
        >
          <Text style={[styleMaster.defaultFont, styles.addAnotherText]}>Yes, let's add another!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default AddPet10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  subContainer: {
    display: "flex",
    alignItems: "center"
  },
  returnContainer: {
    alignSelf: 'flex-start',
    paddingTop: scale_mod(23),
    paddingLeft: scale_mod(15),
  },
  headingContainer: {
    // borderWidth: 2,
    width: scale_mod(328),
    paddingTop: scale_mod(40),
    paddingBottom: scale_mod(80),
  },
  heading: {
    fontFamily: 'RalewayBold',
    fontSize: scale_V(26),
    color: colors.black,
    textAlign: 'left',
  },
  photoPlaceholder: {
    // borderWidth: 2,
    height: scale_mod(168),
    width: scale_mod(168),
    backgroundColor: colors.grayscale03,
    borderRadius: scale_mod(84),
  },
  bottomContainer: {
    // borderWidth: 2,
    display: "flex",
    alignItems: "center",
    paddingBottom: scale_mod(32),
  },
  addAnotherContainer: {
    marginTop: scale_mod(24),
    marginBottom: scale_mod(70),
    borderWidth: scale_mod(2),
    borderColor: colors.primaryFade,
    width: scale_mod(328),
    aspectRatio: 7.795/1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  addAnotherText: {
    // color: colors.secondaryFade
    fontSize: scale_V(18),
    fontFamily: 'RobotoLight',
    includeFontPadding: false, // Removes default padding for Text 
  }
});
