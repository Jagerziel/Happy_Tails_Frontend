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

function AddPet05( { addPetData, setAddPetData, addPetComponents, setAddPetsComponents } ) {
  console.log(addPetData)

  useEffect(()=> {
    setAddPetData({...addPetData, sex: "Female"})
  },[])

  const [ toggle, setToggle ] = useState({
    Female: true,
    Male: false
  })

  function handleReturnToPrev () {
    setAddPetsComponents({...addPetComponents, AddPet04: true, AddPet05: false})
  }

  function handleNext () {
    setAddPetsComponents({...addPetComponents, AddPet05: false, AddPet06: true})
  }

  function handleSkip (key) {
    setAddPetData({...addPetData, [key]: ""})
    setAddPetsComponents({...addPetComponents, AddPet05: false, AddPet06: true})
  }

  function handleToggle ( key ) {
    if (key === "Female") {
      setToggle({
        Female: true,
        Male: false
      })
      setAddPetData({...addPetData, sex: "Female"})
    }
    if (key === "Male") {
      setToggle({
        Female: false,
        Male: true
      })
      setAddPetData({...addPetData, sex: "Male"})
    }
    console.log(addPetData)
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
          <Text style={styles.heading}>{`Great. Now tell us ${addPetData.name}’s gender.`}</Text>
        </View>
        <View>
          <CheckboxButton name={"Female"} active={toggle.Female} action={() => handleToggle("Female")}/>
          <View style={styles.padding}></View>
          <CheckboxButton name={"Male"} active={toggle.Male} action={() => handleToggle("Male")}/>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <LoginScreenButton 
          text={'Next'}
          handlePress={() => handleNext()}
        />
        <TouchableOpacity 
          style={styles.skipContainer} 
          onPress={() => handleSkip('sex')}
        >
          <Text style={[styleMaster.defaultFont, styles.skipText]}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default AddPet05;

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
