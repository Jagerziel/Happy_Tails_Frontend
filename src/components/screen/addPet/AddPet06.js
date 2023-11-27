import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import CheckboxButton from "../../shared/CheckboxButton.js";
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";

function AddPet06( { addPetData, setAddPetData, addPetComponents, setAddPetsComponents } ) {
  // console.log(addPetData)

  useEffect(()=> {
    setAddPetData({...addPetData, spayed: "Yes"})
  },[])

  const [ toggle, setToggle ] = useState({
    Yes: true,
    No: false
  })

  function handleReturnToPrev () {
    setAddPetsComponents({...addPetComponents, AddPet05: true, AddPet06: false})
  }

  function handleNext () {
    setAddPetsComponents({...addPetComponents, AddPet06: false, AddPet07: true})
  }

  function handleSkip (key) {
    setAddPetData({...addPetData, [key]: ""})
    setAddPetsComponents({...addPetComponents, AddPet06: false, AddPet07: true})
  }

  function handleToggle ( key ) {
    if (key === "Yes") {
      setToggle({
        Yes: true,
        No: false
      })
      setAddPetData({...addPetData, spayed: "Yes"})
    }
    if (key === "No") {
      setToggle({
        Yes: false,
        No: true
      })
      setAddPetData({...addPetData, spayed: "No"})
    }
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
          <Text style={styles.heading}>{`Is ${addPetData.name} ${addPetData.sex === "Male" ? "neutered" : "spayed"}?`}</Text>
        </View>
        <View>
          <CheckboxButton name={"Yes"} active={toggle.Yes} action={() => handleToggle("Yes")}/>
          <View style={styles.padding}></View>
          <CheckboxButton name={"No"} active={toggle.No} action={() => handleToggle("No")}/>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <LoginScreenButton 
          text={'Next'}
          handlePress={() => handleNext()}
        />
        <TouchableOpacity 
          style={styles.skipContainer} 
          onPress={() => handleSkip('spayed')}
        >
          <Text style={[styleMaster.defaultFont, styles.skipText]}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default AddPet06;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
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
      color: colors.darkBlue02,
      textAlign: 'left',
  },
  padding: {
    paddingTop: scale_mod(16),
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
