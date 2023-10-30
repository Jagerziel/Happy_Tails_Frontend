// Import React
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from 'react-native';

// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import TextInputField from "../../shared/TextInputField.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";

const windowHeight = Dimensions.get('window').height;

function AddPet01( { addPetData, setAddPetData, addPetComponents, setAddPetsComponents } ) {
  // console.log(addPetData)

  function handleReturnToPrev () {
    setAddPetsComponents({...addPetComponents, MyPetsScreen: true, AddPet01: false})
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

  function handleNext () {
    setAddPetsComponents({...addPetComponents, AddPet01: false, AddPet02: true})
  }

  function handleSkip (key) {
    setAddPetData({...addPetData, [key]: ""})
    setAddPetsComponents({...addPetComponents, AddPet01: false, AddPet02: true})
  }

  function handleTextInput ( key, text ) {
    setAddPetData({...addPetData, [key]: text})
    // console.log(addPetData)
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
            <Text style={styles.heading}>What's Your Pet's Name?</Text>
          </View>
          <TextInputField 
            placeholder={'Enter Name'}
            handleTextInput={handleTextInput}
            name={"name"}
          />
        </View>
        <View style={styles.bottomContainer}>
          <LoginScreenButton 
            text={'Next'}
            handlePress={() => handleNext()}
            disabled={addPetData.name === "" ? true : false}
          />
          <TouchableOpacity 
            style={styles.skipContainer} 
            onPress={() => handleSkip('name')}
          >
            <Text style={[styleMaster.defaultFont, styles.skipText]}>Skip</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

export default AddPet01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
  },
  subContainer: {
    // borderWidth: 2,
    display: "flex",
    alignItems: "center",
    minHeight: scale_mod(windowHeight * .6),
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
  bottomContainer: {
    // borderWidth: 2,
    display: "flex",
    alignItems: "center",
    paddingBottom: scale_mod(32),
  },
  skipContainer: {
    paddingTop: scale_mod(24),
  },
  skipText: {
    color: colors.secondaryFade
  }
});
